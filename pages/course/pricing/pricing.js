let Humanize = require('humanize-plus')

exports.get = (request, response) => {
	response.render({
		intComma: Humanize.intComma
	})
}