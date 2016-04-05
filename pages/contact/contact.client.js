window.sendStudentMessage = function() {
	let student = {}

	let textFields = $.content.querySelectorAll('input')
	for(let i = 0; i < textFields.length; i++) {
		let textField = textFields[i]
		student[textField.id] = textField.value
	}

	let selections = $.content.querySelectorAll('select')
	for(let i = 0; i < selections.length; i++) {
		let select = selections[i]
		student[select.id] = select.value
	}

	student.message = $('message').value

	console.log(student)

	$.post('/contact', student).then(() => {
		alert('Thank you for your message. We\'ll get back to you soon!')
	})
}