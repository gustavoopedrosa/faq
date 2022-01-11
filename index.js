const faqOptions = document.querySelectorAll('.content__section__list__item')



faqOptions.forEach((option) => {
    option.addEventListener('click', () => {

        // ---------- maneira eficiente
        option.classList.toggle('active')

        // ---------- maneira trabalhosa

        // option.firstElementChild.classList.toggle('bold')

        // const optionDesc = option.lastElementChild
        // optionDesc.classList.toggle('active')

        // const optionImg = option.querySelector('.content__section__list__item__img')
        // optionImg.classList.toggle('rotate')
    })
})