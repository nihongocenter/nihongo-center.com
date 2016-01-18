'use strict'

let Promise = require('bluebird')
let fs = Promise.promisifyAll(require('fs'))
let watch = require('node-watch')

let imageList = []

let updateImages = () => {
	console.log('Loading facility images...')
	fs.readdirAsync('images/facilities/').then(fileList => {
		imageList = fileList
		imageList.sort((a, b) => {
			return parseInt(a) > parseInt(b) ? 1 : -1
		})
	})
}

updateImages()
watch('../../images/facilities/', updateImages)

exports.get = (request, response) => {
	response.render({
		imageList
	})
}