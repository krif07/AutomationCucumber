$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Microservicio.feature");
formatter.feature({
  "line": 2,
  "name": "Microservicio consulta de saldos y consumos",
  "description": "",
  "id": "microservicio-consulta-de-saldos-y-consumos",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Que el microservicio de consulta de saldos y consumos se encuentra operativo",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.que_el_microservicio_de_consulta_de_saldos_y_consumos_se_encuentra_operativo()"
});
formatter.result({
  "duration": 128964600,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Firma del microservicio disponible",
  "description": "",
  "id": "microservicio-consulta-de-saldos-y-consumos;firma-del-microservicio-disponible",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Que se solicita la firma del servicio \"http://10.112.229.140:9011/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v3?wsdl\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "se acceda a la firma del microservicio \"WL5G3N3:queryOCSBalancesAndBoltonsRequest\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "se obtendra el wsdl correspondiente",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://10.112.229.140:9011/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v3?wsdl",
      "offset": 39
    }
  ],
  "location": "StepDefinition.que_se_solicita_la_firma_del_servicio(String)"
});
formatter.result({
  "duration": 1774200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WL5G3N3:queryOCSBalancesAndBoltonsRequest",
      "offset": 40
    }
  ],
  "location": "StepDefinition.se_acceda_a_la_firma_del_microservicio(String)"
});
formatter.result({
  "duration": 4857705100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.se_obtendra_el_wsdl_correspondiente()"
});
formatter.result({
  "duration": 1109200,
  "error_message": "java.lang.NullPointerException\r\n\tat stepdefinition.StepDefinition.se_obtendra_el_wsdl_correspondiente(StepDefinition.java:57)\r\n\tat ✽.Then se obtendra el wsdl correspondiente(Microservicio.feature:12)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Que el microservicio de consulta de saldos y consumos se encuentra operativo",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.que_el_microservicio_de_consulta_de_saldos_y_consumos_se_encuentra_operativo()"
});
formatter.result({
  "duration": 153900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "#    | urlServicio            \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t| tag \t\t\t\t\t\t\t\t\t\t\t|"
    },
    {
      "line": 14,
      "value": "#    | http://10.112.229.140:9011/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v3?wsdl    \t| WL5G3N3:queryOCSBalancesAndBoltonsRequest \t|"
    }
  ],
  "line": 17,
  "name": "Respueta de microservicio exitosa",
  "description": "",
  "id": "microservicio-consulta-de-saldos-y-consumos;respueta-de-microservicio-exitosa",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Que se consume el microservicio de consulta de saldos y consumos",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Se envía una solicitud al microservicio correcta",
  "rows": [
    {
      "cells": [
        "http://10.112.229.140:9011/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v3",
        "ns2:queryOCSBalancesAndBoltonsResponse",
        "ns2:showBalances",
        "false"
      ],
      "line": 20
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "el microservicio genera una respuesta exitosa",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.que_se_consume_el_microservicio_de_consulta_de_saldos_y_consumos()"
});
formatter.result({
  "duration": 96400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.se_envia_una_solicitud_al_microservicio_correcta(DataTable)"
});
formatter.result({
  "duration": 16027305200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.el_microservicio_genera_una_respuesta_exitosa()"
});
formatter.result({
  "duration": 19109052600,
  "status": "passed"
});
});