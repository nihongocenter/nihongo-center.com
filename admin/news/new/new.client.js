let init = () => {
	let md = window.markdownit()
	let result = md.render('# markdown-it rulezz!')

	$('preview').innerHTML = result
}

if(!window.markdownLoaded) {
	let script = document.createElement('script')
	script.src = 'https://cdnjs.cloudflare.com/ajax/libs/markdown-it/7.0.1/markdown-it.min.js'
	script.onload = init
	document.head.appendChild(script)

	window.markdownLoaded = true
} else {
	init()
}