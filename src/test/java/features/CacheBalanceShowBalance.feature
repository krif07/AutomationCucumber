Feature: consultar los bonos almacenados en la cache

Background:
Given que la base de datos redis para balance exista

Scenario Outline: mensaje de exito al subir los balances a la cache
Given que existan balances en Altamira
When el microservicio <urlServicio> carga los balances a la cache 
Then se devuelve mensaje ok para balances

Examples:
| urlServicio 												  |
| http://localhost:8290/Cache/Balance/RefreshBoltonInfo/load  |

Scenario Outline: mensaje de error al consultar el balance en la cache
Given que los balances se encuentren cargados en memoria 
When el microservicio <urlServicio> no encuentra el balance buscado por codigo <codigo>
Then se devuelve el mensaje de error al no encontrar el balance

Examples:
| urlServicio 															  | codigo |
| http://localhost:8290/Cache/Balance/GetShowBalances/ 		  			  | 99999  |


Scenario Outline: balance encontrado en la cache
Given que los balances se encuentren cargados en memoria
When el microservicio <urlServicio> si encuentra el balance buscado por codigo <codigo>
Then se devuelve el balance encontrado

Examples:
| urlServicio 															  | codigo |
| http://localhost:8290/Cache/Balance/GetShowBalances/ 		  			  | 90     |


#Para consultar el saldo de los monederos de un abonado en Altamira

#Dado que el servicio QueryOCSBalance devolvió los saldos de monederos en Altamira.

#Escenario 1:

#(Dado|Dada|Dados|Dadas) que el abonado consulta saldo de monederos
#Cuando los monederos no correspondan a los configurados y cargados en la Caché
#Entonces devolverá un error estándar controlado.

#Escenario 2:

#(Dado|Dada|Dados|Dadas) que el abonado consulta saldo de monederos
#Cuando los monederos correspondan a los configurados y cargados en la Caché
#Entonces devolverá el saldo de los monederos correspondientes.