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

# Enviar parámetros desde gherkyn: para definir elementos, decir donde está definido el servicio (url)
# Enviar parámetros del request 

# | var1 | var2 | var3 | 
# | abc  | cde  | fgh  |

# El parámetro se envía al request desde gherkyns y luego enviar que tag evaluar también desde gherkyns.

# Ver si se toman los valores desde otro escenario u archivo de configuración o propiedades.

# Ver como mejorar la presentación de los reportes. (plugings)

# Jmetter: archivo propiedades, apuntamiento
# Parámetros de entrada.