const app = document.getElementById("app");

fetch("core/terminal.html")
.then(r => r.text())
.then(html => {
    app.innerHTML = html;

    document.getElementById("commandInput")
    .addEventListener("keydown", e => {
        if (e.key === "Enter" && e.target.value.trim() === "Start") {
            loadBoot();
        }
    });
});

function loadBoot() {
    fetch("core/boot.html")
    .then(r => r.text())
    .then(html => {
        app.innerHTML = html;
        setTimeout(loadSetup, 2500);
    });
}

function loadSetup() {
    fetch("core/setup.html")
    .then(r => r.text())
    .then(html => {
        app.innerHTML = html;
        setTimeout(loadDesktop, 2000);
    });
}

function loadDesktop() {
    fetch("core/desktop.html")
    .then(r => r.text())
    .then(html => {
        app.innerHTML = html;
        initDesktop();
    });
}
