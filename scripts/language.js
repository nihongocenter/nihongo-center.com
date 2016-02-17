window.changeLanguage = language => {
	let newURL = window.location.pathname + '?language=' + language
	
	$.get(newURL).then(response => {
		document.open()
		document.write(response)
		document.close()
	})
}