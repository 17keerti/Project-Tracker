// capture form data with JQuery and create new row on the page
var formInputsEl = $("#userForm");
var projectNameEl = $("input[name='projectName']");
var projectTypeEl = $("input[name='projectType']");
var hourlyWageEl = $("input[name='hourlyWage']");
var dueDateEl = $("input[name='dueDate']");
var dataTableEl = $("#dataTable");


$( function() {
    $( "#speed" ).selectmenu();

  } );

setInterval(function() {
    $('#currentTime').text(moment().format("MMM DD, YYYY hh:mm:ss"));
} , 1000);


  dueDateEl.datepicker({ minDate: 1 });


function handleFormSubmit (event) {
    event.preventDefault();

    var projectName = projectNameEl.val().trim();
    var projectType = projectTypeEl.val().trim();
    var hourlyWage = hourlyWageEl.val().trim();
    var dueDate = dueDateEl.val().trim();

    console.log(projectName);
    console.log(projectType);

    printProjectData(projectName, projectType, hourlyWage, dueDate);
    formInputsEl[0].reset();  
}

function printProjectData(name,type,hourlyWage,duedate) {
    var projectRowEl = $('<tr>');
    var projectNameData = $('<td>');
    projectNameData.addclass('p2');
    projectNameData.text(name);
    var projectTypeData = $('<td>').addclass('p2').text(type);
    var projectHourlyWageData = $('<td>').addclass('p2').text(hourlyWage);
    var projectDueDateData = $('<td>').addclass('p2').text(duedate);

    projectRowEl.append(projectNameData, projectTypeData, projectHourlyWageData,projectDueDateData);
    dataTableEl.append(projectRowEl);

}


formInputsEl.on('submit', handleFormSubmit);