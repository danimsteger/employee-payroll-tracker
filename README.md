# employee-payroll-tracker

## Description

This project invovled adding code to an existing page to create several prompts and use the user inputs from the prompts for other tasks including finding an average of salaries and selecting a random employee.  This project helped to provide a deeper understanding of how to navigate and use different facets of JavaScript and debugging code. 
![Sample view of the page](</assets/images/main-page.png>)

You can view this webpage by clicking [here](https://danimsteger.github.io/employee-payroll-tracker/).

## Installation

To access the live project, you can visit this [link](https://danimsteger.github.io/employee-payroll-tracker/).

## Installation

To access the live project, you can visit this [link](https://danimsteger.github.io/danielle-steger-portfolio/)

To view the code of this project, you can clone this repository using the following commands in your command line:

### Clone this repository
~~~
git clone git@github.com:danimsteger/horiseon-accessibility.git
~~~
### Go into this repository
~~~
cd horiseon-accessibility
~~~
### Access code of the repository
~~~
code .
~~~

## Usage

When you click on the 'Add Employees' button, you will be prompted to input the first name of an employee.  

![Screenshot of first name prompt](/assets/images/prompt.png)
When you click 'OK' button, you will be prompted to input the last name of an employee.  When you click 'OK' button, you will be prompted to input your salary. If you input anything besides a number, you will recieve the message "Not a number. Input salary again!" and will be prompted to input the salary again. 

![Screenshot of prompt when a user inputs a value that is not a number for salary](/assets/images/not-number.png)

When you click 'OK' you will be asked to confirm "Would you like to add another employee?" If you select 'OK' you will be asked to input the first name of the next employee and will follow the same process explained above.

If you click the 'Cancel' button, the prompt windows will go away and the employees and their salaries will be populated into the table on the page.

![Screenshot of table of employees and their salaries](/assets/images/employees.png)

To view an array of all of the user inputs, the average salary of the employees, and the randomly selected winner, right-click on the page and choose 'Inspect' from the drop-down menu. A new window will open on the right side of the screen and from their you can view the array, and two messages. If on a Firefox browser, the pane will open at the bottom of your screen, instead of on the right side.

![Screenshot of page and console log with messages](/assets/images/consolelog.png)

## Credits

The initial code for this project was provided by edX Boot Camps LLC and can be found at this [link](https://git.bootcampcontent.com/UNC-Charlotte/UNCC-VIRT-FSF-FT-06-2024-U-LOLC/-/tree/main/03-JavaScript/02-Challenge?ref_type=heads). To complete this project, I referenced several articles on "MDN Web Docs" and "W3Schools." Additionally, I referenced materials provided by edX Boot Camps LLC.

## License

Distributed under the MIT License.  See [LICENSE](LICENSE).