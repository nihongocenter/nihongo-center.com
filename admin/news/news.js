exports.get = function*(request, response) {
	let user = request.user
	let news = yield app.db.all('News')

	response.render({
		user,
		news
	})
}