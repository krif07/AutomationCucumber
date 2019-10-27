
package com.cloanto.webservices.currencyserver;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para anonymous complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="CountryToCurrencyResult" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "countryToCurrencyResult"
})
@XmlRootElement(name = "CountryToCurrencyResponse")
public class CountryToCurrencyResponse {

    @XmlElement(name = "CountryToCurrencyResult")
    protected String countryToCurrencyResult;

    /**
     * Obtiene el valor de la propiedad countryToCurrencyResult.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCountryToCurrencyResult() {
        return countryToCurrencyResult;
    }

    /**
     * Define el valor de la propiedad countryToCurrencyResult.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCountryToCurrencyResult(String value) {
        this.countryToCurrencyResult = value;
    }

}
