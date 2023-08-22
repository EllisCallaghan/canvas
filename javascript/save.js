function downloadImage(data, filename) {
	var a = document.createElement('a')
	a.href = data
	a.download = filename
	document.body.appendChild(a)
	a.click()
}

let savebutton = document.getElementById('save')

savebutton.addEventListener('click', () => {
	var canvas = document.querySelector('.canvas')

	var dataURL = canvas.toDataURL('image/png', 1.0)
	downloadImage(dataURL, 'my-canvas.png')
})
