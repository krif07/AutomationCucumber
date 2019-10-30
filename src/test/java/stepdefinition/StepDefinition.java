package stepdefinition;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;

import static org.junit.Assert.assertTrue;

import java.util.List;
import java.util.Map;

import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class StepDefinition {

	private HttpPostHelp httpPostHelp;
	private Map<String, String> response;
	private String childTag;
	private String childTagText;
	private String urlServicio;
	
    
	@Given("^Que el microservicio de consulta de saldos y consumos se encuentra operativo$")
    public void que_el_microservicio_de_consulta_de_saldos_y_consumos_se_encuentra_operativo() throws Throwable {
    	
		System.out.println("1. Que el microservicio de consulta de saldos y consumos se encuentra operativo");
		
    }

    @Given("^Que se solicita la firma del servicio \"([^\"]*)\"$")
    public void que_se_solicita_la_firma_del_servicio(String urlServicio) throws Throwable {
    	System.out.println("2.1 Que se solicita la firma del servicio");
    	this.urlServicio = urlServicio;
    	httpPostHelp = new HttpPostHelp();		
    }

    @When("^se acceda a la firma del microservicio \"([^\"]*)\"$")
    public void se_acceda_a_la_firma_del_microservicio(String tag) throws Throwable {
    	System.out.println("2.2 se acceda a la firma del microservicio");
    	
    	httpPostHelp.setTagNameToGet(tag);
    	httpPostHelp.setUrlService(this.urlServicio);
    	httpPostHelp.setMethod("GET");
    	
    	httpPostHelp.sendMessagePost(null);
    	response = httpPostHelp.getResponse();
    	assertTrue(response != null);    	
    }

    @Then("^se obtendra el wsdl correspondiente$")
    public void se_obtendra_el_wsdl_correspondiente() throws Throwable {
    	System.out.println("2.3 se obtendra el wsdl correspondiente");
    	    	    	
        assertTrue(response.get("status").equals("200"));
        assertTrue(response.get("statusCode").equals("OK"));
        assertTrue(response.get("childNodeName").equals("WL5G3N0:message"));
        //assertTrue(response.get("childNodeText").equals("WHATSAPP"));
    }
    
    @Given("^Que se consume el microservicio de consulta de saldos y consumos$")
    public void que_se_consume_el_microservicio_de_consulta_de_saldos_y_consumos() throws Throwable {
    	System.out.println("3.1 Que se consume el microservicio de consulta de saldos y consumos");
    	httpPostHelp = new HttpPostHelp();		
    }   

    @When("^Se envía una solicitud al microservicio correcta$")
    public void se_envia_una_solicitud_al_microservicio_correcta(DataTable data) throws Throwable {
    	System.out.println("3.2 Se envía una solicitud al microservicio correcta");
    	
    	/*
    	 * | http://10.112.229.140:9011/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v3 | ns2:queryOCSBalancesAndBoltonsResponse | ns2:showBalances | false |
    	 */
    	List<List<String>> obj = data.raw();
    	String url = obj.get(0).get(0);
    	String parentTag = obj.get(0).get(1);
    	this.childTag = obj.get(0).get(2);
    	this.childTagText = obj.get(0).get(3);
    	
    	httpPostHelp.setUrlService(url);
    	httpPostHelp.setTagNameToGet(parentTag);
    	httpPostHelp.setMethod("POST");
    	
    	httpPostHelp.sendMessagePost(httpPostHelp.getXmlRequest1()); 
    	response = httpPostHelp.getResponse();
    	assertTrue(response != null);
    }    

    @Then("^el microservicio genera una respuesta exitosa$")
    public void el_microservicio_genera_una_respuesta_exitosa() throws Throwable {
    	System.out.println("3.3 el microservicio genera una respuesta exitosa");
    	    	
        assertTrue(response.get("status").equals("200"));
        assertTrue(response.get("statusCode").equals("OK"));
        assertTrue(response.get("childNodeName").equals(this.childTag));
        assertTrue(response.get("childNodeText").equals(this.childTagText));
    }
    
    
    @Given("^Que se consume el microservicio de consulta de saldos y consumos 2$")
    public void que_se_consume_el_microservicio_de_consulta_de_saldos_y_consumos_2() throws Throwable {
    	System.out.println("4.1 Que se consume el microservicio de consulta de saldos y consumos 2");
    	httpPostHelp = new HttpPostHelp();
    }

    @When("^Se envía una solicitud al microservicio (.+) correcta  con (.+)$")
    public void se_enva_una_solicitud_al_microservicio_correcta_con(String urlservicio, String parenttag) throws Throwable {
    	System.out.println("4.2 Se envía una solicitud al microservicio correcta");
    	
    	httpPostHelp.setUrlService(urlservicio);
    	httpPostHelp.setTagNameToGet(parenttag);
    	httpPostHelp.setMethod("POST");
    	
    	httpPostHelp.sendMessagePost(httpPostHelp.getXmlRequest1()); 
    	response = httpPostHelp.getResponse();
    	assertTrue(response != null);
    }

    @Then("^el microservicio genera una respuesta del tag (.+) exitosa (.+)$")
    public void el_microservicio_genera_una_respuesta_del_tag_exitosa(String childtag, String childtagtext) throws Throwable {
    	System.out.println("4.3 el microservicio genera una respuesta exitosa");
    	    	
        assertTrue(response.get("status").equals("200"));
        assertTrue(response.get("statusCode").equals("OK"));
        assertTrue(response.get("childNodeName").equals(childtag));
        assertTrue(response.get("childNodeText").equals(childtagtext));
    }

}