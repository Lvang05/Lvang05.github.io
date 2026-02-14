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

const urls = [
    'https://media.pff.com/2025/08/Minnesota-Vikings-scaled.jpg?w=150&h=132',
    'https://atozsports.com/.image/w_3840,q_auto:good,c_limit/Mzk6MDAwMDAwMDAwMzk2NTQ5/usatsi_28055012.jpg?arena_f_auto',
    'https://www.nbc.com/sites/nbcblog/files/2025/09/jj-mccarthy-minnesota-vikings-1.jpg',
    'https://media.pff.com/2026/01/Justin-Jefferson-Week-18-scaled.jpg?w=150&h=132',
    'https://static01.nyt.com/athletic/uploads/wp/2026/01/04134452/GettyImages-2254635398-scaled.jpg'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()


const nextButton = document.querySelector('#next')
nextButton.addEventListener('click', () => {
    currentImage++
    showImages()
})

const prevButton = document.querySelector('#prev')
prevButton.addEventListener('click', () => {
    currentImage--
    showImages()
})

setInterval(() => {
    currentImage++
    showImages()
}, 5000)