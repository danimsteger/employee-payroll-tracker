// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  let keepGoing = true;
  let employeesArray = [];
 
  //Loops through whenever user selects okay for adding an additional employee
  while (keepGoing) {
    const firstName = prompt("First Name:");
    const lastName = prompt("Last Name:");
    //takes user inputs for salary and makes them numbers instead of strings
    let salary = Number(prompt("Salary:"));
    //if user input for salary prompt is not a number, they will recieve this message
    while (isNaN(salary)) {
      salary = Number(prompt("Not a number. Input salary again!"));
    }
    //Push user inputs from above prompts to an array
    employeesArray.push({
      firstName, 
      lastName,
      salary
    });
    const again = confirm("Would you like to add another employee")
    if (!again) {
        keepGoing = false
    }
  }
  // returns employeesArray to the console
  return employeesArray;
}


// Display the average salary
function displayAverageSalary(employeesArray) {
  // TODO: Calculate and display the average salary

  //find sum of the salarys in the employeesArray
  let sum = 0;
    for (let i = 0; i < employeesArray.length; i++) {
      sum += employeesArray[i].salary;
    }
    //average is sum of numbers, divided by the number of numbers (the length of the array)
    const average = sum / employeesArray.length;
    console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${average}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  //choose random index of the employees array 
  const random = Math.floor(Math.random() *employeesArray.length);
  const randomEmployee = employeesArray[random];
  
  //log the first and last name of the random index chosen above
  console.log(`Congrats to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
}
 

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
