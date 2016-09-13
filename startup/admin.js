admin.on('layout loaded', () => {
	let menu = admin.layout.json.nav

	menu.push({
		url: '/news',
		title: 'News',
		icon: 'newspaper-o'
	})

	admin.loadPage('news', app.path('admin'))
	admin.loadPage('news/new', app.path('admin'))
})