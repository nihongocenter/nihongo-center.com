exports.get = function*(request, response) {
	if(!request.params[0])
		return response.render()

	let article = yield app.db.get('Articles', request.params[0])

	response.render({
		article
	})
}