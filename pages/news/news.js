exports.get = function*(request, response) {
	let news = yield app.db.all('Articles')

	response.render({
		news
	})
}