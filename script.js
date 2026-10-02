/* ================= ENTER GARDEN ================= */

function enterGarden() {

    document
        .getElementById("home")
        .classList
        .add("hidden");

    document
        .getElementById("garden")
        .classList
        .remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



/* ================= OPEN BOUQUET ================= */

function openBouquet(id) {

    document
        .getElementById("garden")
        .classList
        .add("hidden");

    document
        .querySelectorAll(".page")
        .forEach(page => {
            page.classList.add("hidden");
        });

    document
        .getElementById(id)
        .classList
        .remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



/* ================= BACK TO GARDEN ================= */

function backToGarden() {

    document
        .querySelectorAll(".page")
        .forEach(page => {
            page.classList.add("hidden");
        });

    document
        .getElementById("final")
        .classList
        .add("hidden");

    document
        .getElementById("garden")
        .classList
        .remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



/* ================= ENVELOPE ================= */

function removeRibbon() {

    const container =
        document.getElementById(
            "envelopeContainer"
        );

    if (
        container.classList.contains(
            "letter-only"
        )
    ) {
        return;
    }

    container.classList.add("open");

    setTimeout(() => {

        container.classList.add(
            "letter-only"
        );

    }, 1100);
}



/* ================= FLIP CARDS ================= */

function flipCard(card) {

    card.classList.toggle("flipped");

}



/* ================= FINAL PAGE ================= */

function showFinal() {

    document
        .getElementById("garden")
        .classList
        .add("hidden");

    document
        .querySelectorAll(".page")
        .forEach(page => {
            page.classList.add("hidden");
        });

    document
        .getElementById("final")
        .classList
        .remove("hidden");

    createHearts();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



/* ================= FLOATING HEARTS ================= */

function createHearts() {

    const container =
        document.getElementById(
            "hearts-container"
        );

    container.innerHTML = "";

    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "♡";

        heart.style.position =
            "fixed";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.top =
            Math.random() * 100 + "%";

        heart.style.color =
            "#e8aeb4";

        heart.style.opacity =
            Math.random() * .6;

        heart.style.fontSize =
            (
                12 +
                Math.random() * 25
            ) + "px";

        heart.style.pointerEvents =
            "none";

        heart.style.zIndex =
            "10";

        heart.style.animation =
            `heartbeat ${
                1 + Math.random() * 2
            }s infinite`;

        container.appendChild(heart);
    }
}