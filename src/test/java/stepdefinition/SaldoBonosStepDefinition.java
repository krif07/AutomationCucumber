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
public class SaldoBonosStepDefinition {
	
	private HttpGetHelp httpGetHelp;
	private Map<String, String> respuesta;

	@Given("^que el abonado que consulta el saldo se encuentra activo Y registra saldos de bonos en Altamira Y los bonos se encuentran en los estados parametrizados.$")
    public void que_el_abonado_que_consulta_el_saldo_se_encuentra_activo_y_registra_saldos_de_bonos_en_altamira_y_los_bonos_se_encuentran_en_los_estados_parametrizados() throws Throwable {
        System.out.println("0.0 que el abonado que consulta el saldo se encuentra activo Y registra saldos de bonos en Altamira Y los bonos se encuentran en los estados parametrizados");
    }

	@Given("^que el abonado (.+) consulta saldo de bonos (.+) (.+)$")
    public void que_el_abonado_consulta_saldo_de_bonos(String msisdn, String urlservicio, String recordsnumber) throws Throwable {
        System.out.println("1.1 que el abonado (.+) consulta saldo de bonos (.+) (.+)$");
        
        httpGetHelp = new HttpGetHelp();
        httpGetHelp.setUrlService(urlservicio, msisdn, recordsnumber, "A", "C");       
    }

    @When("^Altamira retorna un error$")
    public void altamira_retorna_un_error() throws Throwable {
    	System.out.println("1.2 Altamira retorna un error$");
    	
    	httpGetHelp.getJson();
    	respuesta = httpGetHelp.getRespuesta();
    	assertFalse(respuesta.get("status").equals("200"));
    }

    @Then("^devolvera el mensaje de error en el formato estandar$")
    public void devolvera_el_mensaje_de_error_en_el_formato_estandar() throws Throwable {
    	System.out.println("1.3 devolvera el mensaje de error en el formato estandar$");
    	System.out.println(respuesta);    	    	
    	assertTrue(respuesta.get("service").equals("QueryOCSBoltonsDetailsMI"));    	
    }
    
 
    @Given("^que los escenarios 1 o 2 fueron fallidos y que el abonado (.+) consulta saldo de bonos (.+) (.+)$")
    public void que_los_escenarios_1_o_2_fueron_fallidos_y_que_el_abonado_consulta_saldo_de_bonos(String msisdn, String urlservicio, String recordsnumber) throws Throwable {
    	System.out.println("2.1 que los escenarios 1 o 2 fueron fallidos y que el abonado (.+) consulta saldo de bonos (.+) (.+)");
    	httpGetHelp = new HttpGetHelp();
        httpGetHelp.setUrlService(urlservicio, msisdn, recordsnumber, "A", "C");
    }
    
    @When("^los valores retornados de Altamira son mayores a cero$")
    public void los_valores_retornados_de_altamira_son_mayores_a_cero() throws Throwable {
    	System.out.println("2.2 los valores retornados de Altamira son mayores a cero");
    	httpGetHelp.getJson();
    	respuesta = httpGetHelp.getRespuesta();
    	assertTrue(respuesta.get("status").equals("200"));
    	assertTrue(Integer.parseInt(respuesta.get("totalRegistros")) >= 0);
    	assertTrue(Long.parseLong(respuesta.get("amount")) > 0);
    }

    @Then("^entregar los valores registrados en los monederos para el abonado en Altamira.$")
    public void entregar_los_valores_registrados_en_los_monederos_para_el_abonado_en_altamira() throws Throwable {
    	System.out.println("2.3 entregar los valores registrados en los monederos para el abonado en Altamira");
    	System.out.println(respuesta);
    	assertTrue(Long.parseLong(respuesta.get("remainingAmount")) >= Long.parseLong(respuesta.get("amount")) );
    }
	        
    @When("^los valores retornados de Altamira son menores a cero$")
    public void los_valores_retornados_de_altamira_son_menores_a_cero() throws Throwable {
    	System.out.println("3.2 los valores retornados de Altamira son menores a cero");
    	httpGetHelp.getJson();
    	respuesta = httpGetHelp.getRespuesta();
    	assertTrue(respuesta.get("status").equals("200"));
    	assertTrue(Integer.parseInt(respuesta.get("totalRegistros")) >= 0);
    	assertTrue(Long.parseLong(respuesta.get("remainingAmount")) <= 0 );
    }

    @Then("^devolvera el valor cero como saldo de monederos$")
    public void devolvera_el_valor_cero_como_saldo_de_monederos() throws Throwable {
    	System.out.println("3.3 devolvera el valor cero como saldo de monederos");
    	System.out.println(respuesta);    	
    	assertTrue(Long.parseLong(respuesta.get("amount")) == 0);
    }
}

