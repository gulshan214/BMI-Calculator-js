function cmtomtrsq(heightInCm){  // made this function just for fun, no offence :)
    const convertedHeight = (heightInCm / 100)**2
    console.log(`converted height is ${convertedHeight}`)
    return convertedHeight
}

function bmiCalculator(heightInput , weightInput){
 const heightInMSq = cmtomtrsq(heightInput)
 const BMI = (weightInput / heightInMSq).toFixed(1)
 console.log(`Your BMI is ${BMI}`)
 return BMI
}

const form  = document.querySelector('form')

form.addEventListener('submit' , (e)=> {

    e.preventDefault()
    const heightInput = parseInt(document.querySelector("#height").value)
    const weightInput = parseInt(document.querySelector("#weight").value)
    console.log(heightInput)
    console.log(weightInput)

    const result = document.querySelector("#results")
    result.innerHTML =  `<p> Your BMI is ${bmiCalculator(heightInput , weightInput)}  <p> `


})



