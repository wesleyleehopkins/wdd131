import add_participant from "./template.mjs";
let participent_count = 1

document.querySelector('#add').addEventListener('click', () => {
  participent_count = add_participant()
});



const form = document.querySelector('form')
form.addEventListener('submit', main_load)

function main_load(event) {
    event.preventDefault();
    const sum = totalFees();
    const info = document.querySelector("#adult_name").value;
    successTemplate(info, participent_count, sum);
    const hidden = document.getElementById('form');
    hidden.style.display = "none";

}

function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
// querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
// The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
// The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
// sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
// Remember that the text that was entered into the input element will be found in the .value of the element.
    let sum = 0
    feeElements.forEach((fee) => {
         sum += parseFloat(fee.value)
    console.log(sum)})
// once you have your total make sure to return it!
        return sum
}
const info = document.querySelector("#adult_name");

function successTemplate(info, participent_count,sum, ) {
      const receipt = `
        <h1> Receipt</h1>
        <p>${info}, you have ${participent_count} participents, with a fee of $${sum} 
      `


      document.querySelector("h1").insertAdjacentHTML("beforebegin", receipt)
}

 