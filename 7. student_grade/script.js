var students = [];

function addStudent() {
    var student = {};
    student.rank = students.length + 1;
    student.name = prompt('Enter the name of the student');
    student.rollNo = prompt('Enter the roll number of the student');
    student.year1 = parseFloat(prompt('Enter the marks of the student in 1st Year'));
    student.year2 = parseFloat(prompt('Enter the marks of the student in 2nd Year'));
    student.year3 = parseFloat(prompt('Enter the marks of the student in 3rd Year'));
    student.year4 = parseFloat(prompt('Enter the marks of the student in 4th Year'));

    // Calculate overall percentage
    student.overall = (student.year1 + student.year2 + student.year3 + student.year4) / 4;

    students.push(student);
    generateTable();
}

function calculateGrades() {
    // Calculate overall grades for all students
    students.forEach(function (student) {
        student.grade = calculateGrade(student.overall);
    });

    // Update the table
    generateTable();
}

function calculateGrade(percentage) {
    if (percentage >= 90) {
        return 'A';
    } else if (percentage >= 80) {
        return 'B';
    } else if (percentage >= 70) {
        return 'C';
    } else if (percentage >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

function generateTable() {
    var tableContainer = document.getElementById('table-container');
    var tableHTML = '<table align="center" border="1">';
    tableHTML += '<tr><th>Rank</th><th>Name</th><th>Roll No.</th><th>1st Year</th><th>2nd Year</th><th>3rd Year</th><th>4th Year</th><th>Overall</th></tr>';

    students.forEach(function (student) {
        tableHTML += '<tr>';
        tableHTML += '<td>' + student.rank + '</td>';
        tableHTML += '<td>' + student.name + '</td>';
        tableHTML += '<td>' + student.rollNo + '</td>';
        tableHTML += '<td>' + student.year1 + '</td>';
        tableHTML += '<td>' + student.year2 + '</td>';
        tableHTML += '<td>' + student.year3 + '</td>';
        tableHTML += '<td>' + student.year4 + '</td>';
        tableHTML += '<td>' + student.overall.toFixed(2) + '</td>';
        tableHTML += '</tr>';
    });

    tableHTML += '</table>';
    tableContainer.innerHTML = tableHTML;
}
