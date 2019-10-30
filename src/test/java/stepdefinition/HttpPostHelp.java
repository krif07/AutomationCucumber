package stepdefinition;

import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.io.StringReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

public class HttpPostHelp {
	
	

	public HttpPostHelp() {
		
		this.urlService = getUrl1();
		this.method = getMethodPost();
		this.response = null;
		
	}
	
	private HashMap<String, String> response;

	private String xmlRequest1 = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:v1=\"http://telefonica.ec/CommonBusinessEntities/BusinessInteractionABE/HeaderInfo/v1\" xmlns:typ=\"http://telefonica.ec/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v2/types\" xmlns:v11=\"http://telefonica.ec/Customer/CustomerABE/SubscriberIdentification/v1\">\r\n"
			+ "   <soapenv:Header>\r\n" + "      <v1:headerInfo>\r\n"
			+ "         <v1:application>WHATSAPP</v1:application>\r\n"
			+ "         <v1:serviceChannel>WHATSAPP</v1:serviceChannel>\r\n"
			+ "         <v1:password>WHATSAPP_022019</v1:password>\r\n"
			+ "         <v1:userLogin>XXX</v1:userLogin>\r\n" + "         <v1:ipAddress>172.16.4.6</v1:ipAddress>\r\n"
			+ "         <v1:transactionTimestamp>2017-01-01T11:57:16</v1:transactionTimestamp>\r\n"
			+ "         <v1:serviceName>XXXX</v1:serviceName>\r\n" + "         <v1:version>1.0</v1:version>\r\n"
			+ "      </v1:headerInfo>\r\n" + "   </soapenv:Header>\r\n" + "   <soapenv:Body>\r\n"
			+ "      <typ:queryOCSBalancesAndBoltonsRequest>\r\n" + "         <typ:subscriberIdentification>\r\n"
			+ "            <v11:identificationValue>987421201</v11:identificationValue>\r\n"
			+ "            <v11:identificationType>MSISDN</v11:identificationType>\r\n"
			+ "         </typ:subscriberIdentification>\r\n"
			+ "         <typ:subscriberType>VPN</typ:subscriberType>\r\n"
			+ "         <typ:tariffPlanId>1H</typ:tariffPlanId>\r\n" + "         <!--Optional:-->\r\n"
			+ "         <typ:getTheSumOfBoltons>false</typ:getTheSumOfBoltons>\r\n" + "         <!--Optional:-->\r\n"
			+ "         <typ:getBalances>true</typ:getBalances>\r\n"
			+ "      </typ:queryOCSBalancesAndBoltonsRequest>\r\n" + "   </soapenv:Body>\r\n" + "</soapenv:Envelope>";

	
	
	private String xmlRequest2 = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:v1=\"http://telefonica.ec/CommonBusinessEntities/BusinessInteractionABE/HeaderInfo/v1\" xmlns:typ=\"http://telefonica.ec/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v2/types\" xmlns:v11=\"http://telefonica.ec/Customer/CustomerABE/SubscriberIdentification/v1\">\r\n" + 
			"   <soapenv:Header>\r\n" + 
			"      <v1:headerInfo>\r\n" + 
			"         <v1:application>WHATSAPP</v1:application>\r\n" + 
			"         <v1:serviceChannel>WHATSAPP</v1:serviceChannel>\r\n" + 
			"         <v1:password>WHATSAPP_022019</v1:password>\r\n" + 
			"         <v1:userLogin>XXX</v1:userLogin>\r\n" + 
			"         <v1:ipAddress>172.16.4.6</v1:ipAddress>\r\n" + 
			"         <v1:transactionTimestamp>2017-01-01T11:57:16</v1:transactionTimestamp>\r\n" + 
			"         <v1:serviceName>XXXX</v1:serviceName>\r\n" + 
			"         <v1:version>1.0</v1:version>\r\n" + 
			"      </v1:headerInfo>\r\n" + 
			"   </soapenv:Header>\r\n" + 
			"   <soapenv:Body>\r\n" + 
			"      <typ:queryOCSBalancesAndBoltonsRequest>\r\n" + 
			"         <typ:subscriberIdentification>\r\n" + 
			"            <v11:identificationValue>984878467</v11:identificationValue>\r\n" + 
			"            <v11:identificationType>MSISDN</v11:identificationType>\r\n" + 
			"         </typ:subscriberIdentification>\r\n" + 
			"         <typ:subscriberType>HIB</typ:subscriberType>\r\n" + 
			"         <typ:tariffPlanId>PMH</typ:tariffPlanId>\r\n" + 
			"         <!--Optional:-->\r\n" + 
			"         <typ:getTheSumOfBoltons> </typ:getTheSumOfBoltons>\r\n" + 
			"         <!--Optional:-->\r\n" + 
			"         <typ:getBalances> </typ:getBalances>\r\n" + 
			"      </typ:queryOCSBalancesAndBoltonsRequest>\r\n" + 
			"   </soapenv:Body>\r\n" + 
			"</soapenv:Envelope>";
	
	private String xmlRequest3 = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:v1=\"http://telefonica.ec/CommonBusinessEntities/BusinessInteractionABE/HeaderInfo/v1\" xmlns:typ=\"http://telefonica.ec/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v2/types\" xmlns:v11=\"http://telefonica.ec/Customer/CustomerABE/SubscriberIdentification/v1\">\r\n" + 
			"   <soapenv:Header>\r\n" + 
			"      <v1:headerInfo>\r\n" + 
			"         <v1:application>APPTEST</v1:application>\r\n" + 
			"         <v1:serviceChannel>NC</v1:serviceChannel>\r\n" + 
			"         <v1:password>APPT35T2016</v1:password>\r\n" + 
			"         <v1:userLogin>nctestuser</v1:userLogin>\r\n" + 
			"         <!--Optional:-->\r\n" + 
			"         <v1:sessionCode></v1:sessionCode>\r\n" + 
			"         <!--Optional:-->\r\n" + 
			"         <v1:idMessage>8b630981-ff36-41be-b446-dc224314fb70</v1:idMessage>\r\n" + 
			"         <v1:ipAddress>12.12.12.10</v1:ipAddress>\r\n" + 
			"         <!--Optional:-->\r\n" + 
			"         <v1:functionalityCode>0005-0001</v1:functionalityCode>\r\n" + 
			"         <v1:transactionTimestamp>2016-07-07T17:57:16</v1:transactionTimestamp>\r\n" + 
			"         <v1:serviceName>Customer360ViewPage</v1:serviceName>\r\n" + 
			"         <v1:version>0.1</v1:version>\r\n" + 
			"      </v1:headerInfo>\r\n" + 
			"   </soapenv:Header>\r\n" + 
			"   <soapenv:Body>\r\n" + 
			"      <typ:queryOCSBalancesAndBoltonsRequest>\r\n" + 
			"         <typ:subscriberIdentification>\r\n" + 
			"            <v11:identificationValue>983086020</v11:identificationValue>\r\n" + 
			"            <v11:identificationType>MSISDN</v11:identificationType>\r\n" + 
			"         </typ:subscriberIdentification>\r\n" + 
			"         <typ:subscriberType>HIB</typ:subscriberType>\r\n" + 
			"         <typ:tariffPlanId>IA</typ:tariffPlanId>\r\n" + 
			"         <!--Optional:-->\r\n" + 
			"         <typ:getTheSumOfBoltons>true</typ:getTheSumOfBoltons>\r\n" + 
			"         <!--Optional:-->\r\n" + 
			"         <typ:getBalances>true</typ:getBalances>\r\n" + 
			"      </typ:queryOCSBalancesAndBoltonsRequest>\r\n" + 
			"   </soapenv:Body>\r\n" + 
			"</soapenv:Envelope>";
	
	private String url1 = "http://10.112.229.140:9011/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v3";
	private String url2 = "http://10.112.229.140:9011/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v3?wsdl";
	
	private String methodGet = "GET";
	private String methodPost = "POST";
	
	private String method;
	
	private String urlService = "";
	
	private String tagNameToGet;
		
	public void sendMessagePost(String xml) {

		HttpURLConnection conn = null;
		try {
			response = new HashMap<String, String>();
			
			URL url = new URL(getUrlService());
			conn = (HttpURLConnection) url.openConnection();

			conn.setReadTimeout(10000);
			conn.setConnectTimeout(15000);
			conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
			conn.setRequestMethod(getMethod());
			conn.setDoInput(true);
			conn.setDoOutput(true);

			BufferedOutputStream output = new BufferedOutputStream(conn.getOutputStream());
			if(xml != null) {
				String body = xml;
				output.write(body.getBytes());
			}
			output.flush();

			InputStream ie = conn.getInputStream();
			Reader in = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));

			response.put("status", Integer.toString(conn.getResponseCode()));
			response.put("statusCode", conn.getResponseMessage());
						
			StringBuilder sb = new StringBuilder();
			for (int c; (c = in.read()) >= 0;)
				sb.append((char) c);

			String responseXml = sb.toString();
			System.out.println(responseXml);

			DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
			DocumentBuilder builder;
			InputSource is;
			try {

				builder = factory.newDocumentBuilder();

				is = new InputSource(new StringReader(responseXml));
				Document document = builder.parse(is);
				
				NodeList headerInfoList = document.getElementsByTagName(getTagNameToGet());									
								
				if(headerInfoList != null && headerInfoList.getLength() > 0) {
					response.put("parentNodeName", headerInfoList.item(0).getNodeName());
					response.put("parentNodeText", headerInfoList.item(0).getTextContent());
					
					NodeList cNodes = headerInfoList.item(0).getChildNodes();
					
					if(cNodes.getLength() > 0) {
						response.put("childNodeName", cNodes.item(0).getNodeName());
						response.put("childNodeText", cNodes.item(0).getTextContent());
					}
				}
				

			} catch (ParserConfigurationException pce) {
				pce.printStackTrace();
			} catch (SAXException saxe) {
				saxe.printStackTrace();
			} catch (IOException ioe) {
				ioe.printStackTrace();
			}
			
		} catch (MalformedURLException mfe) {
			mfe.printStackTrace();
		}

		catch (UnsupportedEncodingException uee) {
			uee.printStackTrace();
		} catch (IOException e1) {
			e1.printStackTrace();
		}
		finally { 
			conn.disconnect(); 
		}
				
	}

	public String getXmlRequest1() {
		return xmlRequest1;
	}
	
	public void setBalancesValueToXmlRequest1(String tagGetBalancesValue) {
		this.xmlRequest1 = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:v1=\"http://telefonica.ec/CommonBusinessEntities/BusinessInteractionABE/HeaderInfo/v1\" xmlns:typ=\"http://telefonica.ec/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v2/types\" xmlns:v11=\"http://telefonica.ec/Customer/CustomerABE/SubscriberIdentification/v1\">\r\n"
				+ "   <soapenv:Header>\r\n" + "      <v1:headerInfo>\r\n"
				+ "         <v1:application>WHATSAPP</v1:application>\r\n"
				+ "         <v1:serviceChannel>WHATSAPP</v1:serviceChannel>\r\n"
				+ "         <v1:password>WHATSAPP_022019</v1:password>\r\n"
				+ "         <v1:userLogin>XXX</v1:userLogin>\r\n" + "         <v1:ipAddress>172.16.4.6</v1:ipAddress>\r\n"
				+ "         <v1:transactionTimestamp>2017-01-01T11:57:16</v1:transactionTimestamp>\r\n"
				+ "         <v1:serviceName>XXXX</v1:serviceName>\r\n" + "         <v1:version>1.0</v1:version>\r\n"
				+ "      </v1:headerInfo>\r\n" + "   </soapenv:Header>\r\n" + "   <soapenv:Body>\r\n"
				+ "      <typ:queryOCSBalancesAndBoltonsRequest>\r\n" + "         <typ:subscriberIdentification>\r\n"
				+ "            <v11:identificationValue>987421201</v11:identificationValue>\r\n"
				+ "            <v11:identificationType>MSISDN</v11:identificationType>\r\n"
				+ "         </typ:subscriberIdentification>\r\n"
				+ "         <typ:subscriberType>VPN</typ:subscriberType>\r\n"
				+ "         <typ:tariffPlanId>1H</typ:tariffPlanId>\r\n" + "         <!--Optional:-->\r\n"
				+ "         <typ:getTheSumOfBoltons>false</typ:getTheSumOfBoltons>\r\n" + "         <!--Optional:-->\r\n"
				+ "         <typ:getBalances>"+ tagGetBalancesValue +"</typ:getBalances>\r\n"
				+ "      </typ:queryOCSBalancesAndBoltonsRequest>\r\n" + "   </soapenv:Body>\r\n" 
				+ "</soapenv:Envelope>";
	}

	public String getXmlRequest2() {
		return xmlRequest2;
	}

	public String getXmlRequest3() {
		return xmlRequest3;
	}

	public String getUrlService() {
		return urlService;
	}

	public void setUrlService(String urlService) {
		this.urlService = urlService;
	}

	public String getTagNameToGet() {
		return tagNameToGet;
	}

	public void setTagNameToGet(String tagNameToGet) {
		this.tagNameToGet = tagNameToGet;
	}

	public HashMap<String, String> getResponse() {
		return response;
	}

	public String getUrl1() {
		return url1;
	}

	public void setUrl1(String url1) {
		this.url1 = url1;
	}

	public String getUrl2() {
		return url2;
	}

	public void setUrl2(String url2) {
		this.url2 = url2;
	}

	public String getMethodGet() {
		return methodGet;
	}

	public String getMethodPost() {
		return methodPost;
	}

	public String getMethod() {
		return method;
	}

	public void setMethod(String method) {
		this.method = method;
	}
	
	
}
