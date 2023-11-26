
(function(d){
	const closeMenu = d.querySelector("#closeMenu"),
		navigation = d.querySelector("#navigation"),
		openMenu = d.querySelector("#openMenu"),
		mediaQuery = window.matchMedia('(min-width: 980px)')

	openMenu.addEventListener('click', function(e){
		e.preventDefault()

		console.log("Listo para cerrar")
		closeMenu.style.setProperty("display", "inline-block");
		navigation.style.setProperty("left", "0px");
		if (mediaQuery.matches) {
		  closeMenu.style.setProperty("display", "none");
		}
	})

	closeMenu.addEventListener("click", function(e){
		e.preventDefault()
		navigation.style.setProperty("left", "-1000px");
		closeMenu.style.setProperty("display", "none");
	})




})(document)