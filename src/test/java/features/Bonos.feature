Feature: consultar los bonos que tiene un abonado en Altamira

Background:
Given que el abonado que consulta el saldo se encuentra activo Y tiene bonos en Altamira Y los bonos se encuentran en los estados parametrizados B

Scenario Outline: mensaje de error al consultar bonos
Given que el abonado <msisdn> consulta saldo bonos B <urlServicio> <recordsNumber> <boltonCode> <boltonTypeCode>
When Altamira retorna un error B
Then devolvera el mensaje de error en el formato estandar B

Examples:
| urlServicio 															  | msisdn 	  | recordsNumber | boltonCode | boltonTypeCode |
| http://localhost:8290/Customer/BoltonManagement/queryOCSBoltons/ 		  | 963500797 | 0			  | AE22	   | DA26			|

Scenario Outline: lista de bonos para abonado en altamira
Given que los escenarios 1 o 2 fueron fallidos y que el abonado B <msisdn> consulta saldo bonos <urlServicio> <recordsNumber> <boltonCode> <boltonTypeCode>
When el abonado tiene bonos en Altamira
Then entregar la lista de bonos para el abonado en Altamira

Examples:
| urlServicio 															  | msisdn 	  | recordsNumber | boltonCode | boltonTypeCode |
| http://localhost:8290/Customer/BoltonManagement/queryOCSBoltons/ 		  | 963500797 | 30			  | AE22	   | DA26			|