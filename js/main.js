//alert('welcome');
// Calculate grades for students
function calculateGrade() {
	// receive input from the id="marks" in HTML
	let marks = document.getElementById('marks').value;
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
	const speedInput = document.getElementById('speedInput');
	const speed = parseInt(speedInput.value);
	// ensure speed in an Int and not less than 0
	if (isNaN(speed) || speed < 0) {
		// show the information modal
		$('#errorModal').modal('show');
		return;
	}
	if (speed > 300) {
		alert('Use realistic values');
	}
	if (speed == '') {
		//check if user inputs blank
		alert('Input speed!');
		return;
	}

	// constants which can't be changed
	const speedLimit = 70;
	const kmPerDemeritPoint = 5;
	const pointsToSuspend = 12;

	// logic for calculating speed and returning feedback to user
	if (speed <= speedLimit) {
		document.getElementById('result').innerHTML = '<b>OK</b>';
		console.log(`${speed} is okay`);
		return;
	}
	// ensure limit is not exceeded
	const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
	// if so, suspend license and deduct points
	if (demeritPoints <= pointsToSuspend) {
		document.getElementById('result').innerText = 'License suspended!';
		alert(`License suspended! at ${speed} km/hr`);
	}
	if (demeritPoints <= pointsToSuspend) {
		document.getElementById('result').innerHTML =
			'<b>Points: -</b>' + demeritPoints;
	}
}

//salary calculator
function calculateSalary() {
	// Get inputs
	// declaring variables
	let taxableIncome = basicSalary + benefits;
	let tax;
	let basicSalary = parseFloat(document.getElementById('basicSalary').value);
	let benefits = parseFloat(document.getElementById('benefits').value);
	if (basicSalary <= 0 || benefits < 0) {
		// Ensure salary is not 0, benefits can be 0 but not less than 0
		alert('Input an amount greater than 0');
	}
	// No empty input
	if (
		basicSalary == '' ||
		benefits == '' ||
		isNaN(basicSalary) ||
		isNaN(benefits)
	) {
		alert('Input an amount!');
		return;
	}
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

	// logic to get the net salary based on gross and tax deducted
	let netSalary = taxableIncome - tax;

	document.getElementById('tax').innerText = 'Tax: ' + tax;
	document.getElementById('netSalary').innerText = 'Net Salary: ' + netSalary;
}
