var qs = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=');
        if (p.length != 2) continue;
        b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));

var updateLink = function () {
    $("#fullUrl").attr("href", "http://www.digitalcontraptionsimaginarium.co.uk/selfie/?background=" + encodeURIComponent($("#imageSource").val()) + "&bnw=" + $('#radioBnw').prop('checked'));
}

var switchColour = function () {
    updateLink();
	$("#frontImage").attr("src", $('#radioBnw').prop('checked') ? "desaturated.png" : "colour.png");
}

var switchImage = function () {
    updateLink();
	$("#backgroundTd").attr("background", $("#imageSource").val());
}