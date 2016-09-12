exports.get = function*(request, response) {
	let news = yield app.db.all('News')

	response.render({
		news
	})
}