'use strict'

let app = require('aero')()

app.use((request, response, next) => {
	request.globals = {
		__: languages => languages['en']
	}
	next()
})

app.run()