function initDesktop() {
    const desktop = document.getElementById("desktop");

    for (let i = 1; i <= 25; i++) {
        const icon = document.createElement("div");
        icon.className = "app";
        icon.textContent = "App " + i;
        icon.onclick = () => openApp(i);
        desktop.appendChild(icon);
    }
}
