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
  "duration": 57062100,
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
  "duration": 1511900,
  "status": "passed"
});
formatter.match({
  "location": "BonosStepDefinition.altamira_retorna_un_error_b()"
});
formatter.result({
  "duration": 510458900,
  "status": "passed"
});
formatter.match({
  "location": "BonosStepDefinition.devolvera_el_mensaje_de_error_en_el_formato_estandar_b()"
});
formatter.result({
  "duration": 215000,
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
  "duration": 97200,
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
  "line": 1,
  "name": " consultar los bonos almacenados en la cache",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "mensaje de exito al subir los bonos a la cache",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache;mensaje-de-exito-al-subir-los-bonos-a-la-cache",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "que existan bonos en Altamira",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "el microservicio \u003curlServicio\u003e carga los bonos a la cache",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "se devuelve mensaje ok",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache;mensaje-de-exito-al-subir-los-bonos-a-la-cache;",
  "rows": [
    {
      "cells": [
        "urlServicio"
      ],
      "line": 12,
      "id": " consultar-los-bonos-almacenados-en-la-cache;mensaje-de-exito-al-subir-los-bonos-a-la-cache;;1"
    },
    {
      "cells": [
        "http://localhost:8290/Cache/Balance/RefreshBoltonInfo/load"
      ],
      "line": 13,
      "id": " consultar-los-bonos-almacenados-en-la-cache;mensaje-de-exito-al-subir-los-bonos-a-la-cache;;2"
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
  "name": "que la base de datos redis exista",
  "keyword": "Given "
});
formatter.match({
  "location": "CacheBalanceBonosStepDefinition.que_la_base_de_datos_redis_exista()"
});
formatter.result({
  "duration": 186300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "mensaje de exito al subir los bonos a la cache",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache;mensaje-de-exito-al-subir-los-bonos-a-la-cache;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "que existan bonos en Altamira",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "el microservicio http://localhost:8290/Cache/Balance/RefreshBoltonInfo/load carga los bonos a la cache",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "se devuelve mensaje ok",
  "keyword": "Then "
});
formatter.match({
  "location": "CacheBalanceBonosStepDefinition.que_existan_bonos_en_altamira()"
});
formatter.result({
  "duration": 62400,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "CacheBalanceBonosStepDefinition.se_devuelve_mensaje_ok()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "mensaje de error al consultar los bonos en la cache",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache;mensaje-de-error-al-consultar-los-bonos-en-la-cache",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "que los bonos se encuentren cargados en memoria",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "el microservicio \u003curlServicio\u003e no encuentra los bonos por tipo de bono \u003ctipoBono\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "se devuelve el mensaje de error al no encontrar el bono",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache;mensaje-de-error-al-consultar-los-bonos-en-la-cache;",
  "rows": [
    {
      "cells": [
        "urlServicio",
        "tipoBono"
      ],
      "line": 21,
      "id": " consultar-los-bonos-almacenados-en-la-cache;mensaje-de-error-al-consultar-los-bonos-en-la-cache;;1"
    },
    {
      "cells": [
        "http://localhost:8290/Cache/Balance/QueryBoltonInfo/",
        "ABCD"
      ],
      "line": 22,
      "id": " consultar-los-bonos-almacenados-en-la-cache;mensaje-de-error-al-consultar-los-bonos-en-la-cache;;2"
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
  "name": "que la base de datos redis exista",
  "keyword": "Given "
});
formatter.match({
  "location": "CacheBalanceBonosStepDefinition.que_la_base_de_datos_redis_exista()"
});
formatter.result({
  "duration": 55700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "mensaje de error al consultar los bonos en la cache",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache;mensaje-de-error-al-consultar-los-bonos-en-la-cache;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "que los bonos se encuentren cargados en memoria",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "el microservicio http://localhost:8290/Cache/Balance/QueryBoltonInfo/ no encuentra los bonos por tipo de bono ABCD",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "se devuelve el mensaje de error al no encontrar el bono",
  "keyword": "Then "
});
formatter.match({
  "location": "CacheBalanceBonosStepDefinition.que_los_bonos_se_encuentren_cargados_en_memoria()"
});
formatter.result({
  "duration": 49700,
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
  "duration": 810203600,
  "status": "passed"
});
formatter.match({
  "location": "CacheBalanceBonosStepDefinition.se_devuelve_el_mensaje_de_error_al_no_encontrar_el_bono()"
});
formatter.result({
  "duration": 396600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "lista de los bonos consultados por tipo de bono",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache;lista-de-los-bonos-consultados-por-tipo-de-bono",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "que los bonos se encuentren cargados en memoria",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "el microservicio \u003curlServicio\u003e si encuentra los bonos por tipo de bono \u003ctipoBono\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "se devuelve el bono encontrado",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache;lista-de-los-bonos-consultados-por-tipo-de-bono;",
  "rows": [
    {
      "cells": [
        "urlServicio",
        "tipoBono"
      ],
      "line": 30,
      "id": " consultar-los-bonos-almacenados-en-la-cache;lista-de-los-bonos-consultados-por-tipo-de-bono;;1"
    },
    {
      "cells": [
        "http://localhost:8290/Cache/Balance/QueryBoltonInfo/",
        "DIN9"
      ],
      "line": 31,
      "id": " consultar-los-bonos-almacenados-en-la-cache;lista-de-los-bonos-consultados-por-tipo-de-bono;;2"
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
  "name": "que la base de datos redis exista",
  "keyword": "Given "
});
formatter.match({
  "location": "CacheBalanceBonosStepDefinition.que_la_base_de_datos_redis_exista()"
});
formatter.result({
  "duration": 323700,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "lista de los bonos consultados por tipo de bono",
  "description": "",
  "id": " consultar-los-bonos-almacenados-en-la-cache;lista-de-los-bonos-consultados-por-tipo-de-bono;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "que los bonos se encuentren cargados en memoria",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "el microservicio http://localhost:8290/Cache/Balance/QueryBoltonInfo/ si encuentra los bonos por tipo de bono DIN9",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "se devuelve el bono encontrado",
  "keyword": "Then "
});
formatter.match({
  "location": "CacheBalanceBonosStepDefinition.que_los_bonos_se_encuentren_cargados_en_memoria()"
});
formatter.result({
  "duration": 106200,
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
  "duration": 807167100,
  "status": "passed"
});
formatter.match({
  "location": "CacheBalanceBonosStepDefinition.se_devuelve_el_bono_encontrado()"
});
formatter.result({
  "duration": 194900,
  "status": "passed"
});
formatter.uri("CacheBalanceShowBalance.feature");
formatter.feature({
  "line": 1,
  "name": " consultar el saldo de los monederos de un abonado en Altamira",
  "description": "",
  "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "mensaje de exito al subir los balances a la cache",
  "description": "",
  "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;mensaje-de-exito-al-subir-los-balances-a-la-cache",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "que existan balances en Altamira",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "el microservicio \u003curlServicio\u003e carga los balances a la cache",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "se devuelve mensaje ok para balances",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;mensaje-de-exito-al-subir-los-balances-a-la-cache;",
  "rows": [
    {
      "cells": [
        "urlServicio"
      ],
      "line": 12,
      "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;mensaje-de-exito-al-subir-los-balances-a-la-cache;;1"
    },
    {
      "cells": [
        "http://localhost:8290/Cache/Balance/RefreshBoltonInfo/load"
      ],
      "line": 13,
      "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;mensaje-de-exito-al-subir-los-balances-a-la-cache;;2"
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
  "name": "que el servicio QueryOCSBalance devolvio los saldos de monederos en Altamira",
  "keyword": "Given "
});
formatter.match({
  "location": "CacheBalanceShowBalanceStepDefinition.que_el_servicio_queryocsbalance_devolvio_los_saldos_de_monederos_en_altamira()"
});
formatter.result({
  "duration": 202300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "mensaje de exito al subir los balances a la cache",
  "description": "",
  "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;mensaje-de-exito-al-subir-los-balances-a-la-cache;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "que existan balances en Altamira",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "el microservicio http://localhost:8290/Cache/Balance/RefreshBoltonInfo/load carga los balances a la cache",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "se devuelve mensaje ok para balances",
  "keyword": "Then "
});
formatter.match({
  "location": "CacheBalanceShowBalanceStepDefinition.que_existan_balances_en_altamira()"
});
formatter.result({
  "duration": 140900,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "CacheBalanceShowBalanceStepDefinition.se_devuelve_mensaje_ok_para_balances()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "mensaje de error al consultar el balance en la cache",
  "description": "",
  "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;mensaje-de-error-al-consultar-el-balance-en-la-cache",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "que el abonado consulta saldo de monederos \u003curlServicio\u003e \u003ccodigo\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "los monederos no correspondan a los configurados y cargados en la Cache",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "devolvera un error estándar controlado",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;mensaje-de-error-al-consultar-el-balance-en-la-cache;",
  "rows": [
    {
      "cells": [
        "urlServicio",
        "codigo"
      ],
      "line": 21,
      "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;mensaje-de-error-al-consultar-el-balance-en-la-cache;;1"
    },
    {
      "cells": [
        "http://localhost:8290/Cache/Balance/GetShowBalances/",
        "99999"
      ],
      "line": 22,
      "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;mensaje-de-error-al-consultar-el-balance-en-la-cache;;2"
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
  "name": "que el servicio QueryOCSBalance devolvio los saldos de monederos en Altamira",
  "keyword": "Given "
});
formatter.match({
  "location": "CacheBalanceShowBalanceStepDefinition.que_el_servicio_queryocsbalance_devolvio_los_saldos_de_monederos_en_altamira()"
});
formatter.result({
  "duration": 103300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "mensaje de error al consultar el balance en la cache",
  "description": "",
  "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;mensaje-de-error-al-consultar-el-balance-en-la-cache;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "que el abonado consulta saldo de monederos http://localhost:8290/Cache/Balance/GetShowBalances/ 99999",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "los monederos no correspondan a los configurados y cargados en la Cache",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "devolvera un error estándar controlado",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8290/Cache/Balance/GetShowBalances/",
      "offset": 43
    },
    {
      "val": "99999",
      "offset": 96
    }
  ],
  "location": "CacheBalanceShowBalanceStepDefinition.que_el_abonado_consulta_saldo_de_monederos(String,String)"
});
formatter.result({
  "duration": 206800,
  "status": "passed"
});
formatter.match({
  "location": "CacheBalanceShowBalanceStepDefinition.los_monederos_no_correspondan_a_los_configurados_y_cargados_en_la_cache()"
});
formatter.result({
  "duration": 787167600,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "balance encontrado en la cache",
  "description": "",
  "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;balance-encontrado-en-la-cache",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "que el abonado consulta saldo de monederos \u003curlServicio\u003e \u003ccodigo\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "los monederos correspondan a los configurados y cargados en la Cache",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "devolvera el saldo de los monederos correspondientes",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;balance-encontrado-en-la-cache;",
  "rows": [
    {
      "cells": [
        "urlServicio",
        "codigo"
      ],
      "line": 31,
      "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;balance-encontrado-en-la-cache;;1"
    },
    {
      "cells": [
        "http://localhost:8290/Cache/Balance/GetShowBalances/",
        "90"
      ],
      "line": 32,
      "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;balance-encontrado-en-la-cache;;2"
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
  "name": "que el servicio QueryOCSBalance devolvio los saldos de monederos en Altamira",
  "keyword": "Given "
});
formatter.match({
  "location": "CacheBalanceShowBalanceStepDefinition.que_el_servicio_queryocsbalance_devolvio_los_saldos_de_monederos_en_altamira()"
});
formatter.result({
  "duration": 45700,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "balance encontrado en la cache",
  "description": "",
  "id": " consultar-el-saldo-de-los-monederos-de-un-abonado-en-altamira;balance-encontrado-en-la-cache;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "que el abonado consulta saldo de monederos http://localhost:8290/Cache/Balance/GetShowBalances/ 90",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "los monederos correspondan a los configurados y cargados en la Cache",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "devolvera el saldo de los monederos correspondientes",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8290/Cache/Balance/GetShowBalances/",
      "offset": 43
    },
    {
      "val": "90",
      "offset": 96
    }
  ],
  "location": "CacheBalanceShowBalanceStepDefinition.que_el_abonado_consulta_saldo_de_monederos(String,String)"
});
formatter.result({
  "duration": 55000,
  "status": "passed"
});
formatter.match({
  "location": "CacheBalanceShowBalanceStepDefinition.los_monederos_correspondan_a_los_configurados_y_cargados_en_la_cache()"
});
formatter.result({
  "duration": 781517700,
  "status": "passed"
});
formatter.match({
  "location": "CacheBalanceShowBalanceStepDefinition.devolvera_el_saldo_de_los_monederos_correspondientes()"
});
formatter.result({
  "duration": 47500,
  "status": "passed"
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
        "983933642",
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
  "duration": 69200,
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
  "name": "que el abonado 983933642 consulta limites de consumo http://localhost:8290/Customer/GroupManagement/queryOCSGroupMemberAttributes/ 0",
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
      "val": "983933642",
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
  "duration": 85100,
  "status": "passed"
});
formatter.match({
  "location": "LimiteConsumoStepDefinition.altamira_retorna_un_error_lc()"
});
formatter.result({
  "duration": 461239800,
  "status": "passed"
});
formatter.match({
  "location": "LimiteConsumoStepDefinition.devolvera_el_mensaje_de_error_en_el_formato_estandar_lc()"
});
formatter.result({
  "duration": 125000,
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
        "983933642",
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
  "duration": 85200,
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
  "name": "que los escenarios 1 o 2 fueron fallidos y que el abonado 983933642 consulta limites de consumo http://localhost:8290/Customer/GroupManagement/queryOCSGroupMemberAttributes/ 30",
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
      "val": "983933642",
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
  "duration": 184900,
  "status": "passed"
});
formatter.match({
  "location": "LimiteConsumoStepDefinition.los_valores_retornados_de_altamira_son_mayores_a_cero_lc()"
});
formatter.result({
  "duration": 1083274100,
  "status": "passed"
});
formatter.match({
  "location": "LimiteConsumoStepDefinition.entregar_los_valores_registrados_en_los_monederos_para_el_abonado_en_altamira_lc()"
});
formatter.result({
  "duration": 293500,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepdefinition.LimiteConsumoStepDefinition.entregar_los_valores_registrados_en_los_monederos_para_el_abonado_en_altamira_lc(LimiteConsumoStepDefinition.java:73)\r\n\tat ✽.Then entregar los valores registrados en los monederos para el abonado en Altamira LC(LimiteConsumo.feature:18)\r\n",
  "status": "failed"
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
        "983933642",
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
  "duration": 41300,
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
  "name": "que los escenarios 1 o 2 fueron fallidos y que el abonado 983933642 consulta limites de consumo http://localhost:8290/Customer/GroupManagement/queryOCSGroupMemberAttributes/ 30",
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
      "val": "983933642",
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
  "duration": 69800,
  "status": "passed"
});
formatter.match({
  "location": "LimiteConsumoStepDefinition.los_valores_retornados_de_altamira_son_menores_a_cero_lc()"
});
formatter.result({
  "duration": 583148100,
  "status": "passed"
});
formatter.match({
  "location": "LimiteConsumoStepDefinition.devolvera_el_valor_cero_como_saldo_de_monederos_lc()"
});
formatter.result({
  "duration": 107100,
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
  "duration": 109500,
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
  "duration": 145400,
  "status": "passed"
});
formatter.match({
  "location": "SaldoBonosStepDefinition.altamira_retorna_un_error()"
});
formatter.result({
  "duration": 284614100,
  "status": "passed"
});
formatter.match({
  "location": "SaldoBonosStepDefinition.devolvera_el_mensaje_de_error_en_el_formato_estandar()"
});
formatter.result({
  "duration": 115600,
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
  "duration": 68400,
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
  "duration": 164300,
  "status": "passed"
});
formatter.match({
  "location": "SaldoBonosStepDefinition.los_valores_retornados_de_altamira_son_mayores_a_cero()"
});
formatter.result({
  "duration": 605187900,
  "status": "passed"
});
formatter.match({
  "location": "SaldoBonosStepDefinition.entregar_los_valores_registrados_en_los_monederos_para_el_abonado_en_altamira()"
});
formatter.result({
  "duration": 47800,
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
  "duration": 33300,
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
  "duration": 85300,
  "status": "passed"
});
formatter.match({
  "location": "SaldoBonosStepDefinition.los_valores_retornados_de_altamira_son_menores_a_cero()"
});
formatter.result({
  "duration": 473602100,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepdefinition.SaldoBonosStepDefinition.los_valores_retornados_de_altamira_son_menores_a_cero(SaldoBonosStepDefinition.java:82)\r\n\tat ✽.When los valores retornados de Altamira son menores a cero(SaldoBonos.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SaldoBonosStepDefinition.devolvera_el_valor_cero_como_saldo_de_monederos()"
});
formatter.result({
  "status": "skipped"
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
        "983933642",
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
  "duration": 385200,
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
  "name": "que el abonado 983933642 consulta saldo de monederos http://localhost:8290/Customer/BalanceManagement/queryOCSBalances/ 0",
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
      "val": "983933642",
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
  "duration": 146000,
  "status": "passed"
});
formatter.match({
  "location": "SaldoMonederoStepDefinition.altamira_retorna_un_error_sm()"
});
formatter.result({
  "duration": 417504200,
  "status": "passed"
});
formatter.match({
  "location": "SaldoMonederoStepDefinition.devolvera_el_mensaje_de_error_en_el_formato_estandar_sm()"
});
formatter.result({
  "duration": 97400,
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
        "958601261",
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
  "duration": 56100,
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
  "name": "que los escenarios 1 o 2 fueron fallidos y que el abonado 958601261 consulta saldo de monederos http://localhost:8290/Customer/BalanceManagement/queryOCSBalances/ 30",
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
      "val": "958601261",
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
  "duration": 189100,
  "status": "passed"
});
formatter.match({
  "location": "SaldoMonederoStepDefinition.los_valores_retornados_de_altamira_son_mayores_a_cero_sm()"
});
formatter.result({
  "duration": 510220800,
  "status": "passed"
});
formatter.match({
  "location": "SaldoMonederoStepDefinition.entregar_los_valores_registrados_en_los_monederos_para_el_abonado_en_altamira_sm()"
});
formatter.result({
  "duration": 130500,
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
        "958601261",
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
  "duration": 62600,
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
  "name": "que los escenarios 1 o 2 fueron fallidos y que el abonado 958601261 consulta saldo de monederos http://localhost:8290/Customer/BalanceManagement/queryOCSBalances/ 30",
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
      "val": "958601261",
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
  "duration": 122300,
  "status": "passed"
});
formatter.match({
  "location": "SaldoMonederoStepDefinition.los_valores_retornados_de_altamira_son_menores_a_cero_sm()"
});
formatter.result({
  "duration": 521907100,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepdefinition.SaldoMonederoStepDefinition.los_valores_retornados_de_altamira_son_menores_a_cero_sm(SaldoMonederoStepDefinition.java:86)\r\n\tat ✽.When los valores retornados de Altamira son menores a cero SM(SaldoMonedero.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SaldoMonederoStepDefinition.devolvera_el_valor_cero_como_saldo_de_monederos_sm()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("SubscriberDetail.feature");
formatter.feature({
  "line": 1,
  "name": "consultar información de un abonado en Altamira",
  "description": "",
  "id": "consultar-información-de-un-abonado-en-altamira",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "mensaje de error al consultar saldos de suscriptor",
  "description": "",
  "id": "consultar-información-de-un-abonado-en-altamira;mensaje-de-error-al-consultar-saldos-de-suscriptor",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "que el abonado \u003cmsisdn\u003e consulta saldos SD \u003curlServicio\u003e \u003crecordsNumber\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Altamira retorna un error SD",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "devolvera el mensaje de error en el formato estandar SD",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "consultar-información-de-un-abonado-en-altamira;mensaje-de-error-al-consultar-saldos-de-suscriptor;",
  "rows": [
    {
      "cells": [
        "urlServicio",
        "msisdn",
        "recordsNumber"
      ],
      "line": 12,
      "id": "consultar-información-de-un-abonado-en-altamira;mensaje-de-error-al-consultar-saldos-de-suscriptor;;1"
    },
    {
      "cells": [
        "http://localhost:8290/Customer/BalanceManagement/querySubscriberOCSServiceDetail/",
        "96350079",
        "0"
      ],
      "line": 13,
      "id": "consultar-información-de-un-abonado-en-altamira;mensaje-de-error-al-consultar-saldos-de-suscriptor;;2"
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
  "name": "que el abonado que consulta el saldo se encuentra activo Y registra saldos de bonos en Altamira Y los bonos se encuentran en los estados parametrizados",
  "keyword": "Given "
});
formatter.match({
  "location": "SubscriberDetailStepDefinition.que_el_abonado_que_consulta_el_saldo_se_encuentra_activo_y_registra_saldos_de_bonos_en_altamira_y_los_bonos_se_encuentran_en_los_estados_parametrizados()"
});
formatter.result({
  "duration": 338100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "mensaje de error al consultar saldos de suscriptor",
  "description": "",
  "id": "consultar-información-de-un-abonado-en-altamira;mensaje-de-error-al-consultar-saldos-de-suscriptor;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "que el abonado 96350079 consulta saldos SD http://localhost:8290/Customer/BalanceManagement/querySubscriberOCSServiceDetail/ 0",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Altamira retorna un error SD",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "devolvera el mensaje de error en el formato estandar SD",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "96350079",
      "offset": 15
    },
    {
      "val": "http://localhost:8290/Customer/BalanceManagement/querySubscriberOCSServiceDetail/",
      "offset": 43
    },
    {
      "val": "0",
      "offset": 125
    }
  ],
  "location": "SubscriberDetailStepDefinition.que_el_abonado_consulta_saldos_sd(String,String,String)"
});
formatter.result({
  "duration": 522000,
  "status": "passed"
});
formatter.match({
  "location": "SubscriberDetailStepDefinition.altamira_retorna_un_error_sd()"
});
formatter.result({
  "duration": 314989700,
  "status": "passed"
});
formatter.match({
  "location": "SubscriberDetailStepDefinition.devolvera_el_mensaje_de_error_en_el_formato_estandar_sd()"
});
formatter.result({
  "duration": 50600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "entregar la informacion del suscriptor",
  "description": "",
  "id": "consultar-información-de-un-abonado-en-altamira;entregar-la-informacion-del-suscriptor",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "que los escenarios 1 o 2 fueron fallidos y que existe información del abonado en Altamira SD",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "el estado del abonado \u003cmsisdn\u003e si este dentro de los valores parametrizados SD \u003curlServicio\u003e \u003crecordsNumber\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "entregar la información del abonado en Altamira plan, fecha de alta, ciclo, estado",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "consultar-información-de-un-abonado-en-altamira;entregar-la-informacion-del-suscriptor;",
  "rows": [
    {
      "cells": [
        "urlServicio",
        "msisdn",
        "recordsNumber"
      ],
      "line": 21,
      "id": "consultar-información-de-un-abonado-en-altamira;entregar-la-informacion-del-suscriptor;;1"
    },
    {
      "cells": [
        "http://localhost:8290/Customer/BalanceManagement/querySubscriberOCSServiceDetail/",
        "963500797",
        "0"
      ],
      "line": 22,
      "id": "consultar-información-de-un-abonado-en-altamira;entregar-la-informacion-del-suscriptor;;2"
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
  "name": "que el abonado que consulta el saldo se encuentra activo Y registra saldos de bonos en Altamira Y los bonos se encuentran en los estados parametrizados",
  "keyword": "Given "
});
formatter.match({
  "location": "SubscriberDetailStepDefinition.que_el_abonado_que_consulta_el_saldo_se_encuentra_activo_y_registra_saldos_de_bonos_en_altamira_y_los_bonos_se_encuentran_en_los_estados_parametrizados()"
});
formatter.result({
  "duration": 31400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "entregar la informacion del suscriptor",
  "description": "",
  "id": "consultar-información-de-un-abonado-en-altamira;entregar-la-informacion-del-suscriptor;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "que los escenarios 1 o 2 fueron fallidos y que existe información del abonado en Altamira SD",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "el estado del abonado 963500797 si este dentro de los valores parametrizados SD http://localhost:8290/Customer/BalanceManagement/querySubscriberOCSServiceDetail/ 0",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "entregar la información del abonado en Altamira plan, fecha de alta, ciclo, estado",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriberDetailStepDefinition.que_los_escenarios_1_o_2_fueron_fallidos_y_que_existe_informacin_del_abonado_en_altamira_sd()"
});
formatter.result({
  "duration": 23600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "963500797",
      "offset": 22
    },
    {
      "val": "http://localhost:8290/Customer/BalanceManagement/querySubscriberOCSServiceDetail/",
      "offset": 80
    },
    {
      "val": "0",
      "offset": 162
    }
  ],
  "location": "SubscriberDetailStepDefinition.el_estado_del_abonado_si_este_dentro_de_los_valores_parametrizados_sd(String,String,String)"
});
formatter.result({
  "duration": 316954400,
  "status": "passed"
});
formatter.match({
  "location": "SubscriberDetailStepDefinition.entregar_la_informacin_del_abonado_en_altamira_plan_fecha_de_alta_ciclo_estado()"
});
formatter.result({
  "duration": 134900,
  "status": "passed"
});
});