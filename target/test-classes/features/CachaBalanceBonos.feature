Feature: consultar los bonos almacenados en la cache

Background:
Given que la base de datos redis exista

Scenario Outline: mensaje de exito al subir los bonos a la cache
Given que existan bonos en Altamira
When el microservicio <urlServicio> carga los bonos a la cache 
Then se devuelve mensaje ok

Examples:
| urlServicio 												  |
| http://localhost:8290/Cache/Balance/RefreshBoltonInfo/load  |

Scenario Outline: mensaje de error al consultar los bonos en la cache
Given que los bonos se encuentren cargados en memoria
When el microservicio <urlServicio> no encuentra los bonos por tipo de bono <tipoBono>
Then se devuelve el mensaje de error al no encontrar el bono

Examples:
| urlServicio 															  | tipoBono |
| http://localhost:8290/Cache/Balance/QueryBoltonInfo/ 		  			  | ABCD     |

Scenario Outline: lista de los bonos consultados por tipo de bono
Given que los bonos se encuentren cargados en memoria
When el microservicio <urlServicio> si encuentra los bonos por tipo de bono <tipoBono>
Then se devuelve el bono encontrado

Examples:
| urlServicio 															  | tipoBono |
| http://localhost:8290/Cache/Balance/QueryBoltonInfo/ 		  			  | DIN9     |