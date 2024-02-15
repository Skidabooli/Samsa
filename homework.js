// // Задача. Дан массив с числами. Создайте из него новый массив, где останутся лежать только
// // положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая
// // параметром будет принимать число и возвращать true, если число положительное, и false -
// // если отрицательное.

// let array = [1, 2, 3, -1, -2, -3];
// function isPositive(num) {
//     if (num >= 0){
//     return true
//     } else{
//         return false
//     }      
// }
// function filterArray(arr) {
//     let newArray = []
//     for (let item of arr) {
//         if (isPositive(item)) {
//             newArray.push(item)
//         }
//     }
//     return newArray
// }
// console.log(filterArray(array))


// // Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и
// // меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange, которая
// // параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так -
// // пусть функция возвращает true, если не так - false.

// let array0 = [1, 27, 3, -16, -25, -300];
// let isNumberInRange = function(a) {
//     if (a > 0 && a < 10) return true;
//     else return false;
// }
// let newLimitedArray = (a) => {
//     let newArrey = []
//     for (i of a){
//         if (isNumberInRange(i)) newArrey.push(i);
//     }
//     return newArrey;
// }
// console.log(newLimitedArray(array0))


// // Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только
// // четные из этих чисел. Для этого используйте вспомогательную функцию isEven (even - это
// // четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если
// // четное - пусть функция возвращает true, если нечетное - false.
// let array1 = [10, 27, 3, -16, -25, -300];
// let isEven = (a) => {
//     if (a % 2 == 0) return true;
//     else return false;
// }
// let evanArrye = (i) => {
//     let newArrey = [];
//     for (el of i){
//         if (isEven(el)) newArrey.push(el);
//     } 
//     return newArrey;
// }
// console.log(evanArrye(array1))


// // 1. Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние
// // возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый).
// // Например. 33 - зрелый
// let age = (a) => a <= 17?"ребенок":a <= 30?"молодой":a <= 55?"зрелый":"старый";
// for (i = 1; i <= 100; i++) console.log(`${i} - ${age(i)}.`)


// // Создай новую функцию, в которую передаешь имя и возраст человека и
// // получаешь сообщение (Иван имеет возраст 44 и он зрелый). А также вызови
// // внутри своей функции, функцию из прошлого задания
// let userStatus = (a, b) => `${a} имеет возраст ${b} и он ${age(b)}`;
// console.log(userStatus("Олег", 35))


// // Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет имя и
// // возраст ([{name:Иван, age: 23},...]) и возвращает массим, где каждый элемент представляет
// // из себя строку &quot;Имя: Иван, возвраст: 23&quot;.
// let users = [{name: "Иван", age: 43}, {name: "Дмитрий", age: 63}, {name: "Татьяна", age: 33}];
// function sortedUser(users) {
//     let sortedArrey = [];
//     for (i of users) sortedArrey.push(`Имя: ${i.name}, возраст: ${i.age}`);
//     return sortedArrey;
// }
// console.log(sortedUser(users))


// // Напишите программу на JavaScript, которая принимает десять целых чисел как
// // массив и отображает большее
// let mass0 = [1, 12, 3, 9, 5, 0];
// let maxx = (a) => {
//     let maxx = a[0];
//     for (i of a){
//         if (maxx < i) maxx = i;
//     }
//     return maxx;
// }
// console.log(maxx(mass0));


// // Напишите программу на JavaScript, которая будет пробегать по числам от 0 до
// // 15.
// // Для каждого он будет проверять, является ли текущее число нечетным или
// // четным, и отображать сообщение на экране.
// function evenOrNotEven(a=0, b=15) {
//     for (;a <= b;a++){
//         if (a % 2 == 0) console.log(`${a} - четное.`);
//         else console.log(`${a} - нечетное.`);
//     }
// }
// evenOrNotEven();


// // Напишите программу, которая принимает два массива, один с именами студентов,
// // второй с одной оценкой, каждого студента
// // Проверяйте, что бы массивы были одинаковыми по количеству элементов
// // На выводе программа должна выдать среднюю оценку по студентам
// // И оценку каждого студента буквой: <60 - F, <70 - D, <80 - C, <90 - B, <100 -
// // A
// let students = ["Иван", "Игорь", "Наталья", "Вика", "Влад", "Пётр"];
// let scores = [90, 55, 100, 83, 71, 66];
// function scoreBalls(a) {
//     if (a < 60) return "F";
//     else if (a < 70) return "D";
//     else if (a < 80) return "C";
//     else if (a < 90) return "B";
//     else if (a <= 100) return "A";
// }
// function scoreStudent(a, b) {
//     if (a.length === b.length){
//         for (i = 0; i < a.length; i++){
//             console.log(`Студент ${a[i]} получил ${scoreBalls(b[i])}`)
//         }
//     }
//     else return "Неверное количество данных";
// }
// function averageRating(a) {
//     let rating = 0;
//     for (i of a) rating += i;
//     return (rating / a.length).toFixed(2);
// }
// scoreStudent(students, scores);
// console.log("Средний бал ысех студенто -", averageRating(scores))


// // Написать программу принимающую строчку, внутри которой есть несколько записей
// // вида &quot;$120&quot;, нужно вывести ВСЕ числа после доллара
// // Пример: &quot;Есть несколько товаров по $120 и $20 и $70 все они крутые&quot; - &gt; 120
// // 20 70
// let str1 = "Есть несколько товаров по $120 и $20 и $70 все они крутые";
// function onlyNumber(a) {
//     let str2 = [];
//     for (let i = 0; i < a.length; i ++){
//         if (a[i] == "$"){
//             str3 = a.slice(i);
//             str2.push(str3.slice(1, str3.indexOf(" ")));
//         } 
//     }
//     return str2;
// }
// console.log(...onlyNumber(str1))


// // 1. Напишите функцию, которая очищает массив от нежелательных
// // значений, таких как false, undefined, пустые строки, ноль, null.
// let originalArray = [1, null, "hello", 0, NaN, 42, "", undefined, 7];
// let cleanArray = (a) => {
//     let filteredArray = [];
//     for (let i = 0; i < a.length; i++) {
//         if (a[i]) {
//             filteredArray.push(a[i]);
//         }
//     }
//     return filteredArray;
// }
// console.log(filteredArray);


// // 2. Напишите функцию, которая убирает повторяющиеся значения.
// let a = [1, "dd", 3, 4, 3, 2, 1, "dd"];
// function uniqueArray(a){
//     let b = []
//     for (let i = 0; i< a.length; i++){
//         if (b.indexOf(a[i]) === -1) b.push(a[i]);
//     }
//     return b;
// }
// console.log(uniqueArray(a))