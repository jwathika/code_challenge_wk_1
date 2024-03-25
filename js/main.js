//alert('welcome');
// Calculate grades for students
function calculateGrade() {
	let marks = document.getElementById('marks').value;
	let grade;
	//ensure it's a number and within the range
	if (isNaN(marks) || marks < 0 || marks > 100) {
		$('#errorModal').modal('show');
		return;
	}
	if (marks == '') {
		//check if user inputs blank
		alert('Input marks!');
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
		'<b><p>Grade: ' + grade + '</p></b>';
	console.log(`${marks} is equal to ${grade}`);
}

//Speed calculator
function calculateSpeed() {
	const speedInput = document.getElementById('speedInput');
	const speed = parseInt(speedInput.value);

	if (isNaN(speed) || speed < 0) {
		$('#errorModal').modal('show');
		return;
	}
	if (speed == '') {
		//check if user inputs blank
		alert('Input speed!');
		return;
	}
	const speedLimit = 70;
	const kmPerDemeritPoint = 5;
	const pointsToSuspend = 12;

	if (speed <= speedLimit) {
		document.getElementById('result').innerHTML = '<b>OK</b>';
		console.log(`${speed} is okay`);
		return;
	}

	const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
	if (demeritPoints <= pointsToSuspend) {
		document.getElementById('result').innerText = 'License suspended!';
		alert('License suspended!');
	}
	if (demeritPoints <= pointsToSuspend) {
		document.getElementById('result').innerHTML =
			'<b>Points: </b>' + demeritPoints;
	}
}
