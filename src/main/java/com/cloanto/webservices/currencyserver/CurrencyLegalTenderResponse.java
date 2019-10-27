
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
 *         &lt;element name="CurrencyLegalTenderResult" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
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
    "currencyLegalTenderResult"
})
@XmlRootElement(name = "CurrencyLegalTenderResponse")
public class CurrencyLegalTenderResponse {

    @XmlElement(name = "CurrencyLegalTenderResult")
    protected boolean currencyLegalTenderResult;

    /**
     * Obtiene el valor de la propiedad currencyLegalTenderResult.
     * 
     */
    public boolean isCurrencyLegalTenderResult() {
        return currencyLegalTenderResult;
    }

    /**
     * Define el valor de la propiedad currencyLegalTenderResult.
     * 
     */
    public void setCurrencyLegalTenderResult(boolean value) {
        this.currencyLegalTenderResult = value;
    }

}
