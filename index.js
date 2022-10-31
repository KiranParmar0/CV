var img = document.createElement("img");
img.src = "./assets/1.jpg";

function onBoneSelect(id) {
    const detailedInfo = document.getElementById("detailedInfo")
    detailedInfo.innerHTML = ""
    const detailedInfoText = document.createElement("p")
    detailedInfoText.id = "Infotext"
    if (id == "SW-1") {
        img.src = "./assets/1.jpg"
        detailedInfoText.textContent = " A survivorship curve is the graphical presentation of the number of individuals in a population that can be anticipated to survive to any specific age. There are three important types of survivorship curves Type I, Type II, and Type III. By observing these survivorship curves we can understand the maximum life expectancy of different types of organisms. "
    }
    else if (id == "SW-2") {
        img.src = "./assets/2.jpg"
        detailedInfoText.textContent = "Humans and most primates have a Type I survivorship curve. In a Type I curve, the majority of organisms die when they become old instead of dying young or middle-aged. Species with Type I curves generally have fewer numbers of offspring, and parental care is present."
    }
    else if (id == "SW-3") {
        img.src = "./assets/3.jpg"
        detailedInfoText.textContent = " Animals that are present in the type II curve have a constant threat from predators, hence they can die approximately equally at each age interval. Organisms may also have relatively few progenies, and parental care is also present. Example: Many bird species, rodents, ETC. "
    }
    else if (id == "SW-4") {
        img.src = "./assets/4.jpg"
        detailedInfoText.textContent = " In a Type III curve, very few organisms make it to old age most of them die younger. Species with this type of curve generally produce plenty of offspring at once. For example, a tree produces thousands of seeds. There is very less or no parental care. Examples: Trees, marine invertebrates, most fish, ETC."
    }

    detailedInfo.appendChild(detailedInfoText)
}

var src = document.getElementById("rendererParent");
src.appendChild(img);
const cards = document.getElementsByClassName("swiper-slide")

for (let i = 0; i < cards.length; i++) {
    const currentCard = cards[i]
    currentCard.onclick = () => {
        onBoneSelect(currentCard.id)
    }
}

//renderer the animation  in display 
