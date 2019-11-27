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
public class SubscriberDetailStepDefinition {
	
	private HttpGetHelp httpGetHelp;
	private Map<String, String> respuesta;
	
	@Given("^que el abonado que consulta el saldo se encuentra activo Y registra saldos de bonos en Altamira Y los bonos se encuentran en los estados parametrizados$")
    public void que_el_abonado_que_consulta_el_saldo_se_encuentra_activo_y_registra_saldos_de_bonos_en_altamira_y_los_bonos_se_encuentran_en_los_estados_parametrizados() throws Throwable {
        System.out.println("0 que el abonado que consulta el saldo se encuentra activo Y registra saldos de bonos en Altamira Y los bonos se encuentran en los estados parametrizados$");
    }

	@Given("^que el abonado (.+) consulta saldos SD (.+) (.+)$")
    public void que_el_abonado_consulta_saldos_sd(String msisdn, String urlservicio, String recordsnumber) throws Throwable {
        System.out.println("1.1 que el abonado consulta saldos SD$");
        
        httpGetHelp = new HttpGetHelp();
        httpGetHelp.setUrlService(urlservicio, msisdn, recordsnumber, null, null, null, null);
    }

    @When("^Altamira retorna un error SD$")
    public void altamira_retorna_un_error_sd() throws Throwable {
        System.out.println("1.2 Altamira retorna un error SD$");
        
        httpGetHelp.getJson();
    	respuesta = httpGetHelp.getRespuesta();
    	assertFalse(respuesta.get("status").equals("200"));
    }

    @Then("^devolvera el mensaje de error en el formato estandar SD$")
    public void devolvera_el_mensaje_de_error_en_el_formato_estandar_sd() throws Throwable {
        System.out.println("1.3 devolvera el mensaje de error en el formato estandar SD$");
        
        System.out.println(respuesta);	    	
    	assertTrue(respuesta.get("service").equals("QuerySubscriberOCSServiceDetailMI"));
    }
    
    
    @Given("^que los escenarios 1 o 2 fueron fallidos y que existe información del abonado en Altamira SD$")
    public void que_los_escenarios_1_o_2_fueron_fallidos_y_que_existe_informacin_del_abonado_en_altamira_sd() throws Throwable {
        System.out.println("2.1 que los escenarios 1 o 2 fueron fallidos y que existe información del abonado en Altamira SD$");
        
        httpGetHelp = new HttpGetHelp();        
    }

    @When("^el estado del abonado (.+) si este dentro de los valores parametrizados SD (.+) (.+)$")
    public void el_estado_del_abonado_si_este_dentro_de_los_valores_parametrizados_sd(String msisdn, String urlservicio, String recordsnumber) throws Throwable {
        System.out.println("2.2 el estado del abonado si este dentro de los valores parametrizados SD$");
        
        httpGetHelp.setUrlService(urlservicio, msisdn, recordsnumber, null, null, null, null);
        httpGetHelp.getJson();
    	respuesta = httpGetHelp.getRespuesta();
    	assertTrue(respuesta.get("status").equals("200"));    	
    }

    @Then("^entregar la información del abonado en Altamira plan, fecha de alta, ciclo, estado$")
    public void entregar_la_informacin_del_abonado_en_altamira_plan_fecha_de_alta_ciclo_estado() throws Throwable {
        System.out.println("entregar la información del abonado en Altamira plan, fecha de alta, ciclo, estado$");
        
        assertTrue(respuesta.get("subscriberBasicInfo").equals("OK"));
        assertTrue(!respuesta.get("tariffPlanId").isEmpty());
        assertTrue(!respuesta.get("lifeCycleStatusDate").isEmpty());
        
    }
  
   /* @When("^el estado del abonado (.+) no este dentro de los valores parametrizados SD (.+) (.+)$")
    public void el_estado_del_abonado_no_este_dentro_de_los_valores_parametrizados_sd(String msisdn, String urlservicio, String recordsnumber) throws Throwable {
        System.out.println("3.2 el estado del abonado no este dentro de los valores parametrizados SD$");
        
        httpGetHelp.setUrlService(urlservicio, msisdn, recordsnumber, null, null, null, null);
        httpGetHelp.getJson();
    	respuesta = httpGetHelp.getRespuesta();
    	assertFalse(respuesta.get("status").equals("200"));
    }

    @Then("^devolvera el mensaje de error en formato estandar SD$")
    public void devolvera_el_mensaje_de_error_en_formato_estandar_sd() throws Throwable {
        System.out.println("3.3 devolvera el mensaje de error en formato estandar SD$");
        
        System.out.println(respuesta);	    	
    	assertTrue(respuesta.get("service").equals("QuerySubscriberOCSServiceDetailMI"));
    }*/
}
