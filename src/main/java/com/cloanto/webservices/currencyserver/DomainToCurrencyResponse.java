
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
 *         &lt;element name="DomainToCurrencyResult" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
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
    "domainToCurrencyResult"
})
@XmlRootElement(name = "DomainToCurrencyResponse")
public class DomainToCurrencyResponse {

    @XmlElement(name = "DomainToCurrencyResult")
    protected String domainToCurrencyResult;

    /**
     * Obtiene el valor de la propiedad domainToCurrencyResult.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDomainToCurrencyResult() {
        return domainToCurrencyResult;
    }

    /**
     * Define el valor de la propiedad domainToCurrencyResult.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDomainToCurrencyResult(String value) {
        this.domainToCurrencyResult = value;
    }

}
