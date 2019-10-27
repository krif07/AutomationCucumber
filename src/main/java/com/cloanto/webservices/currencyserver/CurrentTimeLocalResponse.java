
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
 *         &lt;element name="CurrentTimeLocalResult" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
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
    "currentTimeLocalResult"
})
@XmlRootElement(name = "CurrentTimeLocalResponse")
public class CurrentTimeLocalResponse {

    @XmlElement(name = "CurrentTimeLocalResult")
    protected String currentTimeLocalResult;

    /**
     * Obtiene el valor de la propiedad currentTimeLocalResult.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCurrentTimeLocalResult() {
        return currentTimeLocalResult;
    }

    /**
     * Define el valor de la propiedad currentTimeLocalResult.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCurrentTimeLocalResult(String value) {
        this.currentTimeLocalResult = value;
    }

}
