exports.render = (request, render) => render({
	requestURL: request.url,
	requestLanguage: request.session.language
})