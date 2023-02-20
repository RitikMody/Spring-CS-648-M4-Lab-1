var $  =function(id){
    return window.document.getElementById(id);
};

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
form = $('addForm')
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
var count = 0

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id = $('id').value;
    let name = $('name').value;
    let extension= $('extension').value;
    let email= $('email').value;
    let department= $('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = $('employees').insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let idCell = row.insertCell()
    let nameCell = row.insertCell()
    let extensionCell = row.insertCell()
    let emailCell = row.insertCell()
    let departmentCell = row.insertCell()
    let deleteCell = row.insertCell()
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let idText = window.document.createTextNode(id)
    let nameText = window.document.createTextNode(name)
    let extensionText = window.document.createTextNode(extension)
    let emailText = window.document.createTextNode(email)
    let departmentText = window.document.createTextNode(department)

    idCell.appendChild(idText)
    nameCell.appendChild(nameText)
    extensionCell.appendChild(extensionText)
    emailCell.appendChild(emailText)
    departmentCell.appendChild(departmentText)

    // CREATE THE DELETE BUTTON
    let deleteButton = window.document.createElement('BUTTON')
    deleteButton.classList.add('btn-danger');
    deleteButton.innerText = 'X';
    deleteButton.id = 'delete';
    deleteCell.appendChild(deleteButton);

    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus();
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count ++;
    $('empCount').innerText = '(' + String(count)+')';

});

// DELETE EMPLOYEE
$('employees').addEventListener('click', (e) =>{
    $('employees').deleteRow(e.target.parentNode.parentNode.rowIndex);
    count--;
    $('empCount').innerText = '(' + String(count)+')';
});