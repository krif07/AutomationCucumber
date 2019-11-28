package stepdefinition;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.json.JSONArray;
import org.json.JSONObject;

public class HttpGetHelp {

	public HttpGetHelp() {
		
		this.method = getMethodGet();
		this.response = null;

	}

	private static String URL_SALDO_BONOS = "http://localhost:8290/Customer/BoltonManagement/queryOCSBoltonsDetails/";
	private static String URL_LIMITE_CONSUMO = "http://localhost:8290/Customer/GroupManagement/queryOCSGroupMemberAttributes/";
	private static String URL_SALDO_MONEDERO = "http://localhost:8290/Customer/BalanceManagement/queryOCSBalances/";
	private static String URL_BONOS = "http://localhost:8290/Customer/BoltonManagement/queryOCSBoltons/";
	private static String URL_CACHE_BALANCEBI = "http://localhost:8290/Cache/Balance/QueryBoltonInfo/";
	private static String URL_CACHE_BALANCEGS = "http://localhost:8290/Cache/Balance/GetShowBalances/";
	private static String URL_CACHE_SUBSCRIBER_DETAILS = "http://localhost:8290/Customer/BalanceManagement/querySubscriberOCSServiceDetail/";	
	
	private static String URL_CACHE_BALANCEBI_LOAD = "http://localhost:8290/Cache/Balance/RefreshBoltonInfo/load";
	private static String URL_CACHE_BALANCEGS_LOAD = "http://localhost:8290/Cache/Balance/RefreshShowBalance/load";
		
	private String response;
	private Map<String, String> respuesta;

	private String urlRoot = "http://localhost:8290/Customer/";
		
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
	        respuesta = new HashMap<String, String>();
	        respuesta.put("status", Integer.toString(status));
	        
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
	                JSONObject dataJsonObject = new JSONObject(response);	                
	                
	                if(getUrlService().contains(URL_SALDO_BONOS)) {	                
	                
	                	JSONArray dataArray = dataJsonObject.getJSONArray("productUsageSpec");            
		                if(dataArray.length() > 0) {
		                	respuesta.put("totalRegistros", Integer.toString(dataArray.length()));
		                	respuesta.put("amount", dataArray.getJSONObject(0).get("amount").toString());
		                	respuesta.put("remainingAmount", dataArray.getJSONObject(0).get("remainingAmount").toString());
		                }
	                }
		            else if(getUrlService().contains(URL_LIMITE_CONSUMO)) {
		            	JSONArray dataArray = dataJsonObject.getJSONArray("spendAttributesInfo");            
		                if(dataArray.length() > 0) {
		                	respuesta.put("totalRegistros", Integer.toString(dataArray.length()));
		                	respuesta.put("spendLimitAmount", dataArray.getJSONObject(4).get("spendLimitAmount").toString());
		                	respuesta.put("spendValue", dataArray.getJSONObject(4).get("spendValue").toString());
		                }		                
		            }
		            else if(getUrlService().contains(URL_SALDO_MONEDERO)) {
		            	JSONArray dataArray = dataJsonObject.getJSONArray("customerAccountBalance");            
		                if(dataArray.length() > 0) {
		                	respuesta.put("totalRegistros", Integer.toString(dataArray.length()));
		                	//respuesta.put("amount", dataArray.getJSONObject(0).get("amount").toString());
		                	respuesta.put("remainedAmount", dataArray.getJSONObject(0).get("remainedAmount").toString());
		                }		                
		            }
		            else if(getUrlService().contains(URL_BONOS)) {
		            	JSONArray dataArray = dataJsonObject.getJSONArray("BoltonDetailsInfo");            
		                if(dataArray.length() > 0) {
		                	respuesta.put("totalRegistros", Integer.toString(dataArray.length()));
		                	respuesta.put("boltonBasicInfo", dataArray.getJSONObject(0).get("boltonBasicInfo").toString());
		                }		                
		            }
		            else if(getUrlService().contains(URL_CACHE_SUBSCRIBER_DETAILS)) {
		            	JSONObject obj = dataJsonObject.getJSONObject("subscriberBasicInfo");
		            	if(obj != null){
		            		respuesta.put("subscriberBasicInfo", "OK");
		            		respuesta.put("lifeCycleStatusDate", obj.get("lifeCycleStatusDate").toString());		            		
		            		respuesta.put("tariffPlanId", obj.get("tariffPlanId").toString());
		            		
		            	}
		            	else {
		            		respuesta.put("subscriberBasicInfo", null);
		            	}
		            }	                
		            else if(getUrlService().contains(URL_CACHE_BALANCEBI)) {		            	
		                respuesta.put("bonusType", dataJsonObject.get("bonusType").toString());		                
		            }	                
		            else if(getUrlService().contains(URL_CACHE_BALANCEGS)) {		            	
		                respuesta.put("showBalances", dataJsonObject.get("showBalances").toString());		                
		            }	                	               
		            else if(getUrlService().contains(URL_CACHE_BALANCEBI_LOAD) || getUrlService().contains(URL_CACHE_BALANCEGS_LOAD)) {
		            	respuesta.put("opCode", dataJsonObject.get("opCode").toString());
		            	respuesta.put("opMsg", dataJsonObject.get("opMsg").toString());
		            }
	                break;
	                
	            case 500:
	            	BufferedReader bErr = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
		            StringBuilder sbErr = new StringBuilder();
	                String lineErr;
	                while ((lineErr = bErr.readLine()) != null) {
	                    sbErr.append(lineErr+"\n");
	                }
	                bErr.close();
	                
	                response = sbErr.toString();
	                JSONObject dataJsonObjectErr = new JSONObject(response);
	                JSONObject dataSubJson = dataJsonObjectErr.getJSONObject("LegacyFault");
	                
	                respuesta.put("LegacyFault", dataJsonObjectErr.get("LegacyFault").toString());
	                respuesta.put("service", dataSubJson.getString("service").toString());
	                break;
	            	
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
	
	public void setUrlService(String urlServicio) {
		this.urlService = urlServicio;
	}
	
	public void setUrlService(String urlServicio, String complemento) {
		this.urlService = urlServicio + complemento;
	}

	public void setUrlService(String urlServicio, String msisdn, String recordsNumber, 
								String boltonStatus1, String boltonStatus2,
								String boltonCode, String boltonTypeCode) {
		this.urlService = urlServicio + msisdn;
		
		if(recordsNumber != null && !recordsNumber.equals("")) {
			
			this.urlService += "?recordsNumber=" + recordsNumber;
			
			if(boltonStatus1 != null && !boltonStatus1.equals("")) {
				this.urlService += "&boltonStatus1=" + boltonStatus1; 
			}
			
			if(boltonStatus2 != null && !boltonStatus2.equals("")) {
				this.urlService += "&boltonStatus2=" + boltonStatus2; 
			}
			
			if(boltonCode != null && !boltonCode.equals("")) {
				this.urlService += "&boltonCode=" + boltonCode;
			}
			
			if(boltonTypeCode != null && !boltonTypeCode.equals("")) {
				this.urlService += "&boltonTypeCode=" + boltonTypeCode;
			}
		}
	}
		
	public void setUrlService(String functionGroup, String functionName, String msisdn, String recordsNumber, 
								String boltonStatus1, String boltonStatus2,
								String boltoncode, String boltontypecode) {
		this.urlService = getUrlRoot() + functionGroup + "/" + functionName + "/" + msisdn;
		
		if(recordsNumber != null && !recordsNumber.equals("")) {
			
			this.urlService += "?recordsNumber=" + recordsNumber;
			
			if(boltonStatus1 != null && !boltonStatus1.equals("")) {
				this.urlService += "&boltonStatus1=" + boltonStatus1; 
			}
			
			if(boltonStatus2 != null && !boltonStatus2.equals("")) {
				this.urlService += "&boltonStatus2=" + boltonStatus2; 
			}
			
			if(boltoncode != null && !boltoncode.equals("")) {
				this.urlService += "&boltoncode=" + boltoncode;
			}
			
			if(boltontypecode != null && !boltontypecode.equals("")) {
				this.urlService += "&boltontypecode=" + boltontypecode;
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

	public Map<String, String> getRespuesta() {
		return respuesta;
	}
}