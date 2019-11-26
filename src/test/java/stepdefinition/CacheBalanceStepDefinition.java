package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class CacheBalanceStepDefinition {
	
	@Given("^que los bonos a consultar por tipo se encuentran en la memoria cache$")
    public void que_los_bonos_a_consultar_por_tipo_se_encuentran_en_la_memoria_cache() throws Throwable {
        System.out.println("0. que los bonos a consultar por tipo se encuentran en la memoria cache$");
    }

    @Given("^que la consulta de bonos (.+) por tipo de bono (.+)$")
    public void que_la_consulta_de_bonos_por_tipo_de_bono(String urlservicio, String tipobono) throws Throwable {
        System.out.println("1.1 que la consulta de bonos (.+) por tipo de bono (.+)$");
    }

    @When("^el microservicio no encuentra los bonos$")
    public void el_microservicio_no_encuentra_los_bonos() throws Throwable {
        System.out.println("1.2 el microservicio no encuentra los bonos$");
    }

    @Then("^se devuelve el mensaje de error al no encontrar el bono$")
    public void se_devuelve_el_mensaje_de_error_al_no_encontrar_el_bono() throws Throwable {
        System.out.println("1.3 se devuelve el mensaje de error al no encontrar el bono$");
    }
    
    @When("^el microservicio encuentra los bonos$")
    public void el_microservicio_encuentra_los_bonos() throws Throwable {
        System.out.println("2.2 el microservicio encuentra los bonos$");
    }

    @Then("^se devuelve la lista con los bonos$")
    public void se_devuelve_la_lista_con_los_bonos() throws Throwable {
        System.out.println("2.3 se devuelve la lista con los bonos$");
    }
    
    @Given("^que la consulta del balance (.+) por codigo (.+)$")
    public void que_la_consulta_del_balance_por_codigo(String urlservicio, String codigo) throws Throwable {
        System.out.println("3.1 que la consulta del balance (.+) por codigo (.+)$");
    }

    @When("^el microservicio no encuentra el balance$")
    public void el_microservicio_no_encuentra_el_balance() throws Throwable {
        System.out.println("3.2 el microservicio no encuentra el balance$");
    }

    @Then("^se devuelve el mensaje de error al no encontrar el balance$")
    public void se_devuelve_el_mensaje_de_error_al_no_encontrar_el_balance() throws Throwable {
        System.out.println("3.3 se devuelve el mensaje de error al no encontrar el balance$");
    }
    
    @When("^el microservicio encuentra el balance$")
    public void el_microservicio_encuentra_el_balance() throws Throwable {
        System.out.println("4.2 el microservicio encuentra el balance$");
    }

    @Then("^se devuelve el balance encontrado$")
    public void se_devuelve_el_balance_encontrado() throws Throwable {
        System.out.println("4.3 se devuelve el balance encontrado$");
    }
}
