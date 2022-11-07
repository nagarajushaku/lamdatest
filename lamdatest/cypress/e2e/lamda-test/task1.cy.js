
describe('Assignment Task: Cypress 101',()=>{
    it('Test Scenarios-1    ',()=>{
  cy.visit('https://www.lambdatest.com/selenium-playground');
cy.contains('Drag & Drop Sliders').click()
cy.get('[class="sp__range"]').eq(3)
.invoke("val", 95)
.trigger("change")
.click()
    })
})