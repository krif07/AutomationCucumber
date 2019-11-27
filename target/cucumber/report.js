$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Bonos.feature");
formatter.feature({
  "line": 1,
  "name": " consultar los bonos que tiene un abonado en Altamira",
  "description": "",
  "id": " consultar-los-bonos-que-tiene-un-abonado-en-altamira",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "mensaje de error al consultar bonos",
  "description": "",
  "id": " consultar-los-bonos-que-tiene-un-abonado-en-altamira;mensaje-de-error-al-consultar-bonos",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "que el abonado \u003cmsisdn\u003e consulta saldo bonos B \u003curlServicio\u003e \u003crecordsNumber\u003e \u003cboltonCode\u003e \u003cboltonTypeCode\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Altamira retorna un error B",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "devolvera el mensaje de error en el formato estandar B",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": " consultar-los-bonos-que-tiene-un-abonado-en-altamira;mensaje-de-error-al-consultar-bonos;",
  "rows": [
    {
      "cells": [
        "urlServicio",
        "msisdn",
        "recordsNumber",
        "boltonCode",
        "boltonTypeCode"
      ],
      "line": 12,
      "id": " consultar-los-bonos-que-tiene-un-abonado-en-altamira;mensaje-de-error-al-consultar-bonos;;1"
    },
    {
      "cells": [
        "http://localhost:8290/Customer/BoltonManagement/queryOCSBoltons/",
        "963500797",
        "0",
        "AE22",
        "DA26"
      ],
      "line": 13,
      "id": " consultar-los-bonos-que-tiene-un-abonado-en-altamira;mensaje-de-error-al-consultar-bonos;;2"
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
  "name": "que el abonado que consulta el saldo se encuentra activo Y tiene bonos en Altamira Y los bonos se encuentran en los estados parametrizados B",
  "keyword": "Given "
});
formatter.match({
  "location": "BonosStepDefinition.que_el_abonado_que_consulta_el_saldo_se_encuentra_activo_y_tiene_bonos_en_altamira_y_los_bonos_se_encuentran_en_los_estados_parametrizados_b()"
});
formatter.result({
  "duration": 88152900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "mensaje de error al consultar bonos",
  "description": "",
  "id": " consultar-los-bonos-que-tiene-un-abonado-en-altamira;mensaje-de-error-al-consultar-bonos;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "que el abonado 963500797 consulta saldo bonos B http://localhost:8290/Customer/BoltonManagement/queryOCSBoltons/ 0 AE22 DA26",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Altamira retorna un error B",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "devolvera el mensaje de error en el formato estandar B",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "963500797",
      "offset": 15
    },
    {
      "val": "http://localhost:8290/Customer/BoltonManagement/queryOCSBoltons/",
      "offset": 48
    },
    {
      "val": "0",
      "offset": 113
    },
    {
      "val": "AE22",
      "offset": 115
    },
    {
      "val": "DA26",
      "offset": 120
    }
  ],
  "location": "BonosStepDefinition.que_el_abonado_consulta_saldo_bonos_b(String,String,String,String,String)"
});
formatter.result({
  "duration": 2018300,
  "status": "passed"
});
formatter.match({
  "location": "BonosStepDefinition.altamira_retorna_un_error_b()"
});
formatter.result({
  "duration": 540133100,
  "status": "passed"
});
formatter.match({
  "location": "BonosStepDefinition.devolvera_el_mensaje_de_error_en_el_formato_estandar_b()"
});
formatter.result({
  "duration": 340800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "lista de bonos para abonado en altamira",
  "description": "",
  "id": " consultar-los-bonos-que-tiene-un-abonado-en-altamira;lista-de-bonos-para-abonado-en-altamira",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "que los escenarios 1 o 2 fueron fallidos y que el abonado B \u003cmsisdn\u003e consulta saldo bonos \u003curlServicio\u003e \u003crecordsNumber\u003e \u003cboltonCode\u003e \u003cboltonTypeCode\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "el abonado tiene bonos en Altamira",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "entregar la lista de bonos para el abonado en Altamira",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": " consultar-los-bonos-que-tiene-un-abonado-en-altamira;lista-de-bonos-para-abonado-en-altamira;",
  "rows": [
    {
      "cells": [
        "urlServicio",
        "msisdn",
        "recordsNumber",
        "boltonCode",
        "boltonTypeCode"
      ],
      "line": 21,
      "id": " consultar-los-bonos-que-tiene-un-abonado-en-altamira;lista-de-bonos-para-abonado-en-altamira;;1"
    },
    {
      "cells": [
        "http://localhost:8290/Customer/BoltonManagement/queryOCSBoltons/",
        "963500797",
        "30",
        "AE22",
        "DA26"
      ],
      "line": 22,
      "id": " consultar-los-bonos-que-tiene-un-abonado-en-altamira;lista-de-bonos-para-abonado-en-altamira;;2"
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
  "name": "que el abonado que consulta el saldo se encuentra activo Y tiene bonos en Altamira Y los bonos se encuentran en los estados parametrizados B",
  "keyword": "Given "
});
formatter.match({
  "location": "BonosStepDefinition.que_el_abonado_que_consulta_el_saldo_se_encuentra_activo_y_tiene_bonos_en_altamira_y_los_bonos_se_encuentran_en_los_estados_parametrizados_b()"
});
formatter.result({
  "duration": 74100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "lista de bonos para abonado en altamira",
  "description": "",
  "id": " consultar-los-bonos-que-tiene-un-abonado-en-altamira;lista-de-bonos-para-abonado-en-altamira;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "que los escenarios 1 o 2 fueron fallidos y que el abonado B 963500797 consulta saldo bonos http://localhost:8290/Customer/BoltonManagement/queryOCSBoltons/ 30 AE22 DA26",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "el abonado tiene bonos en Altamira",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "entregar la lista de bonos para el abonado en Altamira",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("CachaBalanceBonos.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# http://localhost:8290/Cache/Balance/RefreshBoltonInfo/load"
    }
  ],
  "line": 3,
  "name": " consultar los bonos almacenados en la cache",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "mensaje de error al consultar los bonos en la cache",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache;mensaje-de-error-al-consultar-los-bonos-en-la-cache",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "que los bonos se encuentren cargados en memoria",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "el microservicio \u003curlServicio\u003e no encuentra los bonos por tipo de bono \u003ctipoBono\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "se devuelve el mensaje de error al no encontrar el bono",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache;mensaje-de-error-al-consultar-los-bonos-en-la-cache;",
  "rows": [
    {
      "cells": [
        "urlServicio",
        "tipoBono"
      ],
      "line": 14,
      "id": " consultar-los-bonos-almacenados-en-la-cache;mensaje-de-error-al-consultar-los-bonos-en-la-cache;;1"
    },
    {
      "cells": [
        "http://localhost:8290/Cache/Balance/QueryBoltonInfo/",
        "ABCD"
      ],
      "line": 15,
      "id": " consultar-los-bonos-almacenados-en-la-cache;mensaje-de-error-al-consultar-los-bonos-en-la-cache;;2"
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
  "name": "que la base de datos redis exista",
  "keyword": "Given "
});
formatter.match({
  "location": "CacheBalanceBonosStepDefinition.que_la_base_de_datos_redis_exista()"
});
formatter.result({
  "duration": 114600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "mensaje de error al consultar los bonos en la cache",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache;mensaje-de-error-al-consultar-los-bonos-en-la-cache;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "que los bonos se encuentren cargados en memoria",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "el microservicio http://localhost:8290/Cache/Balance/QueryBoltonInfo/ no encuentra los bonos por tipo de bono ABCD",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "se devuelve el mensaje de error al no encontrar el bono",
  "keyword": "Then "
});
formatter.match({
  "location": "CacheBalanceBonosStepDefinition.que_los_bonos_se_encuentren_cargados_en_memoria()"
});
formatter.result({
  "duration": 76100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8290/Cache/Balance/QueryBoltonInfo/",
      "offset": 17
    },
    {
      "val": "ABCD",
      "offset": 110
    }
  ],
  "location": "CacheBalanceBonosStepDefinition.el_microservicio_no_encuentra_los_bonos_por_tipo_de_bono(String,String)"
});
formatter.result({
  "duration": 6073129000,
  "status": "passed"
});
formatter.match({
  "location": "CacheBalanceBonosStepDefinition.se_devuelve_el_mensaje_de_error_al_no_encontrar_el_bono()"
});
formatter.result({
  "duration": 91900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "lista de los bonos consultados por tipo de bono",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache;lista-de-los-bonos-consultados-por-tipo-de-bono",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "que los bonos se encuentren cargados en memoria",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "el microservicio \u003curlServicio\u003e si encuentra los bonos por tipo de bono \u003ctipoBono\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "se devuelve el bono encontrado",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache;lista-de-los-bonos-consultados-por-tipo-de-bono;",
  "rows": [
    {
      "cells": [
        "urlServicio",
        "tipoBono"
      ],
      "line": 23,
      "id": " consultar-los-bonos-almacenados-en-la-cache;lista-de-los-bonos-consultados-por-tipo-de-bono;;1"
    },
    {
      "cells": [
        "http://localhost:8290/Cache/Balance/QueryBoltonInfo/",
        "DIN9"
      ],
      "line": 24,
      "id": " consultar-los-bonos-almacenados-en-la-cache;lista-de-los-bonos-consultados-por-tipo-de-bono;;2"
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
  "name": "que la base de datos redis exista",
  "keyword": "Given "
});
formatter.match({
  "location": "CacheBalanceBonosStepDefinition.que_la_base_de_datos_redis_exista()"
});
formatter.result({
  "duration": 46900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "lista de los bonos consultados por tipo de bono",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache;lista-de-los-bonos-consultados-por-tipo-de-bono;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "que los bonos se encuentren cargados en memoria",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "el microservicio http://localhost:8290/Cache/Balance/QueryBoltonInfo/ si encuentra los bonos por tipo de bono DIN9",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "se devuelve el bono encontrado",
  "keyword": "Then "
});
formatter.match({
  "location": "CacheBalanceBonosStepDefinition.que_los_bonos_se_encuentren_cargados_en_memoria()"
});
formatter.result({
  "duration": 27300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8290/Cache/Balance/QueryBoltonInfo/",
      "offset": 17
    },
    {
      "val": "DIN9",
      "offset": 110
    }
  ],
  "location": "CacheBalanceBonosStepDefinition.el_microservicio_si_encuentra_los_bonos_por_tipo_de_bono(String,String)"
});
formatter.result({
  "duration": 6795530000,
  "status": "passed"
});
formatter.match({
  "location": "CacheBalanceBonosStepDefinition.se_devuelve_el_bono_encontrado()"
});
formatter.result({
  "duration": 142300,
  "status": "passed"
});
formatter.uri("CacheBalanceShowBalance.feature");
formatter.feature({
  "line": 1,
  "name": " consultar los bonos almacenados en la cache",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "mensaje de error al consultar el balance en la cache",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache;mensaje-de-error-al-consultar-el-balance-en-la-cache",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "que los balances se encuentren cargados en memoria",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "el microservicio \u003curlServicio\u003e no encuentra el balance buscado por codigo \u003ccodigo\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "se devuelve el mensaje de error al no encontrar el balance",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache;mensaje-de-error-al-consultar-el-balance-en-la-cache;",
  "rows": [
    {
      "cells": [
        "urlServicio",
        "codigo"
      ],
      "line": 12,
      "id": " consultar-los-bonos-almacenados-en-la-cache;mensaje-de-error-al-consultar-el-balance-en-la-cache;;1"
    },
    {
      "cells": [
        "http://localhost:8290/Cache/Balance/GetShowBalances/",
        "99999"
      ],
      "line": 13,
      "id": " consultar-los-bonos-almacenados-en-la-cache;mensaje-de-error-al-consultar-el-balance-en-la-cache;;2"
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
  "name": "que la base de datos redis para balance exista",
  "keyword": "Given "
});
formatter.match({
  "location": "CacheBalanceShowBalanceStepDefinition.que_la_base_de_datos_redis_para_balance_exista()"
});
formatter.result({
  "duration": 202500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "mensaje de error al consultar el balance en la cache",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache;mensaje-de-error-al-consultar-el-balance-en-la-cache;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "que los balances se encuentren cargados en memoria",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "el microservicio http://localhost:8290/Cache/Balance/GetShowBalances/ no encuentra el balance buscado por codigo 99999",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "se devuelve el mensaje de error al no encontrar el balance",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8290/Cache/Balance/GetShowBalances/",
      "offset": 17
    },
    {
      "val": "99999",
      "offset": 113
    }
  ],
  "location": "CacheBalanceShowBalanceStepDefinition.el_microservicio_no_encuentra_el_balance_buscado_por_codigo(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CacheBalanceShowBalanceStepDefinition.se_devuelve_el_mensaje_de_error_al_no_encontrar_el_balance()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "balance encontrado en la cache",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache;balance-encontrado-en-la-cache",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "que los balances se encuentren cargados en memoria",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "el microservicio \u003curlServicio\u003e si encuentra el balance buscado por codigo \u003ccodigo\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "se devuelve el balance encontrado",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache;balance-encontrado-en-la-cache;",
  "rows": [
    {
      "cells": [
        "urlServicio",
        "codigo"
      ],
      "line": 22,
      "id": " consultar-los-bonos-almacenados-en-la-cache;balance-encontrado-en-la-cache;;1"
    },
    {
      "cells": [
        "http://localhost:8290/Cache/Balance/GetShowBalances/",
        "90"
      ],
      "line": 23,
      "id": " consultar-los-bonos-almacenados-en-la-cache;balance-encontrado-en-la-cache;;2"
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
  "name": "que la base de datos redis para balance exista",
  "keyword": "Given "
});
formatter.match({
  "location": "CacheBalanceShowBalanceStepDefinition.que_la_base_de_datos_redis_para_balance_exista()"
});
formatter.result({
  "duration": 54700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "balance encontrado en la cache",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache;balance-encontrado-en-la-cache;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "que los balances se encuentren cargados en memoria",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "el microservicio http://localhost:8290/Cache/Balance/GetShowBalances/ si encuentra el balance buscado por codigo 90",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "se devuelve el balance encontrado",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8290/Cache/Balance/GetShowBalances/",
      "offset": 17
    },
    {
      "val": "90",
      "offset": 113
    }
  ],
  "location": "CacheBalanceShowBalanceStepDefinition.el_microservicio_si_encuentra_el_balance_buscado_por_codigo(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CacheBalanceShowBalanceStepDefinition.se_devuelve_el_balance_encontrado()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("LimiteConsumo.feature");
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
  "duration": 96800,
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
  "duration": 135300,
  "status": "passed"
});
formatter.match({
  "location": "LimiteConsumoStepDefinition.altamira_retorna_un_error_lc()"
});
formatter.result({
  "duration": 338699800,
  "status": "passed"
});
formatter.match({
  "location": "LimiteConsumoStepDefinition.devolvera_el_mensaje_de_error_en_el_formato_estandar_lc()"
});
formatter.result({
  "duration": 254700,
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
  "duration": 241200,
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
  "duration": 365100,
  "status": "passed"
});
formatter.match({
  "location": "LimiteConsumoStepDefinition.los_valores_retornados_de_altamira_son_mayores_a_cero_lc()"
});
formatter.result({
  "duration": 378620700,
  "status": "passed"
});
formatter.match({
  "location": "LimiteConsumoStepDefinition.entregar_los_valores_registrados_en_los_monederos_para_el_abonado_en_altamira_lc()"
});
formatter.result({
  "duration": 225300,
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
  "duration": 344000,
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
  "duration": 514900,
  "status": "passed"
});
formatter.match({
  "location": "LimiteConsumoStepDefinition.los_valores_retornados_de_altamira_son_menores_a_cero_lc()"
});
formatter.result({
  "duration": 388848500,
  "status": "passed"
});
formatter.match({
  "location": "LimiteConsumoStepDefinition.devolvera_el_valor_cero_como_saldo_de_monederos_lc()"
});
formatter.result({
  "duration": 99600,
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
  "duration": 233400,
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
  "duration": 179600,
  "status": "passed"
});
formatter.match({
  "location": "SaldoBonosStepDefinition.altamira_retorna_un_error()"
});
formatter.result({
  "duration": 378697300,
  "status": "passed"
});
formatter.match({
  "location": "SaldoBonosStepDefinition.devolvera_el_mensaje_de_error_en_el_formato_estandar()"
});
formatter.result({
  "duration": 300900,
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
  "duration": 288600,
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
  "duration": 371600,
  "status": "passed"
});
formatter.match({
  "location": "SaldoBonosStepDefinition.los_valores_retornados_de_altamira_son_mayores_a_cero()"
});
formatter.result({
  "duration": 571869900,
  "status": "passed"
});
formatter.match({
  "location": "SaldoBonosStepDefinition.entregar_los_valores_registrados_en_los_monederos_para_el_abonado_en_altamira()"
});
formatter.result({
  "duration": 88200,
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
  "duration": 83900,
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
  "duration": 129200,
  "status": "passed"
});
formatter.match({
  "location": "SaldoBonosStepDefinition.los_valores_retornados_de_altamira_son_menores_a_cero()"
});
formatter.result({
  "duration": 684979400,
  "status": "passed"
});
formatter.match({
  "location": "SaldoBonosStepDefinition.devolvera_el_valor_cero_como_saldo_de_monederos()"
});
formatter.result({
  "duration": 47300,
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
  "duration": 109800,
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
  "duration": 123400,
  "status": "passed"
});
formatter.match({
  "location": "SaldoMonederoStepDefinition.altamira_retorna_un_error_sm()"
});
formatter.result({
  "duration": 261420300,
  "status": "passed"
});
formatter.match({
  "location": "SaldoMonederoStepDefinition.devolvera_el_mensaje_de_error_en_el_formato_estandar_sm()"
});
formatter.result({
  "duration": 51600,
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
  "duration": 25500,
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
  "duration": 66000,
  "status": "passed"
});
formatter.match({
  "location": "SaldoMonederoStepDefinition.los_valores_retornados_de_altamira_son_mayores_a_cero_sm()"
});
formatter.result({
  "duration": 347481200,
  "status": "passed"
});
formatter.match({
  "location": "SaldoMonederoStepDefinition.entregar_los_valores_registrados_en_los_monederos_para_el_abonado_en_altamira_sm()"
});
formatter.result({
  "duration": 315300,
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
  "duration": 84800,
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
  "duration": 144000,
  "status": "passed"
});
formatter.match({
  "location": "SaldoMonederoStepDefinition.los_valores_retornados_de_altamira_son_menores_a_cero_sm()"
});
formatter.result({
  "duration": 326076300,
  "status": "passed"
});
formatter.match({
  "location": "SaldoMonederoStepDefinition.devolvera_el_valor_cero_como_saldo_de_monederos_sm()"
});
formatter.result({
  "duration": 70900,
  "status": "passed"
});
});