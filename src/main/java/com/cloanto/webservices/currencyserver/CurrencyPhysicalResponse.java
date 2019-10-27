
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
 *         &lt;element name="CurrencyPhysicalResult" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
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
    "currencyPhysicalResult"
})
@XmlRootElement(name = "CurrencyPhysicalResponse")
public class CurrencyPhysicalResponse {

    @XmlElement(name = "CurrencyPhysicalResult")
    protected boolean currencyPhysicalResult;

    /**
     * Obtiene el valor de la propiedad currencyPhysicalResult.
     * 
     */
    public boolean isCurrencyPhysicalResult() {
        return currencyPhysicalResult;
    }

    /**
     * Define el valor de la propiedad currencyPhysicalResult.
     * 
     */
    public void setCurrencyPhysicalResult(boolean value) {
        this.currencyPhysicalResult = value;
    }

}
