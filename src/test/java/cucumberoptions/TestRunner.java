package cucumberoptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

/*
 * features: indica el paquete donde está definido el o los archivos .features - Los casos de prueba en cucumber
 * glue: Define el paquete donde se deben o están generadas las clases con la definición de los pasos
 * dryRun: Analiza si ya están creados o definidos los pasos (Given, When, then), sino están creados
 * 			genera el código base para ellos
 * 			Si está en true, sólo analiza el código y no ejecuta las pruebas
 * 			Si está en false, ejecuta las pruebas
 * monochrome: Mejora la presentación en consola de los resultados
 * plugin: Se define donde alojar los reportes
 * tags: Indica cuales pruebas correr por medio de los tags
 * */
@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/features/",
		glue="stepdefinition",
		dryRun=false,
		monochrome=true,
		plugin= {
				"pretty", "html:target/cucumber", 
				"json:target/cucumber.json",
				"junit:target/cucumber.xml"
		})
public class TestRunner {

}
