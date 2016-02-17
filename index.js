'use strict'

const app = require('aero')()
const cookieSession = require('cookie-session')

app.use(cookieSession({
	name: 'session',
	keys: ['nc-key-1', 'nc-key-2']
}))

app.use((request, response, next) => {
	if(request.query && request.query.language !== undefined)
		request.session.language = request.query.language

	next()
})

app.use((request, response, next) => {
	// Just to be safe
	if(!request.session)
		request.session = {}

	if(!request.session.language)
		request.session.language = 'en'

	// Translate function
	request.globals = {
		__: languages => {
			if(typeof languages !== 'object')
				return languages

			let translation = languages[request.session.language]

			if(translation === undefined)
				return '-'//languages.en

			return translation
		},
		md: require('marked')
	}

	next()
})

app.run()