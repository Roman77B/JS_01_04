// 4.1. Написать функцию, преобразующую число в объект. 
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function catNum () {
  let a = prompt ("Введите целое число")
  if (isNaN (a) == true || a [0] == 0) { // проверка на ввод целого числа 
    console.log (a + " - это не подходящее число")
  } else { 
    let obj = {} // создаем объект
    for (let i = a.length - 1, j = 0; i >= 0; i--, j++) { // динамически добавляем свойства 0, 1, 2... разряд
      obj [j + " разряд"] = a [i] * Math.pow (10, j)
    }
  return obj // вернуть объект
  }
}

// 4.2. Реализовать игру "Быки и коровы" ( https://ru.wikipedia.org/wiki/%D0%91%D1%8B%D0%BA%D0%B8_%D0%B8_%D0%BA%D0%BE%D1%80%D0%BE%D0%B2%D1%8B)

// функция запуска игры
function play () {
  let counter = 10
  let play = true
  let goal = mindNumber ()
  console.log (`загадали ${goal}`) // отладка
  while (play) {
    if (counter >= 1) {
    console.log (counter) 
    // здесь угадываем
    play = check (goal)
    if (play === false) {
      console.log ("Вы выиграли 1 000 $")
    } else {
      counter--
    }
    } else {
      play = false
      console.log ("Вы проиграли(")
    }
  }
}

// функция сравнивает загаданное число с вводимыми вариантами и выдает true, если не угадано число, или false, если угадано
function check (g) {
  let bulls = 0
  let cows = 0
  let user = [...prompt ("Введите число")]
  
  for (let [i, val] of user.entries()) {
    //console.log (i + ' ' + val + '   g[i]=' + g [i])  // отладка
    if (g [i] === +val) {
       bulls++
    } else if (g.includes (+val)) { 
       cows++
    }
  }

  console.log (`ваш ответ: ${user} bulls: ${bulls} cows: ${cows}`)
  return bulls === 4 ? false : true
}

// придумываем 4 знач. число
function mindNumber () {
  let a = []
  while (a.length < 4) {
    let nmb = randomize ()
    if (!a.includes (nmb)) {
      //console.log(nmb) // отладка
      a.push(nmb)
    }
  }
  return a
}

// функцию генерации числа выносим отдельно, как учили
function randomize () {
  return Math.floor (Math.random () * 10)  
}