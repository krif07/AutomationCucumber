package stepdefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;

import static org.junit.Assert.assertTrue;

import java.util.Map;

import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class StepDefinition {

	private HttpPostHelp httpPostHelp;
	private Map<String, String> response;
	private String tagToSend = "headerInfo";
	
    
	@Given("^Que el microservicio de consulta de saldos y consumos se encuentra operativo$")
    public void que_el_microservicio_de_consulta_de_saldos_y_consumos_se_encuentra_operativo() throws Throwable {
    	
		System.out.println("1. Que el microservicio de consulta de saldos y consumos se encuentra operativo");
		
    }

    @Given("^Que se solicita la firma del servicio$")
    public void que_se_solicita_la_firma_del_servicio() throws Throwable {
    	System.out.println("2.1 Que se solicita la firma del servicio");
    	httpPostHelp = new HttpPostHelp();
		// assertTrue(httpPostHelp.getTagNameToGet().contentEquals(tagToSend));
    }

    @When("^se acceda a la firma del microservicio$")
    public void se_acceda_a_la_firma_del_microservicio() throws Throwable {
    	System.out.println("2.2 se acceda a la firma del microservicio");
    	httpPostHelp.setTagNameToGet("headerInfo");
    	httpPostHelp.sendMessagePost(httpPostHelp.getUrlService(), httpPostHelp.getXmlRequest1());
    	response = httpPostHelp.getResponse();
    	assertTrue(response != null);    	
    }

    @Then("^se obtendra el wsdl correspondiente$")
    public void se_obtendra_el_wsdl_correspondiente() throws Throwable {
    	System.out.println("2.3 se obtendra el wsdl correspondiente");
    	System.out.println(response.get("status"));
        assertTrue(response.get("status").equals("200"));
        assertTrue(response.get("statusCode").equals("OK"));
        assertTrue(response.get("childNodeName").equals("application"));
        assertTrue(response.get("childNodeText").equals("WHATSAPP"));
    }
    
    @Given("^Que se consume el microservicio de consulta de saldos y consumos$")
    public void que_se_consume_el_microservicio_de_consulta_de_saldos_y_consumos() throws Throwable {
    	System.out.println("3.1 Que se consume el microservicio de consulta de saldos y consumos");
    	httpPostHelp = new HttpPostHelp();
		// assertTrue(httpPostHelp.getTagNameToGet().contentEquals(tagToSend));
    }   

    @When("^Se envía una solicitud al microservicio correcta$")
    public void se_envia_una_solicitud_al_microservicio_correcta() throws Throwable {
    	System.out.println("3.2 Se envía una solicitud al microservicio correcta");
    	httpPostHelp.setTagNameToGet("ns2:queryOCSBalancesAndBoltonsResponse");
    	httpPostHelp.sendMessagePost(httpPostHelp.getUrlService(), httpPostHelp.getXmlRequest1()); /*enviar el tag desde gherkyns en el when*/
    	response = httpPostHelp.getResponse();
    	assertTrue(response != null);
    }    

    @Then("^el microservicio genera una respuesta exitosa$")
    public void el_microservicio_genera_una_respuesta_exitosa() throws Throwable {
    	System.out.println("3.3 el microservicio genera una respuesta exitosa");
    	System.out.println(response.get("status"));
        assertTrue(response.get("status").equals("200"));
        assertTrue(response.get("statusCode").equals("OK"));
        assertTrue(response.get("childNodeName").equals("ns2:showBalances"));
        assertTrue(response.get("childNodeText").equals("false"));
    }

}