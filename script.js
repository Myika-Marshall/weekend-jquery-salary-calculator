$(document).ready(onReady);

let employee = {
    firstName: $('#first-name').val(), 
    lastName: $('#last-name').val(),
    idNum:$('#id').val(),
    title: $('#title').val(),
    annualSalary:$('#annual-salary').val(),

}

function onReady(){
    console.log('in onReady');
    $('#submit-button').on('click', employeeData)

}
function employeeData(employees){
    console.log('in engageEmployee');
// I want to create an append that adds employee data to my table
    for (let empoyee of employess){
        $('#tbody').append(
    `<tr>
    <td>${employee.firstName}</td>  
    <td>${employee.lastname}</td>
    <td>${employee.idNum}</td>
    <td>${employee.title}</td>
    <td>${employee.annualSalary}/td>
    <td>empty text</td>
    </tr>`);
    }
// I need to calculate the Annual Salaries
// I need to indicate if the calculation takes me over 20,000
} 

