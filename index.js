global.app = require('aero')()
const cookieSession = require('cookie-session')
const globalJSON = require('./global.json')
const marked = require('marked')
const locale = require('locale')
const bodyParser = require('body-parser')

// app.rewrite(function(request, response) {
// 	request.language = 'en'
//
// 	if(request.url[3] === '/')
// 		request.language = request.url.substring(1, 3)
// })

app.use(bodyParser.json())

app.use(cookieSession({
	name: 'session',
	keys: ['nc-key-1', 'nc-key-2']
}))

app.use((request, response, next) => {
	// Just to be safe
	if(!request.session)
		request.session = {}

	if(request.query && request.query.language !== undefined)
		request.session.language = request.query.language

	next()
})

app.use((request, response, next) => {
	if(!request.session.language) {
		const supportedLanguages = new locale.Locales(app.config.languages)
		const acceptLocales = new locale.Locales(request.headers["accept-language"])
		request.session.language = acceptLocales.best(supportedLanguages).toString().substring(0, 2)
	}

	request.globals = globalJSON

	// Translate function
	request.globals.__ = languages => {
		if(typeof languages !== 'object')
			return languages

		let translation = languages[request.session.language]

		if(translation === undefined)
			return '-'//languages.en

		return translation
	}

	request.globals.md = marked

	request.globals.navBar = function(main) {
		return main.pages.map(link => `<a href='${link.url}' class='sub-navigation-item ajax'><span class='glyphicon glyphicon-${link.icon}'></span><span>${request.globals.__(link)}</span></a>`).join('')
	}

	next()
})

app.run()
