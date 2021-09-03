'use strict';

const btn = document.querySelector('button');

btn.onclick = function() { // используем св-во DOM-дерева для событий 
    alert('Click'); // данный способ так же не применяется в реальных проектах,
}; //т.к. 
// при назначении еще одного обработчика первый не будет срабатывать, т.е. обработчик перезапишется
btn.onclick = function() {
    alert('First click');
};