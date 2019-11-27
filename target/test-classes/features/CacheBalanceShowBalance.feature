Feature: consultar los bonos almacenados en la cache

Background:
Given que la base de datos redis para balance exista

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