//alert('welcome');
function calculateGrade() {
	let marks = document.getElementById('marks').value;
	let grade;
	//ensure it's a number and within the range
	if (isNaN(marks) || marks < 0 || marks > 100) {
		$('#errorModal').modal('show');
		return;
	}
	if (marks > 79) {
		grade = 'A';
	} else if (marks >= 60 && marks <= 79) {
		grade = 'B';
	} else if (marks >= 50 && marks <= 59) {
		grade = 'C';
	} else if (marks >= 40 && marks <= 49) {
		grade = 'D';
	} else {
		grade = 'E';
	}

	document.getElementById('gradeResult').innerHTML =
		'<p>Grade: ' + grade + '</p>';
}
