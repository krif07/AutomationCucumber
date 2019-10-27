
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
 *         &lt;element name="CurrencySymbolResult" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
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
    "currencySymbolResult"
})
@XmlRootElement(name = "CurrencySymbolResponse")
public class CurrencySymbolResponse {

    @XmlElement(name = "CurrencySymbolResult")
    protected String currencySymbolResult;

    /**
     * Obtiene el valor de la propiedad currencySymbolResult.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCurrencySymbolResult() {
        return currencySymbolResult;
    }

    /**
     * Define el valor de la propiedad currencySymbolResult.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCurrencySymbolResult(String value) {
        this.currencySymbolResult = value;
    }

}
