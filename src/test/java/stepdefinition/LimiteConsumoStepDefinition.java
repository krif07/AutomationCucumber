package stepdefinition;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import java.util.Map;

import org.junit.runner.RunWith;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
public class LimiteConsumoStepDefinition {

	private HttpGetHelp httpGetHelp;
	private Map<String, String> respuesta;
	
	@Given("^que el abonado que consulta el saldo se encuentra activo Y es VPN Y registra limites de consumo en Altamira$")
    public void que_el_abonado_que_consulta_el_saldo_se_encuentra_activo_y_es_vpn_y_registra_limites_de_consumo_en_altamira() throws Throwable {
        System.out.println("0. que el abonado que consulta el saldo se encuentra activo Y es VPN Y registra limites de consumo en Altamira$");
    }

    @Given("^que el abonado (.+) consulta limites de consumo (.+) (.+)$")
    public void que_el_abonado_consulta_limites_de_consumo(String msisdn, String urlservicio, String recordsnumber) throws Throwable {
        System.out.println("1.1 que el abonado (.+) consulta limites de consumo (.+) (.+)$");
        
        httpGetHelp = new HttpGetHelp();
        httpGetHelp.setUrlService(urlservicio, msisdn, recordsnumber, null, null, null, null);
    }

    @When("^Altamira retorna un error LC$")
    public void altamira_retorna_un_error_lc() throws Throwable {
        System.out.println("1.2 Altamira retorna un error$");
        
        httpGetHelp.getJson();
    	respuesta = httpGetHelp.getRespuesta();
    	assertFalse(respuesta.get("status").equals("200"));
    }

    @Then("^devolvera el mensaje de error en el formato estandar LC$")
    public void devolvera_el_mensaje_de_error_en_el_formato_estandar_lc() throws Throwable {
        System.out.println("1.3 devolvera el mensaje de error en el formato estandar$");
        
        System.out.println(respuesta);	    	
    	assertTrue(respuesta.get("service").equals("QueryOCSGroupMemberAttributesMI"));
    }
    
    @Given("^que los escenarios 1 o 2 fueron fallidos y que el abonado (.+) consulta limites de consumo (.+) (.+)$")
    public void que_los_escenarios_1_o_2_fueron_fallidos_y_que_el_abonado_consulta_limites_de_consumo(String msisdn, String urlservicio, String recordsnumber) throws Throwable {
    	System.out.println("2.1 que los escenarios 1 o 2 fueron fallidos y que el abonado (.+) consulta limites de consumo (.+) (.+)");
    	
    	httpGetHelp = new HttpGetHelp();
        httpGetHelp.setUrlService(urlservicio, msisdn, recordsnumber, null, null, null, null);
    }

    @When("^los valores retornados de Altamira son mayores a cero LC$")
    public void los_valores_retornados_de_altamira_son_mayores_a_cero_lc() throws Throwable {
        System.out.println("2.2 los valores retornados de Altamira son mayores a cero$");
        
        httpGetHelp.getJson();
    	respuesta = httpGetHelp.getRespuesta();
    	assertTrue(respuesta.get("status").equals("200"));
    	assertTrue(Integer.parseInt(respuesta.get("totalRegistros")) >= 0);
    }

    @Then("^entregar los valores registrados en los monederos para el abonado en Altamira LC$")
    public void entregar_los_valores_registrados_en_los_monederos_para_el_abonado_en_altamira_lc() throws Throwable {
    	System.out.println("2.3 entregar los valores registrados en los monederos para el abonado en Altamira$");    	
    	
    	assertTrue(Long.parseLong(respuesta.get("spendLimitAmount")) >= Long.parseLong(respuesta.get("spendValue")) );
    }
   
   
    @When("^los valores retornados de Altamira son menores a cero LC$")
    public void los_valores_retornados_de_altamira_son_menores_a_cero_lc() throws Throwable {
        System.out.println("3.2 los valores retornados de Altamira son menores a cero$");
        
        httpGetHelp.getJson();
    	respuesta = httpGetHelp.getRespuesta();
    	assertTrue(respuesta.get("status").equals("200"));
    	assertTrue(Integer.parseInt(respuesta.get("totalRegistros")) >= 0);
    	assertTrue(Long.parseLong(respuesta.get("spendLimitAmount")) <= 0 );
    }

    @Then("^devolvera el valor cero como saldo de monederos LC$")
    public void devolvera_el_valor_cero_como_saldo_de_monederos_lc() throws Throwable {
    	System.out.println("3.3 devolvera el valor cero como saldo de monederos$");
    	
    	assertTrue(Long.parseLong(respuesta.get("spendValue")) == 0);
    }
    
}
