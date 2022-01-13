const faqOptions = document.querySelectorAll('.content__section__list__item')



faqOptions.forEach((option, key) => {
    option.addEventListener('click', () => {

        // ---------- maneira eficiente
        option.classList.toggle('active')

        // Compara o target do click com outra elemento ja selecionado e remove a classe
        // active do elemento que não é o target

        faqOptions.forEach((element, index) => {
            if (key !== index) {
                element.classList.remove('active')
            }
        })

        // ---------- maneira ineficiente

        // option.firstElementChild.classList.toggle('bold')

        // const optionDesc = option.lastElementChild
        // optionDesc.classList.toggle('active')

        // const optionImg = option.querySelector('.content__section__list__item__img')
        // optionImg.classList.toggle('rotate')
    })
})