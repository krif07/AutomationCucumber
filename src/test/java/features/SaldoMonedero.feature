Feature: consultar el saldo de los monederos de un abonado en Altamira

Background:
Given que el abonado que consulta el saldo se encuentra activo y registra saldos de monederos en Altamira

Scenario Outline: mensaje de error al consultar saldo monederos
Given que el abonado <msisdn> consulta saldo de monederos <urlServicio> <recordsNumber>
When Altamira retorna un error SM
Then devolvera el mensaje de error en el formato estandar SM

Examples:
| urlServicio 															  | msisdn 	  | recordsNumber |
| http://localhost:8290/Customer/BalanceManagement/queryOCSBalances/ 	  | 963500797 | 0			  |

Scenario Outline: entregar valores registrados en monederos para saldo monederos
Given que los escenarios 1 o 2 fueron fallidos y que el abonado <msisdn> consulta saldo de monederos <urlServicio> <recordsNumber>
When los valores retornados de Altamira son mayores a cero SM
Then entregar los valores registrados en los monederos para el abonado en Altamira SM

Examples:
| urlServicio 															  | msisdn 	  | recordsNumber |
| http://localhost:8290/Customer/BalanceManagement/queryOCSBalances/ 	  | 963500797 | 30			  |

Scenario Outline: devolver valor cero como saldo de monederos para saldo monederos
Given que los escenarios 1 o 2 fueron fallidos y que el abonado <msisdn> consulta saldo de monederos <urlServicio> <recordsNumber>
When los valores retornados de Altamira son menores a cero SM
Then devolvera el valor cero como saldo de monederos SM

Examples:
| urlServicio 															  | msisdn 	  | recordsNumber |
| http://localhost:8290/Customer/BalanceManagement/queryOCSBalances/ 	  | 963500797 | 30			  |