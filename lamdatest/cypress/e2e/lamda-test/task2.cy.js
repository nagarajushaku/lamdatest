
import "@cypress-audit/pa11y/commands"

describe('Assignment Task: Cypress 101',()=>{
    it('Test Scenarios-2    ',()=>{
  cy.visit('https://www.lambdatest.com/selenium-playground');
//it is avialble only samsung-s10
  cy.viewport('samsung-s10');
  cy.contains('Input Form Submit').click();
  cy.injectAxe();
  cy.get('#name').type('shaku');
  cy.get('#inputEmail4').type('shakunagaraju1029@gmail.com');
  cy.get('#inputPassword4').type('Nag@1525');
  cy.get('#company').type('Qualminds');
  cy.xpath('//input[@id="websitename"]').type('Qualminds')
  cy.get(':nth-child(3) > .pr-20 > .w-full').select('India')
  cy.get('#inputCity').type('Hyderabad')
})
    
 
   
    
})