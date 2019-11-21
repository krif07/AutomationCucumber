Feature: consultar los limites de consumo de un abonado VPN en Altamira

Background:
Given que el abonado que consulta el saldo se encuentra activo Y es VPN Y registra limites de consumo en Altamira

Scenario Outline: mensaje de error al consultar limite de consumo
Given que el abonado <msisdn> consulta limites de consumo <urlServicio> <recordsNumber>
When Altamira retorna un error LC
Then devolvera el mensaje de error en el formato estandar LC

Examples:
| urlServicio 															  		| msisdn 	  | recordsNumber |
| http://localhost:8290/Customer/GroupManagement/queryOCSGroupMemberAttributes/ | 987421201   | 0			  |

Scenario Outline: entregar valores registrados en monederos para limite consumo
Given que los escenarios 1 o 2 fueron fallidos y que el abonado <msisdn> consulta limites de consumo <urlServicio> <recordsNumber>
When los valores retornados de Altamira son mayores a cero LC
Then entregar los valores registrados en los monederos para el abonado en Altamira LC

Examples:
| urlServicio 															  		| msisdn 	  | recordsNumber |
| http://localhost:8290/Customer/GroupManagement/queryOCSGroupMemberAttributes/ | 987421201   | 0			  |

Scenario Outline: devolver valor cero como saldo de monederos para limite consumo
Given que los escenarios 1 o 2 fueron fallidos y que el abonado <msisdn> consulta limites de consumo <urlServicio> <recordsNumber>
When los valores retornados de Altamira son menores a cero LC
Then devolvera el valor cero como saldo de monederos LC

Examples:
| urlServicio 															  		| msisdn 	  | recordsNumber |
| http://localhost:8290/Customer/GroupManagement/queryOCSGroupMemberAttributes/ | 987421201   | 0			  |