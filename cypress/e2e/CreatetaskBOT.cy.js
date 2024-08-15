import LoginPage from "../pageObjects/LoginPage";
import MessageBoxPage from "../pageObjects/MessageBoxPage";
import LearningInstancePage from "../pageObjects/LearningInstancePage";

describe('Page Object Model', () => {
    let testData;

    // before() hook to run once before all tests in this describe block
    before(() => {
        // Load test data
        cy.fixture('testData').then((data) => {
            testData = data;
            console.log('Loaded testData:', testData); // Check the loaded test data in the console
        });

        // Visit the home page
        cy.visit("https://community2.cloud-2.automationanywhere.digital/#/home");

        cy.wait(5000)
    });

    it('Login Test and Use Cases', () => {
        const loginPage = new LoginPage();
        const messageBoxPage = new MessageBoxPage();
        const learningInstancePage = new LearningInstancePage();

        // Perform login
        loginPage.setUserName(testData.login.username);
        loginPage.setPassword(testData.login.password);
        cy.get(testData.login.loginButtonSelector).click(); // Use the selector from testData
        cy.wait(4000); 
        loginPage.verifyLogin();

        // Use Case 1 - Create Message Box Task
        if (testData.messageBox && testData.messageBox.message) {
            messageBoxPage.createBot(testData.bot.name, testData.messageBox.message);
        } else {
            throw new Error('MessageBox data is missing in testData.json');
        }
 
        // Use Case 2 - Create Learning Instance
        cy.get("button[title='Manage']").click();
        cy.get("a[title='Learning Instances']").click();
        cy.wait(5000);

        learningInstancePage.createLearningInstance(
            testData.learningInstance.name,
            testData.learningInstance.domainType,
            testData.learningInstance.fieldName,
            testData.learningInstance.fieldLabel
        );

        learningInstancePage.deleteField();

        // Logout
        cy.get("a[title='Home']").click();
        cy.wait(3000);
        cy.get("button[title='saeed.automation@gmail.com']").click();
        cy.wait(3000);
        cy.get(".command-button__button--primary").click();
    });
});
