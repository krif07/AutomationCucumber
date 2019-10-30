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
  "duration": 100733200,
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
  "duration": 1407500,
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
  "duration": 517598300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.se_obtendra_el_wsdl_correspondiente()"
});
formatter.result({
  "duration": 1149200,
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
  "duration": 122300,
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
  "duration": 109500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.se_envia_una_solicitud_al_microservicio_correcta(DataTable)"
});
formatter.result({
  "duration": 3909836400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.el_microservicio_genera_una_respuesta_exitosa()"
});
formatter.result({
  "duration": 205100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Respueta de microservicio exitosa 2",
  "description": "",
  "id": "microservicio-consulta-de-saldos-y-consumos;respueta-de-microservicio-exitosa-2",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Que se consume el microservicio de consulta de saldos y consumos 2",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Se envía una solicitud al microservicio \u003curlServicio\u003e correcta  con \u003cparentTag\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "el microservicio genera una respuesta del tag \u003cchildTag\u003e exitosa \u003cchildTagText\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "microservicio-consulta-de-saldos-y-consumos;respueta-de-microservicio-exitosa-2;",
  "rows": [
    {
      "cells": [
        "urlServicio",
        "parentTag",
        "childTag",
        "childTagText"
      ],
      "line": 30,
      "id": "microservicio-consulta-de-saldos-y-consumos;respueta-de-microservicio-exitosa-2;;1"
    },
    {
      "cells": [
        "http://10.112.229.140:9011/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v3",
        "ns2:queryOCSBalancesAndBoltonsResponse",
        "ns2:showBalances",
        "false"
      ],
      "line": 31,
      "id": "microservicio-consulta-de-saldos-y-consumos;respueta-de-microservicio-exitosa-2;;2"
    },
    {
      "cells": [
        "http://10.112.229.140:9011/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v3",
        "ns3:subscriberBalance",
        "ns3:type",
        "SaldoRecargas"
      ],
      "line": 32,
      "id": "microservicio-consulta-de-saldos-y-consumos;respueta-de-microservicio-exitosa-2;;3"
    },
    {
      "cells": [
        "http://10.112.229.140:9011/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v3",
        "ns6:subscriberBolton",
        "ns6:subscriberBoltonId",
        "X93"
      ],
      "line": 33,
      "id": "microservicio-consulta-de-saldos-y-consumos;respueta-de-microservicio-exitosa-2;;4"
    }
  ],
  "keyword": "Examples"
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
  "duration": 110400,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Respueta de microservicio exitosa 2",
  "description": "",
  "id": "microservicio-consulta-de-saldos-y-consumos;respueta-de-microservicio-exitosa-2;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 23,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Que se consume el microservicio de consulta de saldos y consumos 2",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Se envía una solicitud al microservicio http://10.112.229.140:9011/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v3 correcta  con ns2:queryOCSBalancesAndBoltonsResponse",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "el microservicio genera una respuesta del tag ns2:showBalances exitosa false",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.que_se_consume_el_microservicio_de_consulta_de_saldos_y_consumos_2()"
});
formatter.result({
  "duration": 70900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://10.112.229.140:9011/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v3",
      "offset": 40
    },
    {
      "val": "ns2:queryOCSBalancesAndBoltonsResponse",
      "offset": 173
    }
  ],
  "location": "StepDefinition.se_enva_una_solicitud_al_microservicio_correcta_con(String,String)"
});
formatter.result({
  "duration": 2823963500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ns2:showBalances",
      "offset": 46
    },
    {
      "val": "false",
      "offset": 71
    }
  ],
  "location": "StepDefinition.el_microservicio_genera_una_respuesta_del_tag_exitosa(String,String)"
});
formatter.result({
  "duration": 269300,
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
  "duration": 154500,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Respueta de microservicio exitosa 2",
  "description": "",
  "id": "microservicio-consulta-de-saldos-y-consumos;respueta-de-microservicio-exitosa-2;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 23,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Que se consume el microservicio de consulta de saldos y consumos 2",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Se envía una solicitud al microservicio http://10.112.229.140:9011/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v3 correcta  con ns3:subscriberBalance",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "el microservicio genera una respuesta del tag ns3:type exitosa SaldoRecargas",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.que_se_consume_el_microservicio_de_consulta_de_saldos_y_consumos_2()"
});
formatter.result({
  "duration": 93000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://10.112.229.140:9011/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v3",
      "offset": 40
    },
    {
      "val": "ns3:subscriberBalance",
      "offset": 173
    }
  ],
  "location": "StepDefinition.se_enva_una_solicitud_al_microservicio_correcta_con(String,String)"
});
formatter.result({
  "duration": 2843604100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ns3:type",
      "offset": 46
    },
    {
      "val": "SaldoRecargas",
      "offset": 63
    }
  ],
  "location": "StepDefinition.el_microservicio_genera_una_respuesta_del_tag_exitosa(String,String)"
});
formatter.result({
  "duration": 159100,
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
  "duration": 95500,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Respueta de microservicio exitosa 2",
  "description": "",
  "id": "microservicio-consulta-de-saldos-y-consumos;respueta-de-microservicio-exitosa-2;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 23,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Que se consume el microservicio de consulta de saldos y consumos 2",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Se envía una solicitud al microservicio http://10.112.229.140:9011/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v3 correcta  con ns6:subscriberBolton",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "el microservicio genera una respuesta del tag ns6:subscriberBoltonId exitosa X93",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.que_se_consume_el_microservicio_de_consulta_de_saldos_y_consumos_2()"
});
formatter.result({
  "duration": 68500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://10.112.229.140:9011/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v3",
      "offset": 40
    },
    {
      "val": "ns6:subscriberBolton",
      "offset": 173
    }
  ],
  "location": "StepDefinition.se_enva_una_solicitud_al_microservicio_correcta_con(String,String)"
});
formatter.result({
  "duration": 2833585600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ns6:subscriberBoltonId",
      "offset": 46
    },
    {
      "val": "X93",
      "offset": 77
    }
  ],
  "location": "StepDefinition.el_microservicio_genera_una_respuesta_del_tag_exitosa(String,String)"
});
formatter.result({
  "duration": 399600,
  "status": "passed"
});
});