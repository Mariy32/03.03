
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
// []()

// const item = document.querySelectorAll(`.dropdown-item`)
// item.forEach(item => {
//     item.classList.add(`super-dropdown`)
// });
// console.log(item)

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
// []()
// const el = document.querySelector(`.btn`)
// console.log(el)
// function addremove () {
//  if (el.classList.contains(".btn-secondary") === true) {
// console.log(el.classList.remove(`.btn-secondary`))
// } else {
// el.classList.add(`btn-secondary`)
// const el_secondary = document.querySelector(`.btn-secondary`)
// console.log(el_secondary)
// }
// }
// addremove(el)

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
// []()
// document.querySelectorAll('.menu .dropdown-menu').forEach(n => n.classList.remove('dropdown-menu'));

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
// []()
// const div_a = document.querySelector(`div`)
// const a = document.querySelector(`.dropdown`)
// a.insertAdjacentHTML('beforeend', '<a href="#">link</a>')

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
// []()
    // document.getElementById('dropdownMenuButton').id = 'superDropdown';

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
// []()
// const  drop1 = document.getElementById("dropdownMenuButton");
// drop1.dataset.data_dd = `3`
// console.log(drop1 )
// 7. Удалите атрибут type у элемента с классом "dropdown-toggle". 
// document.querySelector(`.dropdown-toggle`).removeAttribute("type");