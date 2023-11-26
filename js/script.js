
(function(d){
	const closeMenu = d.querySelector("#closeMenu"),
		navigation = d.querySelector("#navigation"),
		openMenu = d.querySelector("#openMenu")

	openMenu.addEventListener('click', function(e){
		e.preventDefault()

		console.log("Listo para cerrar")
		closeMenu.style.setProperty("display", "inline-block");
		navigation.style.setProperty("left", "0px");
	})

	closeMenu.addEventListener("click", function(e){
		e.preventDefault()
		navigation.style.setProperty("left", "-1000px");
		closeMenu.style.setProperty("display", "none");
	})

})(document)