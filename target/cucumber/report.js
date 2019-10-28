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
  "duration": 2616754900,
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
  "name": "Que se solicita la firma del servicio",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "se acceda a la firma del microservicio",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "se obtendra el wsdl correspondiente",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.que_se_solicita_la_firma_del_servicio()"
});
formatter.result({
  "duration": 147700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.se_acceda_a_la_firma_del_microservicio()"
});
formatter.result({
  "duration": 91100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.se_obtendra_el_wsdl_correspondiente()"
});
formatter.result({
  "duration": 42500,
  "status": "passed"
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
  "duration": 4468006800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Respueta de microservicio exitosa",
  "description": "",
  "id": "microservicio-consulta-de-saldos-y-consumos;respueta-de-microservicio-exitosa",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Que se consume el microservicio de consulta de saldos y consumos",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Se envía una solicitud al microservicio correcta",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "el microservicio genera una respuesta exitosa",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.que_se_consume_el_microservicio_de_consulta_de_saldos_y_consumos()"
});
formatter.result({
  "duration": 158000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.se_envia_una_solicitud_al_microservicio_correcta()"
});
formatter.result({
  "duration": 87000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.el_microservicio_genera_una_respuesta_exitosa()"
});
formatter.result({
  "duration": 93200,
  "status": "passed"
});
});