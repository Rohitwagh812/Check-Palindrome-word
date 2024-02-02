let input = document.querySelector('#input')
let span = document.querySelector('#span')
let mainDiv = document.querySelector('#div')
let button = document.querySelector('#btn')

// const  isPolondrome = (input) => {

    

//     return input.split('').reverse().join('') === input;
// }

// console.log('level' , isPolondrome(input.value))
// console.log('salman' , isPolondrome('salman'))


button.addEventListener('click', () => {

    if (input.value !== '') {
        // Reverse the string and compare
        span.innerHTML = input.value.split('').reverse().join('') === input.value;

        // Change the color based on the comparison result
        if (span.innerHTML === 'true') {
            span.style.color = 'green';
        } else {
            span.style.color = 'red';
        }
    } else {
        // Handle the case when the input is empty
        span.innerHTML = 'Please enter a word';
        span.style.color = 'black'; // You can set any color for the empty case
    }
}
 

)
