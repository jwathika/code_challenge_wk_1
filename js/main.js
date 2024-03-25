//alert('welcome');
// Calculate grades for students
function calculateGrade() {
	// receive input from the id="marks" in HTML
	let marks = parseInt(document.getElementById('marks').value);
	//also accept float then convert to int

	let grade;
	//ensure it's a number and within the range 0-100
	if (isNaN(marks) || marks < 0 || marks > 100) {
		// show alert modal
		$('#errorModal').modal('show');
		return;
	}
	if (marks == '') {
		//check if user inputs blank
		alert('Input marks!');
		return;
	}
	// logic for grading according to marks
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
	//show the user the grade
	document.getElementById('gradeResult').innerHTML =
		'<b><p>Grade: ' + grade + '</p></b>';
	// log to the console just in case
	console.log(`${marks} is equal to ${grade}`);
}

//Speed calculator
function calculateSpeed() {
	// Get the speed input value and parse it as an integer
	const speed = parseInt(document.getElementById('speedInput').value);

	// Check if speed is a valid integer and not less than 0
	if (isNaN(speed) || speed < 0) {
		$('#errorModal').modal('show'); // Show error modal
		return;
	}

	// Check if speed is greater than 300, which is unrealistic
	if (speed > 300) {
		alert('Use realistic values'); // Show alert message
		return;
	}

	// Check if speed input is empty
	if (speed === '') {
		alert('Input speed!'); // Show alert message
		return; // Exit the function
	}

	// Constants for speed limits and demerit points
	const speedLimit = 70;
	const kmPerDemeritPoint = 5;
	const pointsToSuspend = 12;

	if (speed <= speedLimit) {
		document.getElementById('result').innerHTML = '<b>Ok</b>';
		return;
	}
	// Calculate demerit points
	const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

	// Display result based on demerit points
	if (demeritPoints >= pointsToSuspend) {
		// If demerit points reach or exceed 12, suspend license
		document.getElementById('result').innerHTML = '<b>License suspended!</b>';
		alert(`License suspended! at ${speed} km/hr`);
	}
	if (demeritPoints <= pointsToSuspend) {
		// If demerit points are less than 12, display points
		document.getElementById('result').innerHTML =
			'<b>Points: ' + demeritPoints + '</b>';
	}
}

//salary calculator
function calculateSalary() {
	// Get inputs
	// declaring variables
	// changed back to const from let
	const basicSalary = parseFloat(document.getElementById('basicSalary').value);
	const benefits = parseFloat(document.getElementById('benefits').value);
	if (basicSalary <= 0 || benefits < 0) {
		// Ensure salary is not 0, benefits can be 0 but not less than 0
		alert('Input an amount greater than 0');
	}
	// No empty input
	if (
		basicSalary == '' ||
		benefits == '' ||
		isNaN(basicSalary) ||
		isNaN(benefits) // maybe benefits can be 0 but user has to input 0
	) {
		alert('Input an amount!');
		return;
	}
	//tax can't be accessed bug
	let tax;
	// Data from KRA on how tax is calculated
	if (basicSalary < 24000) {
		tax = basicSalary * 0.1;
	} else if (basicSalary >= 24001 && basicSalary <= 32333) {
		tax = basicSalary * 0.25;
	} else if (basicSalary >= 32334 && basicSalary <= 500000) {
		tax = basicSalary * 0.3;
	} else if (basicSalary >= 500001 && basicSalary <= 800000) {
		tax = basicSalary * 0.325;
	} else if (basicSalary > 800000) {
		tax = basicSalary * 0.35;
	}
	// can't be accessed from top
	let taxableIncome = basicSalary + benefits;

	// logic to get the net salary based on gross and tax deducted
	let netSalary = taxableIncome - tax;

	document.getElementById('tax').innerText = 'Tax: ' + tax;
	document.getElementById('netSalary').innerText = 'Net Salary: ' + netSalary;
	console.log(`Net salary is ${netSalary} and tax to pay is ${tax}`);
}
