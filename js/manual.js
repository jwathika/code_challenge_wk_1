function manual() {
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
