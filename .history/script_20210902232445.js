'use strict';

const btn = document.querySelector('button');

/*btn.onclick = function() { // используем св-во DOM-дерева для событий 
    alert('Click'); // данный способ так же не применяется в реальных проектах,
}; //т.к. 
// при назначении еще одного обработчика первый не будет срабатывать, т.е. обработчик перезапишется
btn.onclick = function() {
    alert('First click');
}; // и будет срабатывать только последний обработчик
// и еще не получится удалить такой обработчик событий во время выполнения программы
*/ //

/*
btn.addEventListener('click', () => { //сначала происходит действие и затем callback функция
    alert('Click');
});

btn.addEventListener('click', () => { //повторное использование элемента DOM-дерева со слушателем событий вполне возможна и отрабатывает как нужно, последовательно(правило JS)
    alert('Two');
});

btn.addEventListener('mouseenter', () => { //выводит сообщение в консоль при наведении ползователем мышью на кнопку
    console.log('Hover'); //т.е. срабатывает событие наведения мышки на элемент
});
*/

/*btn.addEventListener('click', (event) => {
    //console.log(event); //выводит консоль всю инфом-ю об элементе и его свойствах, при помощи которых можно взаимодействовать с элементом
    console.log(event.target); //выведет в консоль тот элемент, с которым взаимодействуем
    event.target.remove(); //удалит элемент при клике мышью
});*/

//Удаление обработчика событий
let i = 0;
const deleteElement = (event) => {
    console.log(event.target);
    i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement);
    }
};

btn.addEventListener('click', deleteElement);
// после первого клика мышкой в консоль выводится элемент с которым
//идет взаимодействие, и счетчик i страновится раным 1
//после чего по условию происходит удаление обработчика событий
//и консоль уже больше ничего не выводится после клика мышкой

//Всплытие событий - действие обработчика событий сначала срабатывает на самом вложенном 
//элементе, затем на родителе, и поднимается выше по иерархии 
//DOM-дерева

//Отмена дейтвий в браузере:

//1) вернуть в обработчике события в конце функции 
//return false(устаревший метод, почти не применяется)

//2) использование метода preventDefault, который существует 
//у объекта события
const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault(); //отмена стандартного поведения ставится в начале функции

    console.log(event.target);
}); //в обработчик события добавили отмену стандартного поведения браузера
//и при нажатии на мышь теперь браузер не переходит по ссылке
//а выводит элемент с ссылкой в консоль