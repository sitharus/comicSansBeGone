var handleMessage = function(event) {
    var stylesheets = document.styleSheets
    var replace = []
    if (event.message.replaceComicSans) replace.push('comic sans ms')
    if (event.message.replaceArial) replace.push('arial')
    var r = new RegExp("(" + replace.join("|")+")", "i")
    
    var replaceFonts = function(el) {
        if (el && el.style) {
            if (r.test(el.style.fontFamily)) {
                el.style.fontFamily = el.style.fontFamily.replace(r, event.message.replaceWith)
            }
            if (r.test(el.style.font)) {
                el.style.font = el.style.font.replace(r, event.message.replaceWith)
            }
        }
    }

    for(var i =0; i < stylesheets.length; i++) {
        var rules = stylesheets[i].cssRules
        if (rules) {
            for (var j = 0; j < rules.length; j++) {
                replaceFonts(rules[j])
            }
        }
    }

    var styledElements = document.querySelectorAll("*[style*='font']")
    for (var i = 0; i < styledElements.length; i++) {
        var s = styledElements[i]
        replaceFonts(s)
    }

    var fontTags = document.getElementsByTagName("font");
    for (var i = 0; i < fontTags.length; i++) {
        var f = fontTags[i]
        if (r.test(f.getAttribute("face"))) {
            f.setAttribute("face", f.getAttribute("face").replace(r, event.message.replaceWith))
        }
    }
}

safari.self.addEventListener("message", handleMessage, false);
safari.self.tab.dispatchMessage("load-settings", "")