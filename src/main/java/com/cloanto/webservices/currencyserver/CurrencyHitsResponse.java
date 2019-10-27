
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
 *         &lt;element name="CurrencyHitsResult" type="{http://www.w3.org/2001/XMLSchema}long"/>
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
    "currencyHitsResult"
})
@XmlRootElement(name = "CurrencyHitsResponse")
public class CurrencyHitsResponse {

    @XmlElement(name = "CurrencyHitsResult")
    protected long currencyHitsResult;

    /**
     * Obtiene el valor de la propiedad currencyHitsResult.
     * 
     */
    public long getCurrencyHitsResult() {
        return currencyHitsResult;
    }

    /**
     * Define el valor de la propiedad currencyHitsResult.
     * 
     */
    public void setCurrencyHitsResult(long value) {
        this.currencyHitsResult = value;
    }

}
