const url = require('url')

exports.render = (request, render) => render({
	requestURL: url.parse(request.url).pathname,
	requestLanguage: request.session.language
})