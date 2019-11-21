Feature: consultar el saldo de los bonos de un abonado en Altamira

Background:
Given que el abonado que consulta el saldo se encuentra activo Y registra saldos de bonos en Altamira Y los bonos se encuentran en los estados parametrizados.

Scenario Outline: mensaje de error al consultar saldo de bonos
Given que el abonado <msisdn> consulta saldo de bonos <urlServicio> <recordsNumber>
When Altamira retorna un error
Then devolvera el mensaje de error en el formato estandar

Examples:
| urlServicio 															  | msisdn 	  | recordsNumber |
| http://localhost:8290/Customer/BoltonManagement/queryOCSBoltonsDetails/ | 963500797 | 0			  |

Scenario Outline: entregar valores registrados en monederos para saldo bonos
Given que los escenarios 1 o 2 fueron fallidos y que el abonado <msisdn> consulta saldo de bonos <urlServicio> <recordsNumber>
When los valores retornados de Altamira son mayores a cero
Then entregar los valores registrados en los monederos para el abonado en Altamira.

Examples:
| urlServicio 															  | msisdn 	  | recordsNumber |
| http://localhost:8290/Customer/BoltonManagement/queryOCSBoltonsDetails/ | 963500797 | 30			  |

Scenario Outline: devolver valor cero como saldo de monederos para saldo bonos
Given que los escenarios 1 o 2 fueron fallidos y que el abonado <msisdn> consulta saldo de bonos <urlServicio> <recordsNumber>
When los valores retornados de Altamira son menores a cero
Then devolvera el valor cero como saldo de monederos

Examples:
| urlServicio 															  | msisdn 	  | recordsNumber |
| http://localhost:8290/Customer/BoltonManagement/queryOCSBoltonsDetails/ | 963500797 | 30			  |