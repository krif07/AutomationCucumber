package stepdefinition;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import java.util.Map;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class BonosStepDefinition {

	private HttpGetHelp httpGetHelp;
	private Map<String, String> respuesta;
	
	@Given("^que el abonado que consulta el saldo se encuentra activo Y tiene bonos en Altamira Y los bonos se encuentran en los estados parametrizados B$")
    public void que_el_abonado_que_consulta_el_saldo_se_encuentra_activo_y_tiene_bonos_en_altamira_y_los_bonos_se_encuentran_en_los_estados_parametrizados_b() throws Throwable {
        System.out.println("0. que el abonado que consulta el saldo se encuentra activo Y tiene bonos en Altamira Y los bonos se encuentran en los estados parametrizados$");
    }

    @Given("^que el abonado (.+) consulta saldo bonos B (.+) (.+) (.+) (.+)$")
    public void que_el_abonado_consulta_saldo_bonos_b(String msisdn, String urlservicio, String recordsnumber, String boltoncode, String boltontypecode) throws Throwable {
    	System.out.println("1.1 que el abonado (.+) consulta saldo bonos (.+) (.+) (.+) (.+)$");
    	
    	httpGetHelp = new HttpGetHelp();
        httpGetHelp.setUrlService(urlservicio, msisdn, recordsnumber, null, null, boltoncode, boltontypecode);
    }

    @When("^Altamira retorna un error B$")
    public void altamira_retorna_un_error_b() throws Throwable {
    	System.out.println("1.2 Altamira retorna un error B$");
    	
    	httpGetHelp.getJson();
    	respuesta = httpGetHelp.getRespuesta();
    	assertFalse(respuesta.get("status").equals("200"));
    }

    @Then("^devolvera el mensaje de error en el formato estandar B$")
    public void devolvera_el_mensaje_de_error_en_el_formato_estandar_b() throws Throwable {
    	System.out.println("1.3 devolvera el mensaje de error en el formato estandar B$");
    	
    	System.out.println(respuesta);    	    	
    	assertTrue(respuesta.get("service").equals("QueryOCSBoltonsMI"));
    }
    
    @Given("^que los escenarios 1 o 2 fueron fallidos y que el abonado (.+) consulta saldo bonos B (.+) (.+) (.+) (.+)$")
    public void que_los_escenarios_1_o_2_fueron_fallidos_y_que_el_abonado_consulta_saldo__bonos_b(String msisdn, String urlservicio, String recordsnumber, String boltoncode, String boltontypecode) throws Throwable {
    	System.out.println("2.1 que los escenarios 1 o 2 fueron fallidos y que el abonado (.+) consulta saldo bonos (.+) (.+) (.+) (.+)$");
    	httpGetHelp = new HttpGetHelp();
    	httpGetHelp.setUrlService(urlservicio, msisdn, recordsnumber, null, null, boltoncode, boltontypecode);
    }

    @When("^el abonado tiene bonos en Altamira B$")
    public void el_abonado_tiene_bonos_en_altamira_b() throws Throwable {
    	System.out.println("2.3 el abonado tiene bonos en Altamira$");
    	
    	httpGetHelp.getJson();
    	respuesta = httpGetHelp.getRespuesta();
    	assertTrue(respuesta.get("status").equals("200"));    	    	
    }

    @Then("^entregar la lista de bonos para el abonado en Altamira B$")
    public void entregar_la_lista_de_bonos_para_el_abonado_en_altamira_b() throws Throwable {
    	System.out.println("2.3 entregar la lista de bonos para el abonado en Altamira$");
    	
    	System.out.println(respuesta);
    	assertTrue(Integer.parseInt(respuesta.get("totalRegistros")) >= 0);
    	assertTrue(respuesta.get("boltonBasicInfo") != null );
    }
		  
}
