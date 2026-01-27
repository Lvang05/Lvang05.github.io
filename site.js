const greetingElement = document.querySelector('#welcome')
const h1 = document.createElement('h1')
greetingElement.appendChild(h1)

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?

const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?

const isEvening = hours >= 17 || hours < 4 // is it evening?

if (isMorning) {
    h1.textContent = "Good Morning!";
} else if (isAfternoon) {
    h1.textContent = "Good Afternoon!";
} else {
    h1.textContent = "Good Evening!";
}

const key = "It's a secret to everybody."
localStorage.setItem(key, 'Hello, how are you doing today?')