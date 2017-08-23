let fs = require('fs')

let intro = {
	en: fs.readFileSync('pages/about/intro.en.md', 'utf8'),
	ja: fs.readFileSync('pages/about/intro.ja.md', 'utf8'),
	fr: fs.readFileSync('pages/about/intro.fr.md', 'utf8'),
	id: fs.readFileSync('pages/about/intro.id.md', 'utf8'),
	'zh-hant': fs.readFileSync('pages/about/intro.zh-hant.md', 'utf8'),
	th: fs.readFileSync('pages/about/intro.th.md', 'utf8')
}

exports.get = (request, response) => response.render({
	language: request.session.language,
	intro
})
