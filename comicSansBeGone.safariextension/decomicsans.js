var stylesheets = document.styleSheets
var cs = /comic sans ms/i
var replaceComicSans = function(el) {
    if (el && el.style) {
        if (cs.test(el.style.fontFamily)) {
            el.style.fontFamily = el.style.fontFamily.replace(cs, 'Helvetica')
        }
        if (cs.test(el.style.font)) {
            el.style.font = el.style.font.replace(cs, "Helvetica")
        }
    }
}

for(var i =0; i < stylesheets.length; i++) {
    var rules = stylesheets[i].cssRules
    for (var j = 0; j < rules.length; j++) {
        replaceComicSans(rules[j])
    }
}

var styledElements = document.querySelectorAll("*[style*='font']")
for (var i = 0; i < styledElements.length; i++) {
    var s = styledElements[i]
    replaceComicSans(s)
}

var fontTags = document.getElementsByTagName("font");
for (var i = 0; i < fontTags.length; i++) {
    var f = fontTags[i]
    if (cs.test(f.getAttribute("face"))) {
        f.setAttribute("face", f.getAttribute("face").replace(cs, "Helvetica"))
    }
}