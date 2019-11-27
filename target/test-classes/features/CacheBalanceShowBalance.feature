Feature: consultar el saldo de los monederos de un abonado en Altamira

Background:
Given que el servicio QueryOCSBalance devolvio los saldos de monederos en Altamira

Scenario Outline: mensaje de exito al subir los balances a la cache
Given que existan balances en Altamira
When el microservicio <urlServicio> carga los balances a la cache 
Then se devuelve mensaje ok para balances

Examples:
| urlServicio 												  |
| http://localhost:8290/Cache/Balance/RefreshBoltonInfo/load  |

Scenario Outline: mensaje de error al consultar el balance en la cache
Given que el abonado consulta saldo de monederos <urlServicio> <codigo>
When los monederos no correspondan a los configurados y cargados en la Cache
Then devolvera un error estándar controlado

Examples:
| urlServicio 															  | codigo |
| http://localhost:8290/Cache/Balance/GetShowBalances/ 		  			  | 99999  |


Scenario Outline: balance encontrado en la cache
Given que el abonado consulta saldo de monederos <urlServicio> <codigo>
When los monederos correspondan a los configurados y cargados en la Cache
Then devolvera el saldo de los monederos correspondientes

Examples:
| urlServicio 															  | codigo |
| http://localhost:8290/Cache/Balance/GetShowBalances/ 		  			  | 90     |