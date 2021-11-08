$(document).ready(onReady);

let employee = {
    firstName: $('#first-name').val(), 
    lastName: $('#last-name').val(),
    ID:$('#id').val(),
    Title: $('#title').val(),
    annualSalary:$('#annual-salary').val(),

}

function onReady(){
    console.log('in onReady');
    $('#submit-button').on('click', employeeData)

}
function employeeData(){
    console.log('in engageEmployee');
// I want to create an append that adds employee data to my table
    let newEmployee=
    `<tr>
    <td>${employee.firstName}</td>
    </tr>
    <tr>  
    <td>${employee.lastname}</td>
    </tr>
    <tr>
    <td>${employee.ID}</td>
    </tr>
    <tr>
        <td>${employee.Title}</td>
    </tr>
    <tr>
        <td>${employee.annualSalary}/td></tr>
    <tr>
        <td>empty text</td>
    </tr>`
employeeData.append();
// I need to calculate the Annual Salaries
// I need to indicate if the calculation takes me over 20,000
} 

