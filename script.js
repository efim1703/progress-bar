const circle = document.querySelector('.progress-ring__circle')
const progressCircle = document.querySelector('.progress-circle')
const radius = circle.r.baseVal.value
const circumference = 2 * Math.PI * radius

circle.style.strokeDasharray = `${circumference} ${circumference}`
circle.style.strokeDashoffset = circumference

const setProgress = (percent) => {
    const offset = circumference - percent / 100 * circumference
    circle.style.strokeDashoffset = offset
}

const progressValue = document.querySelector('.progress-value')
setProgress(progressValue.value)
progressValue.addEventListener('change', (event) => {
    let value = event.target.value
    if (value <= 0) {
        value = 0
    }
    if (value >= 100) {
        value = 100
    }
    setProgress(value)
})

const checkboxAnimate =  document.querySelector('.progress-checkbox._animate > input')
checkboxAnimate.addEventListener('change', () => progressCircle.classList.toggle('animation-rotation'))

const checkboxHide =  document.querySelector('.progress-checkbox._hide > input')
checkboxHide.addEventListener('change', () => progressCircle.classList.toggle('animation-hide'))