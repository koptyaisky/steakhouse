		var itemsOne = document.getElementById("items_one")
		var a = document.getElementById("special_image")
		var img = document.createElement('img')
		itemsOne.onclick = function() {
			img.src = 'image/special_two.png'
			a.appendChild(img)
		}
		var itemsTwo = document.getElementById("items_two")
		itemsTwo.onclick = function() {
			img.src = 'image/special_three.png'
			a.appendChild(img)
		}
		var itemsThree = document.getElementById("items_three")
		itemsThree.onclick = function() {
			img.src = 'image/special_four.png'
			a.appendChild(img)
		}
		var itemsFour = document.getElementById("items_four")
		itemsFour.onclick = function() {
			img.src = 'image/special_five.png'
			a.appendChild(img)
		}
		var itemsFive = document.getElementById("items_five")
		itemsFive.onclick = function() {
			img.src = 'image/special_six.png'
			a.appendChild(img)
		}
		var itemsSix = document.getElementById("items_six")
		itemsSix.onclick = function() {
			img.src = 'image/special_one.png'
			a.appendChild(img)
		}