function loadTemplate() {
    fetch('template.html')
        .then(response => response.text())
        .then(data => {
            // create a new div element with a unique ID to hold the template content
            const template = document.createElement('div');
            template.id = 'template-content';
            template.innerHTML = data;
            // insert the template into the page
            document.body.appendChild(template);

            // get the source and target divs by ID
            const source = document.getElementById('page-content');
            const target = document.getElementById('content');
            if (source && target) {
                target.innerHTML = source.innerHTML;
                source.remove();
            }

            // show the new content
            const mainBody = document.querySelector('html');
            if (mainBody) {
                mainBody.style.opacity = "100%";
            }
        });
}

// load the template on page load
document.addEventListener('DOMContentLoaded', loadTemplate);
