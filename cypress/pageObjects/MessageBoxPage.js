class MessageBoxPage {
    createBot(botName, message) {
        cy.get("span[data-text='Create a bot…']").click(); // Changed from type to click
        cy.get("input[placeholder='Required'][name='name']").type(botName); // Assuming botName input field exists
        cy.get("button[name='submit']").click();
        cy.get(".editor-page-header__title-text")
        .should('be.visible')
        .and('contain.text', botName);
      
    
        cy.get("input[placeholder='Search actions']").type('Message');
        cy.get(".rio-focus.rio-focus--inset_0.rio-focus--border-radius_4px.rio-focus--has_element-focus-visible.rio-bare-button.g-reset-element.g-no-out-transitions.rio-bare-button--rio_interactive-whisper.rio-bare-button--is_parent.rio-bare-button--is_clickable.rio-bare-button--size_14px.rio-bare-button--padding-for-size_14px.editor-palette-item__child-label-button.g-reset-element.g-override.g-focus--shrink_2px").dblclick();
        cy.wait(3000);
        cy.get("div[placeholder='Required'][name='content']").type('Test message');
        cy.get("button[name='save']").click();
        cy.wait(4000);
        cy.get("button[name='close']").click(); 
    }
}

export default MessageBoxPage;
