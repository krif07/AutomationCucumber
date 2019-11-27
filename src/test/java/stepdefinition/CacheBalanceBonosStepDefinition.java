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
public class CacheBalanceBonosStepDefinition {
	
	private HttpGetHelp httpGetHelp;
	private Map<String, String> respuesta;
	
	private String complemento;
	
	@Given("^que la base de datos redis exista$")
    public void que_la_base_de_datos_redis_exista() throws Throwable {
        System.out.println("0. que la base de datos redis exista$");
    }

	@Given("^que los bonos se encuentren cargados en memoria$")
    public void que_los_bonos_se_encuentren_cargados_en_memoria() throws Throwable {
        System.out.println("1-2.1 que los bonos se encuentren cargados en memoria");
                
        httpGetHelp = new HttpGetHelp();        
    }

    @When("^el microservicio (.+) no encuentra los bonos por tipo de bono (.+)$")
    public void el_microservicio_no_encuentra_los_bonos_por_tipo_de_bono(String urlservicio, String tipobono) throws Throwable {
        System.out.println("1.2 el microservicio (.+) no encuentra los bonos por tipo de bono (.+)$");
        
        this.complemento = tipobono;
        httpGetHelp.setUrlService(urlservicio, tipobono);
        
        httpGetHelp.getJson();
    	respuesta = httpGetHelp.getRespuesta();
    	assertFalse(respuesta.get("status").equals("200"));
    }

    @Then("^se devuelve el mensaje de error al no encontrar el bono$")
    public void se_devuelve_el_mensaje_de_error_al_no_encontrar_el_bono() throws Throwable {
        System.out.println("1.3 se devuelve el mensaje de error al no encontrar el bono$");
        
        System.out.println(respuesta);    	    	
    	assertTrue(respuesta.get("service").equals("QueryBoltonInfoCacheMI"));
    }
        
    @When("^el microservicio (.+) si encuentra los bonos por tipo de bono (.+)$")
    public void el_microservicio_si_encuentra_los_bonos_por_tipo_de_bono(String urlservicio, String tipobono) throws Throwable {    
        System.out.println("2.2 el microservicio (.+) encuentra los bonos por tipo de bono (.+)$");
        
        this.complemento = tipobono;
        httpGetHelp.setUrlService(urlservicio, tipobono);
        
        httpGetHelp.getJson();
    	respuesta = httpGetHelp.getRespuesta();
    	assertTrue(respuesta.get("status").equals("200"));
    }

    @Then("^se devuelve el bono encontrado$")
    public void se_devuelve_el_bono_encontrado() throws Throwable {
        System.out.println("2.3 se devuelve el bono encontrado$");
        
        System.out.println(respuesta);    	
    	assertTrue(respuesta.get("bonusType").equals(this.complemento));
    }

}
