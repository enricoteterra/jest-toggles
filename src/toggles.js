var local = "local"

function isEnabledFor (environments = []) {
    var NOT_FOUND = -1
    return !!environments
        .map((it) => window.location.hostname.indexOf(it))
        .some((it) => it !== NOT_FOUND)
}

module.exports = {
    newNavbar: isEnabledFor([local]),
    contactForm: false
}