var stylesheets = document.styleSheets
for(var i =0; i < stylesheets.length; i++) {
    var rules = stylesheets[i].cssRules
    for (var j = 0; j < rules.length; j++) {
        var rule = rules[j]
        if (/comic sans ms/i.test(rule.style.fontFamily)) {
            rule.style.fontFamily = 'Helvetica'
        }
        if (/comic sans ms/i.test(rule.style.font)) {
            rule.style.font = rule.style.font.replace(/comic sans ms/i, "Helvetica")
        }
    }
}