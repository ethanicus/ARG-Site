function replaceCurrentLoc() {
    // Get the current page's URL
    var currentUrl = window.location.href;

    // Get the base URL of the site
    var baseUrl = window.location.protocol + "//" + window.location.host;

    // Replace the base URL with an empty string to get the relative file path
    var relativePath = currentUrl.replace(baseUrl, "");

    // Remove the file name from the relative path
    var lastSlashIndex = relativePath.lastIndexOf("/");
    relativePath = relativePath.substring(0, lastSlashIndex + 1);

    // Replace all instances of "CURRENTLOC" with the relative file path
    document.body.innerHTML = document.body.innerHTML.replace(/CURRENTLOC/g, relativePath);
}

window.addEventListener('load', () => {
    replaceCurrentLoc();
});