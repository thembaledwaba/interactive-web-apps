const MIN_NUMBER = -10
const MAX_NUMBER = +10
const STEP_AMOUNT = 5

const number = document.querySelector('[data-key="number"]')
const subract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')

const subractHandler = () => {
const newValue = parseInt(number.value) - STEP_AMOUNT    
number.value = newValue

if (add.disabled === true){
    add.disabled = false
}

if (newValue <= MIN_NUMBER){
    subract.disabled = true
}


}

const addtHandler = () => {
    const newValue = parseInt(number.value) +  STEP_AMOUNT    
    number.value = newValue

    if (subract.disabled === true){
        subract.disabled = false
    }

    if (newValue >= MAX_NUMBER){
        add.disabled = true
    }
  

}

subract.addEventListener('click', subractHandler )

add.addEventListener('click', addtHandler)