Feature: consultar información de un abonado en Altamira

Background:
Given que el abonado que consulta el saldo se encuentra activo Y registra saldos de bonos en Altamira Y los bonos se encuentran en los estados parametrizados

Scenario Outline: mensaje de error al consultar saldos de suscriptor
Given que el abonado <msisdn> consulta saldos SD <urlServicio> <recordsNumber>
When Altamira retorna un error SD
Then devolvera el mensaje de error en el formato estandar SD

Examples:
| urlServicio 															  				  | msisdn 	  | recordsNumber |
| http://localhost:8290/Customer/BalanceManagement/querySubscriberOCSServiceDetail/ 	  | 96350079  | 0			  |

Scenario Outline: entregar la informacion del suscriptor
Given que los escenarios 1 o 2 fueron fallidos y que existe información del abonado en Altamira SD
When el estado del abonado <msisdn> si este dentro de los valores parametrizados SD <urlServicio> <recordsNumber>
Then entregar la información del abonado en Altamira plan, fecha de alta, ciclo, estado

Examples:
| urlServicio 															  				  | msisdn 	  | recordsNumber |
| http://localhost:8290/Customer/BalanceManagement/querySubscriberOCSServiceDetail/ 	  | 963500797 | 0			  |

Scenario Outline: mensaje de error en formato estandar
Given que los escenarios 1 o 2 fueron fallidos y que existe información del abonado en Altamira SD
When el estado del abonado <msisdn> no este dentro de los valores parametrizados SD <urlServicio> <recordsNumber>
Then devolvera el mensaje de error en formato estandar SD

Examples:
| urlServicio 															  				  | msisdn 	  | recordsNumber |
| http://localhost:8290/Customer/BalanceManagement/querySubscriberOCSServiceDetail/ 	  | 96350079  | 0			  |