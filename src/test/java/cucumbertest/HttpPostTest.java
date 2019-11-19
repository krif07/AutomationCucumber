package cucumbertest;

import static org.junit.Assert.*;

import org.w3c.dom.*;

import java.io.IOException;
import java.io.StringReader;
import java.io.UnsupportedEncodingException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.Reader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import org.junit.Test;

public class HttpPostTest {

	private String xml = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:v1=\"http://telefonica.ec/CommonBusinessEntities/BusinessInteractionABE/HeaderInfo/v1\" xmlns:typ=\"http://telefonica.ec/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v2/types\" xmlns:v11=\"http://telefonica.ec/Customer/CustomerABE/SubscriberIdentification/v1\">\r\n"
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

	/*
	@Test
	public void testHttpPost1() {

		HttpURLConnection conn = null;
		try {
			URL url = new URL(
					"http://10.112.229.140:9011/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v3");
			conn = (HttpURLConnection) url.openConnection();

			conn.setReadTimeout(10000);
			conn.setConnectTimeout(15000);
			conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
			conn.setRequestMethod("POST");
			conn.setDoInput(true);
			conn.setDoOutput(true);

			String body = xml;

			BufferedOutputStream output = new BufferedOutputStream(conn.getOutputStream());
			output.write(body.getBytes());
			output.flush();

			Reader in = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));

			StringBuilder sb = new StringBuilder();
			for (int c; (c = in.read()) >= 0;)
				sb.append((char) c);

			String responseXml = sb.toString();

			// System.out.println(responseXml);

			DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
			DocumentBuilder builder;
			InputSource is;
			try {

				builder = factory.newDocumentBuilder();

				is = new InputSource(new StringReader(responseXml));
				Document document = builder.parse(is);

				//Element root = document.getDocumentElement();
				
				NodeList headerInfoList = document.getElementsByTagName("headerInfo");
				
				NodeList cNodes = headerInfoList.item(0).getChildNodes();
				
				System.out.println(cNodes.item(0).getNodeName());
				System.out.println(cNodes.item(0).getTextContent());				

				assertTrue(cNodes.item(0).getNodeName() == "application");
				//assertTrue(cNodes.item(0).getTextContent() == "WHATSAPP");
				assertEquals(cNodes.item(0).getTextContent(), "WHATSAPP");
				
				/*for (int temp = 0; temp < cNodes.getLength(); temp++) {

					Node node = cNodes.item(temp);
					if (node.getNodeType() == Node.ELEMENT_NODE) {

						Element eElement = (Element) node;				
						System.out.println(eElement.getNodeName());
						System.out.println(eElement.getTextContent());
					}
				}*/

/*
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
*/
}
