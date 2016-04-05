const webHook = 'https://hooks.slack.com/services/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'

let $ = Promise.promisifyAll(require('request'))

exports.get = (request, response) => {
	response.render({})
}

exports.post = function*(request, response) {
	let student = request.body

	if(!student || !student.email || !student.name)
		return response.end()

	yield $.postAsync({
		url: webHook,
		body: JSON.stringify({
			text: `<mailto:${student.email}|${student.email}>\n\`\`\`${JSON.stringify(student, null, '\t')}\`\`\``
		})
	})
	response.end()
}