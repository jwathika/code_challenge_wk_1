// Manual for new users incase they have enquiries
function gradeManual() {
	let manualContent = '<p><strong>How we grade our students: </strong></p><ul>';

	const grades = [
		{ range: '0 - 39', grade: 'E' },
		{ range: '40 - 49', grade: 'D' },
		{ range: '50 - 59', grade: 'C' },
		{ range: '60 - 79', grade: 'B' },
		{ range: '80 - 100', grade: 'A' },
	];

	grades.forEach(({ range, grade }) => {
		manualContent += `<li> ${range}: ${grade}</li>`;
	});

	manualContent += '</ul>';

	document.getElementById('manualBody').innerHTML = manualContent;

	$('#manualModal').modal('show');
}

function speedManual() {
	let manualContent = '<p><b>How speed safety is calculated: </p></b>';
	const speed = [
		{
			range: '0-70',
			speed: 'Ok',
		},
		{
			range: '70-150',
			speed: 'License Suspended and points deducted',
		},
		{
			range: '360-1000',
			speed: 'Unrealistic',
		},
	];
	speed.forEach(({ range, speed }) => {
		manualContent += `<li> ${range}: ${speed}</li>`;
	});
	manualContent += '</ul>';

	document.getElementById('manualBody').innerHTML = manualContent;

	$('#manualModal').modal('show');
}

//https://www.aren.co.ke/payroll/taxrates.htm
function salaryManual() {
	pass;
	//will be redirected to KRA website
}
