
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
 *         &lt;element name="InformationCreationTimeUTResult" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
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
    "informationCreationTimeUTResult"
})
@XmlRootElement(name = "InformationCreationTimeUTResponse")
public class InformationCreationTimeUTResponse {

    @XmlElement(name = "InformationCreationTimeUTResult")
    protected String informationCreationTimeUTResult;

    /**
     * Obtiene el valor de la propiedad informationCreationTimeUTResult.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInformationCreationTimeUTResult() {
        return informationCreationTimeUTResult;
    }

    /**
     * Define el valor de la propiedad informationCreationTimeUTResult.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInformationCreationTimeUTResult(String value) {
        this.informationCreationTimeUTResult = value;
    }

}
