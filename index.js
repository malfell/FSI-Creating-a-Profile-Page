let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let container = document.createElement('div')
container.setAttribute('class', 'dog-content')
content.append(container)

let image = document.createElement('img')
image.setAttribute('class', 'dog-image')
image.src = './assets/rizzo.jpg'
container.append(image)

let descriptionContain = document.createElement('div')
descriptionContain.setAttribute('class', 'dog-details')
container.append(descriptionContain)

let description = document.createElement('h3')
description.textContent = 'Description:'
descriptionContain.append(description)

let paragraph = document.createElement('p')
paragraph.textContent = `This gentle dog is aloof toward her owner, and never comes when called.
She always acts as though any stranger she meets will harm her,
and dislikes other animals.`
descriptionContain.append(paragraph)

let feeding = document.createElement('h3')
feeding.textContent = 'Feeding Times:'
descriptionContain.append(feeding)

let list = document.createElement('ul')
let time1 = document.createElement('li')
time1.textContent = '9:00 am'
let time2 = document.createElement('li')
time2.textContent = '12:00 pm'
let time3 = document.createElement('li')
time3.textContent = '5:00 pm'

list.append(time1, time2, time3)
descriptionContain.append(list)

