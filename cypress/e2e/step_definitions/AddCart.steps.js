import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { addCartPage } from "../pageObjects/AddCart.page";
import { commonsPage} from "../pageObjects/Commons.page";

Given("que estou na página de um produto", () => {
    commonsPage.login();
});g


// Feature: Adição de Item ao Carrinho

//     Scenario: Adicionar um item ao carrinho ao clicar no botão "Add to Cart"
//         Given que estou na página de um produto
//         When não há itens no meu carrinho
//         When eu clico no botão "Add to Cart"
//         Then um item é adicionado ao meu carrinho
//         Then o ícone do carrinho exibe o número "1" para indicar que há um item no carrinho