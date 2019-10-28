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
    	
		System.out.println("1");
		httpPostHelp = new HttpPostHelp(tagToSend);
		assertTrue(httpPostHelp.getTagNameToGet().contentEquals(tagToSend));		
        
    }

    @Given("^Que se solicita la firma del servicio$")
    public void que_se_solicita_la_firma_del_servicio() throws Throwable {
    	System.out.println("2");
    	httpPostHelp = new HttpPostHelp(tagToSend);
		assertTrue(httpPostHelp.getTagNameToGet().contentEquals(tagToSend));
    }

    @Given("^Que se consume el microservicio de consulta de saldos y consumos$")
    public void que_se_consume_el_microservicio_de_consulta_de_saldos_y_consumos() throws Throwable {
    	System.out.println("3");
    	httpPostHelp = new HttpPostHelp(tagToSend);
		assertTrue(httpPostHelp.getTagNameToGet().contentEquals(tagToSend));
    }

    @When("^se acceda a la firma del microservicio$")
    public void se_acceda_a_la_firma_del_microservicio() throws Throwable {
    	System.out.println("4"); //enviar solicitud y almacenar respuesta
    	httpPostHelp.sendMessagePost(httpPostHelp.getUrlService(), httpPostHelp.getXmlRequest1());
    	response = httpPostHelp.getResponse();
    	assertTrue(response != null);    	
    }

    @When("^Se envía una solicitud al microservicio correcta$")
    public void se_envia_una_solicitud_al_microservicio_correcta() throws Throwable {
    	System.out.println("5");
    	httpPostHelp.sendMessagePost(httpPostHelp.getUrlService(), httpPostHelp.getXmlRequest1());
    	response = httpPostHelp.getResponse();
    	assertTrue(response != null);
    }

    @Then("^se obtendra el wsdl correspondiente$")
    public void se_obtendra_el_wsdl_correspondiente() throws Throwable {
    	System.out.println("6");
    	System.out.println(response.get("status"));
        assertTrue(response.get("status").equals("200"));
        assertTrue(response.get("statusCode").equals("OK"));
        assertTrue(response.get("childNodeName").equals("application"));
        assertTrue(response.get("childNodeText").equals("WHATSAPP"));
    }

    @Then("^el microservicio genera una respuesta exitosa$")
    public void el_microservicio_genera_una_respuesta_exitosa() throws Throwable {
    	System.out.println("7");
    	System.out.println(response.get("status"));
        assertTrue(response.get("status").equals("200"));
        assertTrue(response.get("statusCode").equals("OK"));
    }

}