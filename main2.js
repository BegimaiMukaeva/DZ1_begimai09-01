
//4hw
/*Вам необходимо с помощью JavaScript вставить после каждого тега <p> тег <hr>, для визуального отделения абзацев друг от друга.*/

let htmlP = document.querySelectorAll('p')

for (let i = 0; i < htmlP.length; i++) {
    let hr = document.createElement('hr')
    htmlP[i].appendChild(hr)
}


//5hw
/*Необходимо с помощью JavaScript удалить элемент "Cola 1.5 l" и заменить товар "Chocolate bar" на "Canned Fish", количеством 4 штуки.*/

let drinks = document.querySelectorAll('.item')

let div = document.createElement('div')
div.innerText = 'Canned Fish'
let span = document.createElement('span')
span.innerText =  ' x 4'

div.appendChild(span)
drinks[1].remove()
drinks[4].replaceWith(div)



//6hw
/*Напишите программу для создания списка задач, которые будет вводить пользователь:*/
// let ul = document.createElement('ul')
// while (true){
//     let task = prompt('sdsdsd')
//     let li  = document.createElement('li')
//     li.innerText = task
//     ul.append(li)
//     document.body.append(ul)
//     if (task === null){
//         break;
//     }
// }




