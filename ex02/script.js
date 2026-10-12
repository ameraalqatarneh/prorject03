document.addEventListener("DOMContentLoaded", function () {
    let title = document.getElementById("title");
    let card = document.querySelector(".card");
    let statusElement = document.getElementById("status");

    title.textContent = "JavaScript Changed This Title";
    title.style.color = "purple";

    card.classList.add("active");

    statusElement.textContent = "Status: Active";
    statusElement.classList.add("active");
});