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


public class HttpGetHelp {

	public HttpGetHelp() {
		
		this.method = getMethodGet();
		this.response = null;

	}

	private HashMap<String, String> response;

	private String urlRoot = "http://localhost:8290/Customer/";
	//private String url1 = "BoltonManagement/queryOCSBoltonsDetails/963500797?recordsNumber=30&boltonStatus1=A&boltonStatus2=C";
	//private String url2 = "GroupManagement/queryOCSGroupMemberAttributes/987421201?recordsNumber=30";
	//private String url3 = "BalanceManagement/queryOCSBalances/963500797?recordsNumber=30";

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
			if (xml != null) {
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

			String responseJson = sb.toString();
			System.out.println(responseJson);

			DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
			DocumentBuilder builder;
			/*InputSource is;
			try {

				builder = factory.newDocumentBuilder();

				is = new InputSource(new StringReader(responseJson));
				Document document = builder.parse(is);

				NodeList headerInfoList = document.getElementsByTagName(getTagNameToGet());

				if (headerInfoList.getLength() > 0) {
					response.put("parentNodeName", headerInfoList.item(0).getNodeName());
					response.put("parentNodeText", headerInfoList.item(0).getTextContent());

					NodeList cNodes = headerInfoList.item(0).getChildNodes();

					if (cNodes.getLength() > 0) {
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
			}*/

		} catch (MalformedURLException mfe) {
			mfe.printStackTrace();
		}

		catch (UnsupportedEncodingException uee) {
			uee.printStackTrace();
		} catch (IOException e1) {
			e1.printStackTrace();
		} finally {
			conn.disconnect();
		}

	}

	public String getUrlService() {
		return urlService;
	}

	public void setUrlService(String urlServicio, String msisdn, String recordsNumber, String boltonStatus1, String boltonStatus2) {
		this.urlService = urlServicio + msisdn;
		
		if(recordsNumber != null && !recordsNumber.equals("")) {
			
			this.urlService += "?recordsNumber=" + recordsNumber;
			
			if(boltonStatus1 != null && !boltonStatus1.equals("")) {
				this.urlService += "&boltonStatus1=" + boltonStatus1; 
			}
			
			if(boltonStatus2 != null && !boltonStatus2.equals("")) {
				this.urlService += "&boltonStatus2=" + boltonStatus2; 
			}
		}
	}
	
	public void setUrlService(String functionGroup, String functionName, String msisdn, String recordsNumber, String boltonStatus1, String boltonStatus2) {
		this.urlService = getUrlRoot() + functionGroup + "/" + functionName + "/" + msisdn;
		
		if(recordsNumber != null && !recordsNumber.equals("")) {
			
			this.urlService += "?recordsNumber=" + recordsNumber;
			
			if(boltonStatus1 != null && !boltonStatus1.equals("")) {
				this.urlService += "&boltonStatus1=" + boltonStatus1; 
			}
			
			if(boltonStatus2 != null && !boltonStatus2.equals("")) {
				this.urlService += "&boltonStatus2=" + boltonStatus2; 
			}
		}			
				
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

	public String getUrlRoot() {
		return urlRoot;
	}

	public void setUrlRoot(String urlRoot) {
		this.urlRoot = urlRoot;
	}
}