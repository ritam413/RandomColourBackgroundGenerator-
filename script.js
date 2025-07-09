const clickmeBtn = document.getElementById('ClickMeBtn')
const backGround = document.getElementById('background')
const backgroundColourName = document.getElementById('backgroundColourName')

const hexColourAfter10 = {
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
}

function colourGenerator() {
    let first = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
    let secound = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
    for (const key in hexColourAfter10) {
        if (first == key) {
            first = hexColourAfter10[key]
        }
    }
    for (const key in hexColourAfter10) {
        if (secound == key) {
            secound = hexColourAfter10[key]
        }
    }

    return (first.toString() + secound.toString())
}


clickmeBtn.addEventListener('click', () => {
    console.log('I am clicked ')
    const redValue = `${colourGenerator()}`
    console.log(`The Value of the Red colour is :${redValue}`)
    const greenValue = `${colourGenerator()}`
    console.log(`The Value of the Green colour is :${greenValue}`)
    const blueValue = `${colourGenerator()}`
    console.log(`The Value of the Blue colour is :${blueValue}`)

    const colourName = `#${redValue}` + `${greenValue}` + `${blueValue}`

    console.log(colourName)
    backgroundColourName.innerHTML = `BackGround Colour : ${colourName}`
    backGround.style = `background-color: ${colourName} `
})