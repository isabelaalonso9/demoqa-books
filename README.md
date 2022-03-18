# Tools QA Books - Challenge

## Description
---
### This project has the purpose to build and execute automated tests for the site Tools QA - Books.
---

## Summary
--- 
- [DemoQA-Books](#demoqa-books)
    - [Description](#Description)
    - [Summary](#Summary)
    - [Components](#Components)
        + [cypress](#cypress)
            + [integration](#integration)
            + [plugins](#plugins)
            + [report](#report)
            + [screenshots](#screenshots)
            + [support](#support)
            + [videos](#videos)
        + [cypress.json](#cypress.json)
        
    - [How to execute tests?](#How-to-execute-tests?)
    - [How to access report?](#How-to-access-report?)
    

--- 
## Components
---
### cypress
The folder that keeps the whole Cypress project and your folder to keep working.

### integration
The folder that keeps the spec files in which the tests are written. 

### plugins
The folder that keeps the file that configs things like to hook into various events Cypress emits.

### report
The folder that has the component to build a report of executed tests. 

### screenshots
The folder has screenshots of tests when they failed.

### support
The folder that keeps the file that does support tests be executed, like returning false when prevents Cypress from failing the test, for example.

### videos
The folder that keeps the recorded videos by the executed tests.

### cypress.json
This file is the config file to keep the configuration about tests run on Cypress.


--- 
## How to execute tests?
---
### First, you should clone the project in your computer using Git Bash command:
```
git clone "https://github.com/isabelaalonso9/demoqa-books.git"
```

### You should have [Node.js](https://nodejs.org/en/download/) installed on your computer, because for this project the language used was JavaScript with Node.js (I used the 14.18.1 version).

### After that, open the project on [Visual Studio Code](https://code.visualstudio.com/download).

### Install Cypress to run the project:
```
npm install cypres --save-dev
```

### To execute the project on headless mode, open the Visual Studio Code Terminal and type the command:
```
npm run cypress:runChromeHeadless
```

### Wait for the tests to be run. After that, you can see the results in the same terminal.

### If you want to execute the project without headless, type this command on Visual Studio Code Terminal:
```
npm run test
```
### Cypress will open a new Chrome page, and you can click on any file spec.js to execute the tests of that file. 
--- 
## How to access report? 
---
### After the tests are done, access the page on the project called 'report' and click on index.html.
