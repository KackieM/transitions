var boxOne = document.getElementsByClassName("box")[0],
$boxTwo = $(".box:eq(1)");

document.getElementsByClassName("toggleButton")[0].oneclick = function() {
	if(this.innerHTML === "Play")
	{
		this.innerHTML = "Pause";
		boxOne.classList.add("horizTranslate");
	}	else {
		this.innerHTML = "Play";
		var computedStyle = window.getComputedStyle(boxOne).
		marginleft = computedStyle.getPropertyValue("margin-left");
	boxOne.style.marginleft = marginleft;
	boxOne.classList.remove("horizTranslate");

}
}

$(".toggleButton:eq(1)").on("click", function() {
	if($(this).html() === "Play")
	{
	$(this).html("Pause");
	$boxTwo.addClass("horizTranslate");
	} 	else {
	$(this).html("Play");
	var computedStyle = ShowTwo.css("margin-left");
	$boxTwo.removeClass("horizTranslate");
	$boxTwo.css("margin-left, computedStyle");

	}
});







}