package cucumberoptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/features/",
		glue="stepdefinition",
		plugin= {
				"pretty", "html:target/cucumber", 
				"json:target/cucumber.json",
				"junit:target/cucumber.xml"
				}
		)
public class TestRunner {

}
