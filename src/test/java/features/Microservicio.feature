@tag
Feature: Microservicio consulta de saldos y consumos


Background:
Given Que el microservicio de consulta de saldos y consumos se encuentra operativo

@tag1
Scenario: Firma del microservicio disponible
Given Que se solicita la firma del servicio "http://10.112.229.140:9011/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v3?wsdl"
When se acceda a la firma del microservicio "WL5G3N3:queryOCSBalancesAndBoltonsRequest"
Then se obtendra el wsdl correspondiente
#    | urlServicio            																											| tag 											|
#    | http://10.112.229.140:9011/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v3?wsdl    	| WL5G3N3:queryOCSBalancesAndBoltonsRequest 	|

@tag2
Scenario: Respueta de microservicio exitosa
Given Que se consume el microservicio de consulta de saldos y consumos
When Se envía una solicitud al microservicio correcta
| http://10.112.229.140:9011/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v3 | ns2:queryOCSBalancesAndBoltonsResponse | ns2:showBalances | false |
Then el microservicio genera una respuesta exitosa

@tag3
Scenario Outline: Respueta de microservicio exitosa 2
Given Que se consume el microservicio de consulta de saldos y consumos 2
When Se envía una solicitud al microservicio <urlServicio> correcta  con <parentTag>
Then el microservicio genera una respuesta del tag <childTag> exitosa <childTagText>

Examples:
| urlServicio 																											 | parentTag							  | childTag 		 		| childTagText  |
| http://10.112.229.140:9011/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v3 | ns2:queryOCSBalancesAndBoltonsResponse | ns2:showBalances 		| false 		|
| http://10.112.229.140:9011/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v3 | ns3:subscriberBalance 				  | ns3:type 		 		| SaldoRecargas |
| http://10.112.229.140:9011/Customer/ChargeCalculationAndBalanceManagement/BalanceManagement/ManageBalanceOperations/v3 | ns6:subscriberBolton 				  | ns6:subscriberBoltonId 	| X93 			|


@tag3
Scenario Outline: La respuesta tieen los balances
Given Se consume el microservicio
When Se envia la solicitud al tag getBalances con el estado <estado>
Then el microservicio responde en este tag <tag> este estado <estadoRespuesta>

Examples:
| estado | tag 												| estadoRespuesta |
| true   | ns2:subscriberBalancesList | true 						|
| false  | ns2:subscriberBalancesList | false						|

# Enviar parámetros desde gherkyn: para definir elementos, decir donde está definido el servicio (url)
# Enviar parámetros del request 

# | var1 | var2 | var3 | 
# | abc  | cde  | fgh  |

# El parámetro se envía al request desde gherkyns y luego enviar que tag evaluar también desde gherkyns.

# Ver si se toman los valores desde otro escenario u archivo de configuración o propiedades.

# Ver como mejorar la presentación de los reportes. (plugings)

# Jmetter: archivo propiedades, apuntamiento
# Parámetros de entrada.