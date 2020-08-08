# Employee Tracker
## Table of Contents: 
 * [Description](#Description) 
* [Installation Instructions](#Installation-Instructions) 
* [Usage Information](#Usage-Information) 
* [Contribution Guidlines](#Contribution-Guidelines) 
* [Test Instructions](#Test-Instructions) 
* [Questions](#Questions) 
## Description 
This application is used through the console. Using the npm inquirer package it allows the end user to view, update, add and delete information about employees at a company. This application gives the end user convinient access to the MySQL database. The database stores information about the employee including their full name and role id. Using their role id the end user can access further details regarding their role such as title, salary and department id. Using the department id the end user can find the name of their department. The end user can easily add an employee to the database by entering their full name and role id into the console. Similarly, the end user can choose to edit the role of an existing employee. This makes it easy to update information in the case of a promotion, meaning that deleting the old employee profile and adding a new one is unnecessary.
## Installation Instructions 
To install this application download the zip file or clone the git repository in your terminal. 
## Usage Information 
Open your terminal to the file location of server.js and type "node server.js" to initiate the inquirer prompt. If these steps don't work try reinstalling the npm packages by typing into your terminal "npm install mysql" and "npm install inquirer". Alternatively, you may need to open the schema.sql file in MySQL Workbench and run the file before running the server.js file.
## Contribution Guidelines 
To contribute to this application please submit a pull request and make sure your commit accurately describes your contribution.
## Test Instructions 
Test the file by making sure the SQL connection works. This can be done by selecting the 2nd inquirer option: View all employees. There are 6 employees hard coded into the schema.sql file, if they are there then the test has been successful. These default employees can be easily deleted if they aren't wanted.
## Questions 
 * GitHub: https://github.com/benorule
* Email: benorule@outlook.com
* License: MIT


