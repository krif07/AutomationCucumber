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
	
	@Given("^que el servicio QueryOCSBalance devolvio los saldos de monederos en Altamira$")
    public void que_el_servicio_queryocsbalance_devolvio_los_saldos_de_monederos_en_altamira() throws Throwable {
        System.out.println("0. que el servicio QueryOCSBalance devolvio los saldos de monederos en Altamira$");
    }	
		
	@Given("^que existan balances en Altamira$")
	public void que_existan_balances_en_altamira() throws Throwable {
		System.out.println("1.1 que existan balances en Altamira");
		
		httpGetHelp = new HttpGetHelp();
	}

    @When("^el microservicio (.+) carga los balances a la cache $")
    public void el_microservicio_carga_los_balances_a_la_cache(String urlservicio) throws Throwable {
        System.out.println("1.2 el microservicio (.+) carga los balances a la cache $");
        
        httpGetHelp.setUrlService(urlservicio);
        httpGetHelp.getJson();
    	respuesta = httpGetHelp.getRespuesta();
    	assertFalse(respuesta.get("status").equals("200"));
    }

    @Then("^se devuelve mensaje ok para balances$")
    public void se_devuelve_mensaje_ok_para_balances() throws Throwable {
        System.out.println("1.3 se devuelve mensaje ok para balances$");
        
        System.out.println(respuesta);    	
    	assertTrue(respuesta.get("opCode").equals("00"));
    	assertTrue(respuesta.get("opMsg").equals("OK"));
    }
    
    @Given("^que el abonado consulta saldo de monederos (.+) (.+)$")
    public void que_el_abonado_consulta_saldo_de_monederos(String urlservicio, String codigo) throws Throwable {
        System.out.println("2-3.1 que el abonado consulta saldo de monederos (.+) (.+)$");
        
        httpGetHelp = new HttpGetHelp();
        httpGetHelp.setUrlService(urlservicio, codigo);
    }

    @When("^los monederos no correspondan a los configurados y cargados en la Cache$")
    public void los_monederos_no_correspondan_a_los_configurados_y_cargados_en_la_cache() throws Throwable {
        System.out.println("2.2 los monederos no correspondan a los configurados y cargados en la Cache$");
        
        httpGetHelp.getJson();
    	respuesta = httpGetHelp.getRespuesta();
    	assertFalse(respuesta.get("status").equals("200"));
    }

    @Then("^devolvera un error estandar controlado$")
    public void devolvera_un_error_estndar_controlado() throws Throwable {
        System.out.println("2.3 devolvera un error estandar controlado$");
        
        System.out.println(respuesta);    	    	
    	assertTrue(respuesta.get("service").equals("GetShowBalancesCacheMI"));
    }

    @When("^los monederos correspondan a los configurados y cargados en la Cache$")
    public void los_monederos_correspondan_a_los_configurados_y_cargados_en_la_cache() throws Throwable {
        System.out.println("3.2 los monederos correspondan a los configurados y cargados en la Cache$");
        
        httpGetHelp.getJson();
    	respuesta = httpGetHelp.getRespuesta();
    	assertTrue(respuesta.get("status").equals("200"));
    }

    @Then("^devolvera el saldo de los monederos correspondientes$")
    public void devolvera_el_saldo_de_los_monederos_correspondientes() throws Throwable {
        System.out.println("3.3 devolvera el saldo de los monederos correspondientes$");
        
        System.out.println(respuesta);
    	assertTrue(respuesta.get("showBalances").equals("0") || respuesta.get("showBalances").equals("1"));
    }
    
}
