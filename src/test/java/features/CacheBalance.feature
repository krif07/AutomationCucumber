Feature: consultar los bonos almacenados en la cache

Background:
Given que los bonos a consultar por tipo se encuentran en la memoria cache

Scenario Outline: mensaje de error al consultar los bonos en la cache
Given que la consulta de bonos <urlServicio> por tipo de bono <tipoBono>
When el microservicio no encuentra los bonos
Then se devuelve el mensaje de error al no encontrar el bono

Examples:
| urlServicio 															  | tipoBono |
| http://localhost:8290/Cache/Balance/QueryBoltonInfo/ 		  			  | ABCD     |

Scenario Outline: lista de los bonos consultados por tipo de bono
Given que la consulta de bonos <urlServicio> por tipo de bono <tipoBono>
When el microservicio encuentra los bonos
Then se devuelve la lista con los bonos

Examples:
| urlServicio 															  | tipoBono |
| http://localhost:8290/Cache/Balance/QueryBoltonInfo/ 		  			  | DIN9     |


Scenario Outline: mensaje de error al consultar el balance en la cache
Given que la consulta del balance <urlServicio> por codigo <codigo>
When el microservicio no encuentra el balance
Then se devuelve el mensaje de error al no encontrar el balance

Examples:
| urlServicio 															  | codigo |
| http://localhost:8290/Cache/Balance/GetShowBalances/ 		  			  | 99999  |


Scenario Outline: balance encontrado en la cache
Given que la consulta del balance <urlServicio> por codigo <codigo>
When el microservicio encuentra el balance
Then se devuelve el balance encontrado

Examples:
| urlServicio 															  | codigo |
| http://localhost:8290/Cache/Balance/GetShowBalances/ 		  			  | 90     |