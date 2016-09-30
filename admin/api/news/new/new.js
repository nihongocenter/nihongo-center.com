let shortid = require('shortid')

exports.post = function*(request, response) {
	let user = request.user

	if(!user) {
		response.writeHead(404)
		response.end()
		return
	}

	let article = request.body

	article.id = shortid.generate()
	article.created = article.edited = new Date().toISOString()
	article.author = user.id

	yield app.db.set('Articles', article.id, article)

	response.end(article.id)
}