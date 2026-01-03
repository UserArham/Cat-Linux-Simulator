function openApp(id) {
    fetch("core/window.html")
    .then(r => r.text())
    .then(html => {
        document.body.insertAdjacentHTML("beforeend", html);

        document.getElementById("windowContent").textContent =
            `Cat Linux Application ${id}\nStatus: Running\nMode: 32-bit`;

        document.getElementById("close").onclick = () => {
            document.getElementById("window").remove();
        };
    });
}
