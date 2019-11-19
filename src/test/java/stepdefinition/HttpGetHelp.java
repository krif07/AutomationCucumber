package stepdefinition;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.logging.Level;
import java.util.logging.Logger;


public class HttpGetHelp {

	public HttpGetHelp() {
		
		this.method = getMethodGet();
		this.response = null;

	}

	private String response;

	private String urlRoot = "http://localhost:8290/Customer/";
	//private String url1 = "BoltonManagement/queryOCSBoltonsDetails/963500797?recordsNumber=30&boltonStatus1=A&boltonStatus2=C";
	//private String url2 = "GroupManagement/queryOCSGroupMemberAttributes/987421201?recordsNumber=30";
	//private String url3 = "BalanceManagement/queryOCSBalances/963500797?recordsNumber=30";

	private String methodGet = "GET";
	private String methodPost = "POST";

	private String method;

	private String urlService = "";

	private String tagNameToGet;

	public String getJson() {

		HttpURLConnection conn = null;
		try {
			response = null;

			URL url = new URL(getUrlService());
			conn = (HttpURLConnection) url.openConnection();

			conn.setRequestMethod("GET");
	        conn.setRequestProperty("Content-length", "0");
	        conn.setUseCaches(false);
	        conn.setAllowUserInteraction(false);
	        conn.setReadTimeout(10000);
			conn.setConnectTimeout(15000);
	        
	        conn.connect();
	        int status = conn.getResponseCode();

	        switch (status) {
	            case 200:
	            case 201:
	                BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
	                StringBuilder sb = new StringBuilder();
	                String line;
	                while ((line = br.readLine()) != null) {
	                    sb.append(line+"\n");
	                }
	                br.close();
	                
	                response = sb.toString();
	        }

	    } catch (MalformedURLException ex) {
	        Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
	    } catch (IOException ex) {
	        Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
	    } finally {
	       if (conn != null) {
	          try {
	              conn.disconnect();
	          } catch (Exception ex) {
	             Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
	          }
	       }
	    }
		
		return response;
	    
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

	public String getResponse() {
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