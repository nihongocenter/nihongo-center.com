let fs = require('fs')
let markdownTemplate = fs.readFileSync('pages/join/recruit/recruit.md', 'utf8')

exports.get = (request, response) => response.render({
	markdownTemplate
})