//1hw
/*//Необходимо поочередно обратиться к каждому тэгу в нужном порядке, и вывести их содержимое в консоль, чтобы получилась осмысленная скороговорка.*/
let str1 = document.getElementById('string-1')//6
let str2 = document.getElementById('string-2')//3
let str3 = document.getElementById('string-3')//1
let str4 = document.getElementById('string-4')//5
let str5 = document.getElementById('string-5')//2
let str6 = document.getElementById('string-6')//4

console.log(`${str3.innerHTML}\n${str5.innerHTML}\n${str2.innerHTML}\n${str6.innerHTML}\n${str4.innerHTML}\n${str1.innerHTML}`)

//2hw
/*С помощью JS необходимо первым трем элементам задать красный цвет текста, а остальным трем - зеленый.*/

let elements = document.querySelectorAll('.element')

for (let i = 0; i < elements.length; i++) {
    if (i < 3){
        elements[i].style.color = 'red'
    }else {
        elements[i].style.color = 'green'
    }
}

//3hw
/*На странице есть контейнер
<ol id="todo-list"></ol>, необходимо с помощью цикла добавить в него пять задач (элементов <li>)
         с классом task и текстом, взятым из массива задач из пяти элементов:*/
let toDoContainer = document.getElementById('todo-list')
const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];

function renderIt(array) {
    toDoContainer.innerHTML = array.map((task)=>{
        return `<li>${task}</li>`
    }).join('')
}
renderIt(tasks)

//4hw
/*Вам необходимо с помощью JavaScript вставить после каждого тега <p> тег <hr>, для визуального отделения абзацев друг от друга.*/

let htmlP = document.querySelectorAll('p')

for (let i = 0; i < htmlP.length; i++) {
    let hr = document.createElement('hr')
    console.log('test')
    htmlP[i].appendChild(hr)
}


//5hw
/*Необходимо с помощью JavaScript удалить элемент "Cola 1.5 l" и заменить товар "Chocolate bar" на "Canned Fish", количеством 4 штуки.*/

//6hw
/*Напишите программу для создания списка задач, которые будет вводить пользователь:*/