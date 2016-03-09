let fs = require('fs')
let markdownTemplate = fs.readFileSync('pages/join/recruit/recruit.md', 'utf8')

// Remove IDs from the headings renderer to get valid HTML
let marked = require('marked')
let renderer = new marked.Renderer()
renderer.heading = (text, level) => `<h${level}>${text}</h${level}>`
marked.setOptions({
	renderer
})

exports.get = (request, response) => response.render({
	markdownTemplate,
	marked
})