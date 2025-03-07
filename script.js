let phonenav = document.querySelector(".navigation .phonenav"),
    navigation = document.querySelector(".nav"),
    social = document.querySelectorAll(".holder .social svg");

social.forEach(function (e) {
    e.addEventListener("mouseover", function () {
        e.firstElementChild.attributes[0].value = "hsl(180, 66%, 49%)"
    })
    e.addEventListener("mouseleave", function () {
        e.firstElementChild.attributes[0].value = "white"
    })
})

phonenav.addEventListener("click", function (e) {
    e.stopPropagation();
    navigation.classList.toggle("active");
})

navigation.addEventListener("click", e => {
    e.stopPropagation();
})

document.onclick = function (e) {
    if (e.target !== navigation && e.target !== phonenav) {
        if (navigation.classList.contains("active")) {
            navigation.classList.remove("active")
        }
    }
}