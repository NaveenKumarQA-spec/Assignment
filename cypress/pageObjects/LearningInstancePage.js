class LearningInstancePage {
    createLearningInstance(name, domainType, fieldName, fieldLabel) {
        cy.getIframe('.modulepage-frame')
          .find("button[name='create-button']")
          .contains('Create Learning Instance')
          .click();

        cy.getIframe('.modulepage-frame').find('input.textinput-cell-input-control').type(name);
        cy.getIframe('.modulepage-frame').find('select.selectinput-input.g-reset-element[name="domainId"]').select(domainType);
        cy.getIframe('.modulepage-frame').find("button[name='submit']").click();
        cy.getIframe('.modulepage-frame').find("button[aria-label='Add a field']").click();
        cy.getIframe('.modulepage-frame').find("input[placeholder='Field name']").type(fieldName);
        cy.getIframe('.modulepage-frame').find("input[placeholder='Field label']").type(fieldLabel);
        cy.getIframe('.modulepage-frame').find("button[aria-label='Create']").click();
        cy.wait(5000);
    }

    deleteField() {
        cy.getIframe('.modulepage-frame').find("div.datatable-rows div:nth-child(1) div:nth-child(8) button:nth-child(1) span:nth-child(1)").dblclick();
        cy.getIframe('.modulepage-frame').find("button[aria-label='Delete']").click({ force: true });
        cy.wait(4000)
        cy.getIframe('.modulepage-frame').find("button[name='submit']").click({ force: true });
    }
}                                                 

export default LearningInstancePage;
