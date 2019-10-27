@tag
Feature: Microservicio consulta de saldos y consumos


Background:
Given Que el microservicio de consulta de saldos y consumos se encuentra operativo

@tag1
Scenario: Firma del microservicio disponible
Given Que se solicita la firma del servicio
When se acceda a la firma del microservicio
Then se obtendra el wsdl correspondiente

@tag2
Scenario: Respueta de microservicio exitosa
Given Que se consume el microservicio de consulta de saldos y consumos
When Se envía una solicitud al microservicio correcta
Then el microservicio genera una respuesta exitosa

