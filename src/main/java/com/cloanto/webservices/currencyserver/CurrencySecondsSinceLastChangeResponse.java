
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
 *         &lt;element name="CurrencySecondsSinceLastChangeResult" type="{http://www.w3.org/2001/XMLSchema}long"/>
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
    "currencySecondsSinceLastChangeResult"
})
@XmlRootElement(name = "CurrencySecondsSinceLastChangeResponse")
public class CurrencySecondsSinceLastChangeResponse {

    @XmlElement(name = "CurrencySecondsSinceLastChangeResult")
    protected long currencySecondsSinceLastChangeResult;

    /**
     * Obtiene el valor de la propiedad currencySecondsSinceLastChangeResult.
     * 
     */
    public long getCurrencySecondsSinceLastChangeResult() {
        return currencySecondsSinceLastChangeResult;
    }

    /**
     * Define el valor de la propiedad currencySecondsSinceLastChangeResult.
     * 
     */
    public void setCurrencySecondsSinceLastChangeResult(long value) {
        this.currencySecondsSinceLastChangeResult = value;
    }

}
