$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LimiteConsumo.feature");
formatter.feature({
  "line": 1,
  "name": "consultar los limites de consumo de un abonado VPN en Altamira",
  "description": "",
  "id": "consultar-los-limites-de-consumo-de-un-abonado-vpn-en-altamira",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "mensaje de error al consultar limite de consumo",
  "description": "",
  "id": "consultar-los-limites-de-consumo-de-un-abonado-vpn-en-altamira;mensaje-de-error-al-consultar-limite-de-consumo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "que el abonado \u003cmsisdn\u003e consulta limites de consumo \u003curlServicio\u003e \u003crecordsNumber\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Altamira retorna un error LC",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "devolvera el mensaje de error en el formato estandar LC",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "consultar-los-limites-de-consumo-de-un-abonado-vpn-en-altamira;mensaje-de-error-al-consultar-limite-de-consumo;",
  "rows": [
    {
      "cells": [
        "urlServicio",
        "msisdn",
        "recordsNumber"
      ],
      "line": 12,
      "id": "consultar-los-limites-de-consumo-de-un-abonado-vpn-en-altamira;mensaje-de-error-al-consultar-limite-de-consumo;;1"
    },
    {
      "cells": [
        "http://localhost:8290/Customer/GroupManagement/queryOCSGroupMemberAttributes/",
        "987421201",
        "0"
      ],
      "line": 13,
      "id": "consultar-los-limites-de-consumo-de-un-abonado-vpn-en-altamira;mensaje-de-error-al-consultar-limite-de-consumo;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que el abonado que consulta el saldo se encuentra activo Y es VPN Y registra limites de consumo en Altamira",
  "keyword": "Given "
});
formatter.match({
  "location": "LimiteConsumoStepDefinition.que_el_abonado_que_consulta_el_saldo_se_encuentra_activo_y_es_vpn_y_registra_limites_de_consumo_en_altamira()"
});
formatter.result({
  "duration": 57672800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "mensaje de error al consultar limite de consumo",
  "description": "",
  "id": "consultar-los-limites-de-consumo-de-un-abonado-vpn-en-altamira;mensaje-de-error-al-consultar-limite-de-consumo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "que el abonado 987421201 consulta limites de consumo http://localhost:8290/Customer/GroupManagement/queryOCSGroupMemberAttributes/ 0",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Altamira retorna un error LC",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "devolvera el mensaje de error en el formato estandar LC",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "987421201",
      "offset": 15
    },
    {
      "val": "http://localhost:8290/Customer/GroupManagement/queryOCSGroupMemberAttributes/",
      "offset": 53
    },
    {
      "val": "0",
      "offset": 131
    }
  ],
  "location": "LimiteConsumoStepDefinition.que_el_abonado_consulta_limites_de_consumo(String,String,String)"
});
formatter.result({
  "duration": 1599600,
  "status": "passed"
});
formatter.match({
  "location": "LimiteConsumoStepDefinition.altamira_retorna_un_error()"
});
formatter.result({
  "duration": 534096000,
  "status": "passed"
});
formatter.match({
  "location": "LimiteConsumoStepDefinition.devolvera_el_mensaje_de_error_en_el_formato_estandar()"
});
formatter.result({
  "duration": 106500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "entregar valores registrados en monederos para limite consumo",
  "description": "",
  "id": "consultar-los-limites-de-consumo-de-un-abonado-vpn-en-altamira;entregar-valores-registrados-en-monederos-para-limite-consumo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "que los escenarios 1 o 2 fueron fallidos y que el abonado \u003cmsisdn\u003e consulta limites de consumo \u003curlServicio\u003e \u003crecordsNumber\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "los valores retornados de Altamira son mayores a cero LC",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "entregar los valores registrados en los monederos para el abonado en Altamira LC",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "consultar-los-limites-de-consumo-de-un-abonado-vpn-en-altamira;entregar-valores-registrados-en-monederos-para-limite-consumo;",
  "rows": [
    {
      "cells": [
        "urlServicio",
        "msisdn",
        "recordsNumber"
      ],
      "line": 21,
      "id": "consultar-los-limites-de-consumo-de-un-abonado-vpn-en-altamira;entregar-valores-registrados-en-monederos-para-limite-consumo;;1"
    },
    {
      "cells": [
        "http://localhost:8290/Customer/GroupManagement/queryOCSGroupMemberAttributes/",
        "987421201",
        "30"
      ],
      "line": 22,
      "id": "consultar-los-limites-de-consumo-de-un-abonado-vpn-en-altamira;entregar-valores-registrados-en-monederos-para-limite-consumo;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que el abonado que consulta el saldo se encuentra activo Y es VPN Y registra limites de consumo en Altamira",
  "keyword": "Given "
});
formatter.match({
  "location": "LimiteConsumoStepDefinition.que_el_abonado_que_consulta_el_saldo_se_encuentra_activo_y_es_vpn_y_registra_limites_de_consumo_en_altamira()"
});
formatter.result({
  "duration": 50100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "entregar valores registrados en monederos para limite consumo",
  "description": "",
  "id": "consultar-los-limites-de-consumo-de-un-abonado-vpn-en-altamira;entregar-valores-registrados-en-monederos-para-limite-consumo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "que los escenarios 1 o 2 fueron fallidos y que el abonado 987421201 consulta limites de consumo http://localhost:8290/Customer/GroupManagement/queryOCSGroupMemberAttributes/ 30",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "los valores retornados de Altamira son mayores a cero LC",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "entregar los valores registrados en los monederos para el abonado en Altamira LC",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "987421201",
      "offset": 58
    },
    {
      "val": "http://localhost:8290/Customer/GroupManagement/queryOCSGroupMemberAttributes/",
      "offset": 96
    },
    {
      "val": "30",
      "offset": 174
    }
  ],
  "location": "LimiteConsumoStepDefinition.que_los_escenarios_1_o_2_fueron_fallidos_y_que_el_abonado_consulta_limites_de_consumo(String,String,String)"
});
formatter.result({
  "duration": 132600,
  "status": "passed"
});
formatter.match({
  "location": "LimiteConsumoStepDefinition.los_valores_retornados_de_altamira_son_mayores_a_cero()"
});
formatter.result({
  "duration": 425645200,
  "status": "passed"
});
formatter.match({
  "location": "LimiteConsumoStepDefinition.entregar_los_valores_registrados_en_los_monederos_para_el_abonado_en_altamira()"
});
formatter.result({
  "duration": 61100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "devolver valor cero como saldo de monederos para limite consumo",
  "description": "",
  "id": "consultar-los-limites-de-consumo-de-un-abonado-vpn-en-altamira;devolver-valor-cero-como-saldo-de-monederos-para-limite-consumo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "que los escenarios 1 o 2 fueron fallidos y que el abonado \u003cmsisdn\u003e consulta limites de consumo \u003curlServicio\u003e \u003crecordsNumber\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "los valores retornados de Altamira son menores a cero LC",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "devolvera el valor cero como saldo de monederos LC",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "consultar-los-limites-de-consumo-de-un-abonado-vpn-en-altamira;devolver-valor-cero-como-saldo-de-monederos-para-limite-consumo;",
  "rows": [
    {
      "cells": [
        "urlServicio",
        "msisdn",
        "recordsNumber"
      ],
      "line": 30,
      "id": "consultar-los-limites-de-consumo-de-un-abonado-vpn-en-altamira;devolver-valor-cero-como-saldo-de-monederos-para-limite-consumo;;1"
    },
    {
      "cells": [
        "http://localhost:8290/Customer/GroupManagement/queryOCSGroupMemberAttributes/",
        "987421201",
        "30"
      ],
      "line": 31,
      "id": "consultar-los-limites-de-consumo-de-un-abonado-vpn-en-altamira;devolver-valor-cero-como-saldo-de-monederos-para-limite-consumo;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que el abonado que consulta el saldo se encuentra activo Y es VPN Y registra limites de consumo en Altamira",
  "keyword": "Given "
});
formatter.match({
  "location": "LimiteConsumoStepDefinition.que_el_abonado_que_consulta_el_saldo_se_encuentra_activo_y_es_vpn_y_registra_limites_de_consumo_en_altamira()"
});
formatter.result({
  "duration": 79400,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "devolver valor cero como saldo de monederos para limite consumo",
  "description": "",
  "id": "consultar-los-limites-de-consumo-de-un-abonado-vpn-en-altamira;devolver-valor-cero-como-saldo-de-monederos-para-limite-consumo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "que los escenarios 1 o 2 fueron fallidos y que el abonado 987421201 consulta limites de consumo http://localhost:8290/Customer/GroupManagement/queryOCSGroupMemberAttributes/ 30",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "los valores retornados de Altamira son menores a cero LC",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "devolvera el valor cero como saldo de monederos LC",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "987421201",
      "offset": 58
    },
    {
      "val": "http://localhost:8290/Customer/GroupManagement/queryOCSGroupMemberAttributes/",
      "offset": 96
    },
    {
      "val": "30",
      "offset": 174
    }
  ],
  "location": "LimiteConsumoStepDefinition.que_los_escenarios_1_o_2_fueron_fallidos_y_que_el_abonado_consulta_limites_de_consumo(String,String,String)"
});
formatter.result({
  "duration": 95800,
  "status": "passed"
});
formatter.match({
  "location": "LimiteConsumoStepDefinition.los_valores_retornados_de_altamira_son_menores_a_cero()"
});
formatter.result({
  "duration": 346327300,
  "status": "passed"
});
formatter.match({
  "location": "LimiteConsumoStepDefinition.devolvera_el_valor_cero_como_saldo_de_monederos()"
});
formatter.result({
  "duration": 40200,
  "status": "passed"
});
formatter.uri("SaldoBonos.feature");
formatter.feature({
  "line": 1,
  "name": "consultar el saldo de los bonos de un abonado en Altamira",
  "description": "",
  "id": "consultar-el-saldo-de-los-bonos-de-un-abonado-en-altamira",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "mensaje de error al consultar saldo de bonos",
  "description": "",
  "id": "consultar-el-saldo-de-los-bonos-de-un-abonado-en-altamira;mensaje-de-error-al-consultar-saldo-de-bonos",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "que el abonado \u003cmsisdn\u003e consulta saldo de bonos \u003curlServicio\u003e \u003crecordsNumber\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Altamira retorna un error",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "devolvera el mensaje de error en el formato estandar",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "consultar-el-saldo-de-los-bonos-de-un-abonado-en-altamira;mensaje-de-error-al-consultar-saldo-de-bonos;",
  "rows": [
    {
      "cells": [
        "urlServicio",
        "msisdn",
        "recordsNumber"
      ],
      "line": 12,
      "id": "consultar-el-saldo-de-los-bonos-de-un-abonado-en-altamira;mensaje-de-error-al-consultar-saldo-de-bonos;;1"
    },
    {
      "cells": [
        "http://localhost:8290/Customer/BoltonManagement/queryOCSBoltonsDetails/",
        "963500797",
        "0"
      ],
      "line": 13,
      "id": "consultar-el-saldo-de-los-bonos-de-un-abonado-en-altamira;mensaje-de-error-al-consultar-saldo-de-bonos;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que el abonado que consulta el saldo se encuentra activo Y registra saldos de bonos en Altamira Y los bonos se encuentran en los estados parametrizados.",
  "keyword": "Given "
});
formatter.match({
  "location": "SaldoBonosStepDefinition.que_el_abonado_que_consulta_el_saldo_se_encuentra_activo_y_registra_saldos_de_bonos_en_altamira_y_los_bonos_se_encuentran_en_los_estados_parametrizados()"
});
formatter.result({
  "duration": 78600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "mensaje de error al consultar saldo de bonos",
  "description": "",
  "id": "consultar-el-saldo-de-los-bonos-de-un-abonado-en-altamira;mensaje-de-error-al-consultar-saldo-de-bonos;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "que el abonado 963500797 consulta saldo de bonos http://localhost:8290/Customer/BoltonManagement/queryOCSBoltonsDetails/ 0",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Altamira retorna un error",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "devolvera el mensaje de error en el formato estandar",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "963500797",
      "offset": 15
    },
    {
      "val": "http://localhost:8290/Customer/BoltonManagement/queryOCSBoltonsDetails/",
      "offset": 49
    },
    {
      "val": "0",
      "offset": 121
    }
  ],
  "location": "SaldoBonosStepDefinition.que_el_abonado_consulta_saldo_de_bonos(String,String,String)"
});
formatter.result({
  "duration": 100800,
  "status": "passed"
});
formatter.match({
  "location": "SaldoBonosStepDefinition.altamira_retorna_un_error()"
});
formatter.result({
  "duration": 274137600,
  "status": "passed"
});
formatter.match({
  "location": "SaldoBonosStepDefinition.devolvera_el_mensaje_de_error_en_el_formato_estandar()"
});
formatter.result({
  "duration": 93300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "entregar valores registrados en monederos para saldo bonos",
  "description": "",
  "id": "consultar-el-saldo-de-los-bonos-de-un-abonado-en-altamira;entregar-valores-registrados-en-monederos-para-saldo-bonos",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "que los escenarios 1 o 2 fueron fallidos y que el abonado \u003cmsisdn\u003e consulta saldo de bonos \u003curlServicio\u003e \u003crecordsNumber\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "los valores retornados de Altamira son mayores a cero",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "entregar los valores registrados en los monederos para el abonado en Altamira.",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "consultar-el-saldo-de-los-bonos-de-un-abonado-en-altamira;entregar-valores-registrados-en-monederos-para-saldo-bonos;",
  "rows": [
    {
      "cells": [
        "urlServicio",
        "msisdn",
        "recordsNumber"
      ],
      "line": 21,
      "id": "consultar-el-saldo-de-los-bonos-de-un-abonado-en-altamira;entregar-valores-registrados-en-monederos-para-saldo-bonos;;1"
    },
    {
      "cells": [
        "http://localhost:8290/Customer/BoltonManagement/queryOCSBoltonsDetails/",
        "963500797",
        "30"
      ],
      "line": 22,
      "id": "consultar-el-saldo-de-los-bonos-de-un-abonado-en-altamira;entregar-valores-registrados-en-monederos-para-saldo-bonos;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que el abonado que consulta el saldo se encuentra activo Y registra saldos de bonos en Altamira Y los bonos se encuentran en los estados parametrizados.",
  "keyword": "Given "
});
formatter.match({
  "location": "SaldoBonosStepDefinition.que_el_abonado_que_consulta_el_saldo_se_encuentra_activo_y_registra_saldos_de_bonos_en_altamira_y_los_bonos_se_encuentran_en_los_estados_parametrizados()"
});
formatter.result({
  "duration": 92900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "entregar valores registrados en monederos para saldo bonos",
  "description": "",
  "id": "consultar-el-saldo-de-los-bonos-de-un-abonado-en-altamira;entregar-valores-registrados-en-monederos-para-saldo-bonos;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "que los escenarios 1 o 2 fueron fallidos y que el abonado 963500797 consulta saldo de bonos http://localhost:8290/Customer/BoltonManagement/queryOCSBoltonsDetails/ 30",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "los valores retornados de Altamira son mayores a cero",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "entregar los valores registrados en los monederos para el abonado en Altamira.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "963500797",
      "offset": 58
    },
    {
      "val": "http://localhost:8290/Customer/BoltonManagement/queryOCSBoltonsDetails/",
      "offset": 92
    },
    {
      "val": "30",
      "offset": 164
    }
  ],
  "location": "SaldoBonosStepDefinition.que_los_escenarios_1_o_2_fueron_fallidos_y_que_el_abonado_consulta_saldo_de_bonos(String,String,String)"
});
formatter.result({
  "duration": 125500,
  "status": "passed"
});
formatter.match({
  "location": "SaldoBonosStepDefinition.los_valores_retornados_de_altamira_son_mayores_a_cero()"
});
formatter.result({
  "duration": 713819500,
  "status": "passed"
});
formatter.match({
  "location": "SaldoBonosStepDefinition.entregar_los_valores_registrados_en_los_monederos_para_el_abonado_en_altamira()"
});
formatter.result({
  "duration": 111200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "devolver valor cero como saldo de monederos para saldo bonos",
  "description": "",
  "id": "consultar-el-saldo-de-los-bonos-de-un-abonado-en-altamira;devolver-valor-cero-como-saldo-de-monederos-para-saldo-bonos",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "que los escenarios 1 o 2 fueron fallidos y que el abonado \u003cmsisdn\u003e consulta saldo de bonos \u003curlServicio\u003e \u003crecordsNumber\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "los valores retornados de Altamira son menores a cero",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "devolvera el valor cero como saldo de monederos",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "consultar-el-saldo-de-los-bonos-de-un-abonado-en-altamira;devolver-valor-cero-como-saldo-de-monederos-para-saldo-bonos;",
  "rows": [
    {
      "cells": [
        "urlServicio",
        "msisdn",
        "recordsNumber"
      ],
      "line": 30,
      "id": "consultar-el-saldo-de-los-bonos-de-un-abonado-en-altamira;devolver-valor-cero-como-saldo-de-monederos-para-saldo-bonos;;1"
    },
    {
      "cells": [
        "http://localhost:8290/Customer/BoltonManagement/queryOCSBoltonsDetails/",
        "963500797",
        "30"
      ],
      "line": 31,
      "id": "consultar-el-saldo-de-los-bonos-de-un-abonado-en-altamira;devolver-valor-cero-como-saldo-de-monederos-para-saldo-bonos;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que el abonado que consulta el saldo se encuentra activo Y registra saldos de bonos en Altamira Y los bonos se encuentran en los estados parametrizados.",
  "keyword": "Given "
});
formatter.match({
  "location": "SaldoBonosStepDefinition.que_el_abonado_que_consulta_el_saldo_se_encuentra_activo_y_registra_saldos_de_bonos_en_altamira_y_los_bonos_se_encuentran_en_los_estados_parametrizados()"
});
formatter.result({
  "duration": 60200,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "devolver valor cero como saldo de monederos para saldo bonos",
  "description": "",
  "id": "consultar-el-saldo-de-los-bonos-de-un-abonado-en-altamira;devolver-valor-cero-como-saldo-de-monederos-para-saldo-bonos;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "que los escenarios 1 o 2 fueron fallidos y que el abonado 963500797 consulta saldo de bonos http://localhost:8290/Customer/BoltonManagement/queryOCSBoltonsDetails/ 30",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "los valores retornados de Altamira son menores a cero",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "devolvera el valor cero como saldo de monederos",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "963500797",
      "offset": 58
    },
    {
      "val": "http://localhost:8290/Customer/BoltonManagement/queryOCSBoltonsDetails/",
      "offset": 92
    },
    {
      "val": "30",
      "offset": 164
    }
  ],
  "location": "SaldoBonosStepDefinition.que_los_escenarios_1_o_2_fueron_fallidos_y_que_el_abonado_consulta_saldo_de_bonos(String,String,String)"
});
formatter.result({
  "duration": 121800,
  "status": "passed"
});
formatter.match({
  "location": "SaldoBonosStepDefinition.los_valores_retornados_de_altamira_son_menores_a_cero()"
});
formatter.result({
  "duration": 499164400,
  "status": "passed"
});
formatter.match({
  "location": "SaldoBonosStepDefinition.devolvera_el_valor_cero_como_saldo_de_monederos()"
});
formatter.result({
  "duration": 88500,
  "status": "passed"
});
formatter.uri("SaldoMonedero.feature");
formatter.feature({
  "line": 1,
  "name": " consultar el saldo de los monederos de un abonado en Altamira",
  "description": "",
  "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "mensaje de error al consultar saldo monederos",
  "description": "",
  "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;mensaje-de-error-al-consultar-saldo-monederos",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "que el abonado \u003cmsisdn\u003e consulta saldo de monederos \u003curlServicio\u003e \u003crecordsNumber\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Altamira retorna un error SM",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "devolvera el mensaje de error en el formato estandar SM",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;mensaje-de-error-al-consultar-saldo-monederos;",
  "rows": [
    {
      "cells": [
        "urlServicio",
        "msisdn",
        "recordsNumber"
      ],
      "line": 12,
      "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;mensaje-de-error-al-consultar-saldo-monederos;;1"
    },
    {
      "cells": [
        "http://localhost:8290/Customer/BalanceManagement/queryOCSBalances/",
        "963500797",
        "0"
      ],
      "line": 13,
      "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;mensaje-de-error-al-consultar-saldo-monederos;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que el abonado que consulta el saldo se encuentra activo y registra saldos de monederos en Altamira",
  "keyword": "Given "
});
formatter.match({
  "location": "SaldoMonederoStepDefinition.que_el_abonado_que_consulta_el_saldo_se_encuentra_activo_y_registra_saldos_de_monederos_en_altamira()"
});
formatter.result({
  "duration": 95200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "mensaje de error al consultar saldo monederos",
  "description": "",
  "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;mensaje-de-error-al-consultar-saldo-monederos;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "que el abonado 963500797 consulta saldo de monederos http://localhost:8290/Customer/BalanceManagement/queryOCSBalances/ 0",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Altamira retorna un error SM",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "devolvera el mensaje de error en el formato estandar SM",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "963500797",
      "offset": 15
    },
    {
      "val": "http://localhost:8290/Customer/BalanceManagement/queryOCSBalances/",
      "offset": 53
    },
    {
      "val": "0",
      "offset": 120
    }
  ],
  "location": "SaldoMonederoStepDefinition.que_el_abonado_consulta_saldo_de_monederos(String,String,String)"
});
formatter.result({
  "duration": 104800,
  "status": "passed"
});
formatter.match({
  "location": "SaldoMonederoStepDefinition.altamira_retorna_un_error_sm()"
});
formatter.result({
  "duration": 278068800,
  "status": "passed"
});
formatter.match({
  "location": "SaldoMonederoStepDefinition.devolvera_el_mensaje_de_error_en_el_formato_estandar_sm()"
});
formatter.result({
  "duration": 314700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "entregar valores registrados en monederos para saldo monederos",
  "description": "",
  "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;entregar-valores-registrados-en-monederos-para-saldo-monederos",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "que los escenarios 1 o 2 fueron fallidos y que el abonado \u003cmsisdn\u003e consulta saldo de monederos \u003curlServicio\u003e \u003crecordsNumber\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "los valores retornados de Altamira son mayores a cero SM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "entregar los valores registrados en los monederos para el abonado en Altamira SM",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;entregar-valores-registrados-en-monederos-para-saldo-monederos;",
  "rows": [
    {
      "cells": [
        "urlServicio",
        "msisdn",
        "recordsNumber"
      ],
      "line": 21,
      "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;entregar-valores-registrados-en-monederos-para-saldo-monederos;;1"
    },
    {
      "cells": [
        "http://localhost:8290/Customer/BalanceManagement/queryOCSBalances/",
        "963500797",
        "30"
      ],
      "line": 22,
      "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;entregar-valores-registrados-en-monederos-para-saldo-monederos;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que el abonado que consulta el saldo se encuentra activo y registra saldos de monederos en Altamira",
  "keyword": "Given "
});
formatter.match({
  "location": "SaldoMonederoStepDefinition.que_el_abonado_que_consulta_el_saldo_se_encuentra_activo_y_registra_saldos_de_monederos_en_altamira()"
});
formatter.result({
  "duration": 837100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "entregar valores registrados en monederos para saldo monederos",
  "description": "",
  "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;entregar-valores-registrados-en-monederos-para-saldo-monederos;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "que los escenarios 1 o 2 fueron fallidos y que el abonado 963500797 consulta saldo de monederos http://localhost:8290/Customer/BalanceManagement/queryOCSBalances/ 30",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "los valores retornados de Altamira son mayores a cero SM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "entregar los valores registrados en los monederos para el abonado en Altamira SM",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "963500797",
      "offset": 58
    },
    {
      "val": "http://localhost:8290/Customer/BalanceManagement/queryOCSBalances/",
      "offset": 96
    },
    {
      "val": "30",
      "offset": 163
    }
  ],
  "location": "SaldoMonederoStepDefinition.que_los_escenarios_1_o_2_fueron_fallidos_y_que_el_abonado_consulta_saldo_de_monederos(String,String,String)"
});
formatter.result({
  "duration": 172200,
  "status": "passed"
});
formatter.match({
  "location": "SaldoMonederoStepDefinition.los_valores_retornados_de_altamira_son_mayores_a_cero_sm()"
});
formatter.result({
  "duration": 316916600,
  "status": "passed"
});
formatter.match({
  "location": "SaldoMonederoStepDefinition.entregar_los_valores_registrados_en_los_monederos_para_el_abonado_en_altamira_sm()"
});
formatter.result({
  "duration": 116800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "devolver valor cero como saldo de monederos para saldo monederos",
  "description": "",
  "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;devolver-valor-cero-como-saldo-de-monederos-para-saldo-monederos",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "que los escenarios 1 o 2 fueron fallidos y que el abonado \u003cmsisdn\u003e consulta saldo de monederos \u003curlServicio\u003e \u003crecordsNumber\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "los valores retornados de Altamira son menores a cero SM",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "devolvera el valor cero como saldo de monederos SM",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;devolver-valor-cero-como-saldo-de-monederos-para-saldo-monederos;",
  "rows": [
    {
      "cells": [
        "urlServicio",
        "msisdn",
        "recordsNumber"
      ],
      "line": 30,
      "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;devolver-valor-cero-como-saldo-de-monederos-para-saldo-monederos;;1"
    },
    {
      "cells": [
        "http://localhost:8290/Customer/BalanceManagement/queryOCSBalances/",
        "963500797",
        "30"
      ],
      "line": 31,
      "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;devolver-valor-cero-como-saldo-de-monederos-para-saldo-monederos;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que el abonado que consulta el saldo se encuentra activo y registra saldos de monederos en Altamira",
  "keyword": "Given "
});
formatter.match({
  "location": "SaldoMonederoStepDefinition.que_el_abonado_que_consulta_el_saldo_se_encuentra_activo_y_registra_saldos_de_monederos_en_altamira()"
});
formatter.result({
  "duration": 55800,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "devolver valor cero como saldo de monederos para saldo monederos",
  "description": "",
  "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;devolver-valor-cero-como-saldo-de-monederos-para-saldo-monederos;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "que los escenarios 1 o 2 fueron fallidos y que el abonado 963500797 consulta saldo de monederos http://localhost:8290/Customer/BalanceManagement/queryOCSBalances/ 30",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "los valores retornados de Altamira son menores a cero SM",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "devolvera el valor cero como saldo de monederos SM",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "963500797",
      "offset": 58
    },
    {
      "val": "http://localhost:8290/Customer/BalanceManagement/queryOCSBalances/",
      "offset": 96
    },
    {
      "val": "30",
      "offset": 163
    }
  ],
  "location": "SaldoMonederoStepDefinition.que_los_escenarios_1_o_2_fueron_fallidos_y_que_el_abonado_consulta_saldo_de_monederos(String,String,String)"
});
formatter.result({
  "duration": 90700,
  "status": "passed"
});
formatter.match({
  "location": "SaldoMonederoStepDefinition.los_valores_retornados_de_altamira_son_menores_a_cero_sm()"
});
formatter.result({
  "duration": 323646900,
  "error_message": "java.lang.NumberFormatException: For input string: \"8.99\"\r\n\tat java.lang.NumberFormatException.forInputString(NumberFormatException.java:65)\r\n\tat java.lang.Long.parseLong(Long.java:589)\r\n\tat java.lang.Long.parseLong(Long.java:631)\r\n\tat stepdefinition.SaldoMonederoStepDefinition.los_valores_retornados_de_altamira_son_menores_a_cero_sm(SaldoMonederoStepDefinition.java:87)\r\n\tat ✽.When los valores retornados de Altamira son menores a cero SM(SaldoMonedero.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SaldoMonederoStepDefinition.devolvera_el_valor_cero_como_saldo_de_monederos_sm()"
});
formatter.result({
  "status": "skipped"
});
});