///<reference types="cypress"/>

describe('visits website', function() {
    beforeEach(function(){
        cy.visit('index.html');
    })
    it("adds a todo", () => {
        cy.get("input").type('add todo{enter}')
        cy.get("input").type('add another todo{enter}')
        cy.get("input").type('add new todo{enter}')
        cy.get(".todo-list >div").should("have.length", 3);
    
        cy.get('.todo-list > :nth-child(2)').click().should("have.class", "completed")
        cy.get('.todo-list >:nth-child(2)').should("have.css", "text-decoration", "line-through solid rgb(255, 255, 255)");
        cy.get('.clear-btn').click();
        cy.get('.todo-list >div').should("have.length", 2);
       
}) 
})