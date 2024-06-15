// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  let addAnotherDecision = true;
  let userArray = [];

  while(addAnotherDecision){

    let userFirstName = prompt("First Name");
    let userLastName = prompt("Last Name");
    let userSalary = prompt("Salary");
  
    const employeeData = {
      firstName : userFirstName,
      lastName : userLastName,
      salary : userSalary
    };
  
    userArray.push(employeeData);
  
    // console.log(employeeData.firstName);
    addAnotherDecision = confirm("Add another employee?");
    if (addAnotherDecision === false){
      return userArray;
    }

  }



  // let userArray = [userFirstName, userLastName, userSalary];
  return userArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  // console.log("123");
  let numberOfEmployees = employeesArray.length;
  let runningTotalEmployeeSalary = 0;
  for (let i = 0; i < numberOfEmployees; i++){
    // console.log(runningTotalEmployeeSalary);
    // console.log(employeesArray[i].salary);
    runningTotalEmployeeSalary += parseInt(employeesArray[i].salary);
    
  }
  let averageSalary = (runningTotalEmployeeSalary / parseFloat(numberOfEmployees)).toFixed(2);
  // console.log(runningTotalEmployeeSalary);
  // console.log(numberOfEmployees);
  console.log(`The average emloyee salary between our ${numberOfEmployees} employee(s) is $` + averageSalary);


  // return averageSalary;
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let numberOfEmployees = employeesArray.length;
  let randomNumber = Math.floor(Math.random() * numberOfEmployees);
  let randomEmployee = employeesArray[randomNumber];
  console.log(`Congratulation to  ${randomEmployee.userFirstName} ${randomEmployee.lastName}, our random drawing winner!`);
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
