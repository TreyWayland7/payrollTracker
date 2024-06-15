// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const promptUserData_firstName = function() {
  let userFirstName = prompt("First Name"); // prompts the user for first name
  return userFirstName;
}

const promptUserData_lastName = function() {
  let userLastName = prompt("Last Name"); // prompts the user for last name
  return userLastName;
}

const promptUserData_salary = function() {
  let userSalary = prompt("Salary"); // prompts the user for salary
  return userSalary;
}

const promptUserData_continue = function() {
  addAnotherEmployee = confirm("Add another employee?"); // prompt the user to add another user
  return addAnotherEmployee;
}

const create_employeeObject = function() {
  const employeeData = {
    firstName : promptUserData_firstName(),
    lastName : promptUserData_lastName(),
    salary : promptUserData_salary()
  };
  return employeeData;
}

// Collect employee data
const collectEmployees = function() {

  
  let collectedEmployees = []; // this stores the employee object and will be returned
  let newEmployee;

  do{

    newEmployee = create_employeeObject();
    collectedEmployees.push(newEmployee); // pushes that object onto the array
    // addAnotherEmployee = confirm("Add another employee?"); 
    
    // if (addAnotherEmployee === false){ 
    //   return collectedEmployees;
    // }
  } while (promptUserData_continue());

  return collectedEmployees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {

  let numberOfEmployees = employeesArray.length;
  let runningTotalEmployeeSalary = 0;
  for (let i = 0; i < numberOfEmployees; i++){
    runningTotalEmployeeSalary += parseInt(employeesArray[i].salary);
  }
  let averageSalary = (runningTotalEmployeeSalary / parseFloat(numberOfEmployees)).toFixed(2);
  console.log(`The average emloyee salary between our ${numberOfEmployees} employee(s) is $` + averageSalary);
}




// Select a random employee
const getRandomEmployee = function(employeesArray) {
  let numberOfEmployees = employeesArray.length;
  let randomNumber = Math.floor(Math.random() * numberOfEmployees);
  let randomEmployee = employeesArray[randomNumber];
  console.log(`Congratulation to  ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
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
