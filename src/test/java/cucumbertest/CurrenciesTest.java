package cucumbertest;

import static org.junit.Assert.*;

import org.junit.Test;

import com.cloanto.webservices.currencyserver.Currencies;
import com.cloanto.webservices.currencyserver.CurrencyExists;

public class CurrenciesTest extends CurrencyExists {

	//mvn jaxws:wsimport
	//http://fx.currencysystem.com/webservices/CurrencyServer4.asmx/Currencies
	//AED;AFN;ALL;AOA;ARS;AUD;AZN;BBD;BDT;BGN;BHD;BND;BOB;BRL;BSD;BWP;BYN;BZD;CAD;CDF;CHF;CLP;CNY;COP;CRC;CVE;CZK;DKK;DOP;DZD;EGP;ERN;ETB;EUR;FJD;GBP;GHS;GTQ;GYD;HKD;HNL;HRK;HTG;HUF;IDR;ILS;INR;IQD;ISK;JMD;JOD;JPY;KES;KHR;KMF;KRW;KWD;KZT;LBP;LKR;LYD;MAD;MDL;MKD;MMK;MOP;MRU;MUR;MXN;MYR;MZN;NAD;NGN;NIO;NOK;NPR;NZD;OMR;PAB;PEN;PGK;PHP;PKR;PLN;PYG;QAR;RON;RSD;RUB;SAR;SEK;SGD;SRD;THB;TMT;TND;TRY;TTD;TWD;TZS;UAH;UGX;USD;UYU;UZS;VND;XAF;XCD;XDR;XOF;XPF;YER;ZAR;ZMW
	@Test
	public void testGetLicenseKey() {
		this.setCurrency("AOA");
		String result = this.getCurrency();
		System.out.println(result);
		assertTrue(result == "AOA");
	}

}
