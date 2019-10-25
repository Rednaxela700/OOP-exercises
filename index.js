
class Render {
    static renderList(listToRender, elementToRender) {
        const element = document.querySelector(elementToRender);
        listToRender.map((currentElement) => {
            console.log(currentElement.fullName);
            element.innerHTML += `
<div class="student__row">
<div class="student__item">${currentElement.fullName}</div>
<div class="student__item">${currentElement.accountNumber}</div>
</div>`
        })
    }
}

// Render.renderList(peopleList, '.student__container')