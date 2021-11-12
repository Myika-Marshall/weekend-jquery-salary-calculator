$(document).ready(onReady);
// create a global array to accept and hold employees in.

function onReady(){
    console.log('in onReady');
    $('#submit-button').on('click', employeeData);
//     $('#employees-tbody').on('click', '.delete-btn', deleteButton);

function deleteButton(){
    $(this).closest('tr').remove();
}


const currentEmployees = [];

function handleAddEmployeeClick () {
const onboardEmployee = {
    //assign the inputs a location
    firstName: $('#first-name').val(), 
    lastName: $('#last-name').val(),
    idNum:$('#id').val(),
    title: $('#title').val(),
    annualSalary:$('#annual-salary').val(),
}
// I need to add the new employees to my employee table
currentEmployees.push(onboardEmployee);

employeeData(currentEmployees);
monthlySalaryCalculator(currentEmployees);
}

function renderEmployees() {
    $('#employees-tbody').empty();
    //clear out inputs
    $('#first-name').val ('');
    $('#last-name').val ('');
    $('#id').val ('');
    $('#title').val ('');
    $('#annual-salary').val ('');
}


function employeeData(employees){
    console.log('in engageEmployee');
// I want to create an append that adds employee data to my table
    // for (let empoyee of currentEmployess){
        $('#employees-tbody').append(
    `<tr>
        <td>${onboardEmployee.firstName}</td>  
        <td>${onboardEmployee.lastname}</td>
        <td>${onbaordEmployee.idNum}</td>
        <td>${onboardEmployee.title}</td>
        <td>${onboardEmployee.annualSalary}/td>
        <td>empty text</td>
    </tr>`);
        }
}
// // I need to calculate the Annual Salaries
// // I need to indicate if the calculation takes me over 20,000 (red)
function updateMonthlySalary(employees){
    let annualTotal = 0;
    let monthlyTotal = annualTotal / 12;

    for (let employee of employees){
        annualSalary += employee.annualSalary;
    } if (monthlyTotal > 20000) {
        $('#total-monthly-h3').addClass('red-background');
    } else if ($('#total-monthly-h3').removeClass('red-background')
}

// let roundedTotalMonthly = (monthlyTotal).toFixed(2);
// $('#total-monthly-cost').text(roundedTotalMonthly);

// //I need to access the delete button
