let init = () => {
	const md = window.markdownit()

	const preview = $('preview')
	const articleTitle = $('article-title')
	const articleText = $('article-text')
	const publishButton = $('publish')

	publishButton.onclick = function() {
		$.post('/api/news/new', {
			title: articleTitle.value,
			text: articleText.value
		}).then(() => {
			articleTitle.disabled = true
			articleText.disabled = true
			publishButton.disabled = true
			console.log('Published.')
		})
	}

	if(localStorage['article-title'])
		articleTitle.value = localStorage['article-title']

	if(localStorage['article-text'])
		articleText.value = localStorage['article-text']

	let render = function() {
		if(this && this.id)
			localStorage[this.id] = this.value

		preview.innerHTML = md.render(`## ${articleTitle.value}\n\n${articleText.value}`)
	}

	articleTitle.onkeyup = render
	articleText.onkeyup = render

	// Render text from localStorage
	render()
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