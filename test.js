const { Builder, By, Key, until } = require('selenium-webdriver');

(async function loginTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    
    try {
        // Step 1: Navigate to the login page
        await driver.get('https://example.com/login'); // Replace with your actual login page URL
        
        // Step 2: Wait for the page to load completely (wait for a specific element like the username field)
        await driver.wait(until.elementLocated(By.id('login-username')), 10000); // Wait for username field
        console.log("Login page loaded");

        // Step 3: Enter username
        await driver.findElement(By.id('login-username')).sendKeys('testuser');

        // Step 4: Enter password
        await driver.findElement(By.id('login-password')).sendKeys('password123', Key.RETURN);

        // Step 5: Wait for the dashboard page to load (or any confirmation of successful login)
        await driver.wait(until.titleContains('Dashboard'), 10000); // Adjust based on the expected title after login

        console.log("Login Test Passed!");

        // Step 6: Verify the URL after login to ensure the page navigated properly
        const currentUrl = await driver.getCurrentUrl();
        console.log("Current URL after login:", currentUrl);
        
    } catch (error) {
        console.error("Test Failed:", error);
    } finally {
        // Step 7: Close the browser after the test
        await driver.quit();
    }
})();
