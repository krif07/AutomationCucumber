package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import java.util.Map;

import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class CacheBalanceShowBalanceStepDefinition {
	
	private HttpGetHelp httpGetHelp;
	private Map<String, String> respuesta;
	
	private String complemento;
	
	@Given("^que la base de datos redis para balance exista$")
    public void que_la_base_de_datos_redis_para_balance_exista() throws Throwable {
        System.out.println("0. que la base de datos redis para balance exista$");
    }

    @Given("^que los balances se encuentren cargados en memoria $")
    public void que_los_balances_se_encuentren_cargados_en_memoria() throws Throwable {
        System.out.println("1-2.1 que los balances se encuentren cargados en memoria $");
                        
        httpGetHelp = new HttpGetHelp();                
    }

    @When("^el microservicio (.+) no encuentra el balance buscado por codigo (.+)$")
    public void el_microservicio_no_encuentra_el_balance_buscado_por_codigo(String urlservicio, String codigo) throws Throwable {
        System.out.println("1.2 el microservicio (.+) no encuentra el balance buscado por codigo (.+)$");
        
        this.complemento = codigo;
        httpGetHelp.setUrlService(urlservicio, codigo);
        
        httpGetHelp.getJson();
    	respuesta = httpGetHelp.getRespuesta();
    	assertFalse(respuesta.get("status").equals("200"));
    }

    @Then("^se devuelve el mensaje de error al no encontrar el balance$")
    public void se_devuelve_el_mensaje_de_error_al_no_encontrar_el_balance() throws Throwable {
        System.out.println("1.3 se devuelve el mensaje de error al no encontrar el balance$");
        
        System.out.println(respuesta);    	    	
    	assertTrue(respuesta.get("service").equals("GetShowBalancesCacheMI"));
    }
       

    @When("^el microservicio (.+) si encuentra el balance buscado por codigo (.+)$")
    public void el_microservicio_si_encuentra_el_balance_buscado_por_codigo(String urlservicio, String codigo) throws Throwable {
        System.out.println("2.2 el microservicio (.+) encuentra el balance buscado por codigo (.+)$");
        
        this.complemento = codigo;
        httpGetHelp.setUrlService(urlservicio, codigo);
        
        httpGetHelp.getJson();
    	respuesta = httpGetHelp.getRespuesta();
    	assertTrue(respuesta.get("status").equals("200"));
    }

    @Then("^se devuelve el balance encontrado$")
    public void se_devuelve_el_balance_encontrado() throws Throwable {
        System.out.println("4.3 se devuelve el balance encontrado$");
        
        System.out.println(respuesta);
    	assertTrue(respuesta.get("showBalances").equals("0") || respuesta.get("showBalances").equals("1"));
    }
}