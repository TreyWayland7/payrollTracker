// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const collectEmployees = function() {
  let collectedEmployees = []; // this stores the employee object and will be returned
  let newEmployee; // this will store the employee object

  do{
    newEmployee = create_employeeObject(); // create a new employee
    collectedEmployees.push(newEmployee); // save that employee to an array
  } while (promptUserData_continue()); // prompts the user if they want to continue
 
  return collectedEmployees;
}

const create_employeeObject = function() {
  const employeeData = {
    firstName : promptUserData_firstName(), // prompts the user for first name
    lastName : promptUserData_lastName(), // prompts the user for last name
    salary : promptUserData_salary() // prompts the user for salary
  };
  return employeeData;
}

const promptUserData_continue = function() {
  addAnotherEmployee = confirm("Add another employee?"); 
  return addAnotherEmployee;
}

const promptUserData_firstName = function() {
  let userFirstName = prompt("First Name"); 
  return userFirstName;
}

const promptUserData_lastName = function() {
  let userLastName = prompt("Last Name"); 
  return userLastName;
}

const promptUserData_salary = function() {
  let userSalary = prompt("Salary"); 
  return userSalary;
}

const displayAverageSalary = function(employeesArray) {
  let numberOfEmployees = employeesArray.length; // get number of employees
  let averageSalary = getAverageSalary(employeesArray); // get the average salary
  console.log(`The average emloyee salary between our ${numberOfEmployees} employee(s) is $` + averageSalary); // display the results
}

const getAverageSalary = function(employeesArray){
  let numberOfEmployees = employeesArray.length; // get the number of employees
  let runningTotalEmployeeSalary = 0; // keep track of the running total
  for (let i = 0; i < numberOfEmployees; i++){
    runningTotalEmployeeSalary += parseInt(employeesArray[i].salary); // keep adding to that running total
  }
  let averageSalary = (runningTotalEmployeeSalary / parseFloat(numberOfEmployees)).toFixed(2); //  find the average and format to float with two decimal points
  return averageSalary;
}

const getRandomEmployee = function(employeesArray) {
  let randomEmployee = returnRandomEmployee(employeesArray);
  console.log(`Congratulation to  ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
}

const returnRandomEmployee = function(employeesArray){
  let numberOfEmployees = employeesArray.length;
  let randomNumber = getRandomNumberInRange(numberOfEmployees);
  let randomEmployee = employeesArray[randomNumber];
  return randomEmployee;
}

const getRandomNumberInRange = function(range){
  let randomNumber = Math.floor(Math.random() * range);
  return randomNumber;
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
