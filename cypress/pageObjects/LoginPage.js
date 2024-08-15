class LoginPage {
    setUserName(username) {
        cy.get("input[name='username']").type(username);
    }

    setPassword(password) {
        cy.get("input[name='password']").type(password);
    }

    clickSubmit() {
        cy.get("button[name='login']").click();
    }

    verifyLogin() {
        cy.url().should('include', '/home');
    }
}

export default LoginPage;
