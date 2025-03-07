
# Selenium Automation Testing Project

## Overview
This project demonstrates how to set up and use **Selenium** for automating web application testing. The script automates the process of logging into a website and verifying the login functionality.

## 1. What is Automation Testing?
**Automation testing** uses software tools and scripts to test a web application without manual intervention. It helps run repetitive tests efficiently, ensuring the application works as expected. Automation saves time, improves consistency, and reduces human error.

## 2. What is Selenium?
**Selenium** is an open-source framework used for automating web applications across different browsers. It simulates user actions like clicking buttons, typing into forms, and navigating pages. Selenium supports multiple programming languages (Java, Python, JavaScript) and works with browsers like Chrome, Firefox, and Edge.

### Why it's useful:
- Cross-browser compatibility
- Language flexibility
- Open-source and widely used in QA

## 3. Setup Instructions

### Step 1: Install Node.js and Initialize the Project
1. Install **Node.js** from [nodejs.org](https://nodejs.org/).
2. Initialize a new Node.js project:
    ```sh
    npm init -y
    ```

### Step 2: Install Selenium WebDriver
1. Install **Selenium WebDriver**:
    ```sh
    npm install selenium-webdriver
    ```

### Step 3: Set Up WebDriver (ChromeDriver)
1. Download **ChromeDriver** that matches your Chrome version from [ChromeDriver downloads](https://sites.google.com/chromium.org/driver/downloads).
2. Add the `chromedriver` file to your system’s **PATH** or place it in a known directory.
3. Verify the installation:
    ```sh
    chromedriver --version
    ```

## 4. Simple Test Script

Create a file `test.js` in the project directory with the following content:

```javascript
const { Builder, By, Key, until } = require('selenium-webdriver');

(async function loginTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    
    try {
        // Navigate to the login page
        await driver.get('https://example.com/login'); // Replace with your actual login page URL

        // Wait for the username field to be located
        await driver.wait(until.elementLocated(By.id('login-username')), 10000);
        await driver.findElement(By.id('login-username')).sendKeys('testuser');

        // Find the password field and enter the password
        await driver.findElement(By.id('login-password')).sendKeys('password123', Key.RETURN);

        // Wait for the dashboard page to load (assuming the title contains 'Dashboard')
        await driver.wait(until.titleContains('Dashboard'), 5000);

        console.log("Login Test Passed!");
    } catch (error) {
        console.error("Test Failed:", error);
    } finally {
        // Close the browser
        await driver.quit();
    }
})();
```

## 5. Running the Test

1. Navigate to the project directory:
    ```sh
    cd selenium-test
    ```

2. Run the test script:
    ```sh
    node test.js
    ```

3. The script will:
    - Open Chrome and navigate to the login page.
    - Enter the username and password.
    - Verify the page title to check if the login was successful.



