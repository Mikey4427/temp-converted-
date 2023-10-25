// creat function for converted temp
const convertToTemp = (temp) => {
    return (temp - 32) * 5/9 
}

const createMessage = (temp) => {
    let message = ``;
    const numTemp = temp * 1

    if(temp < 40) {
        message = `thats cold`;
    }
        if (temp > 40) {
            message = `thats hot`;
        }
    
    console.log(message)
}

// creat promt to input temp
const inputTemp = prompt(`Input temperaure`) 
// 
const convertedTemp = convertToTemp(inputTemp)
console.log(convertToTemp(inputTemp))
console.log(createMessage(inputTemp))