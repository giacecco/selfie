var switchColour = function (colour) {
	$("#frontImage").attr("src", colour ? "colour.png" : "desaturated.png");
}

var switchImage = function () {
	$("#backgroundTd").attr("background", $("#imageSource").val());
}