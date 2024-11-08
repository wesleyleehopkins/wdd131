
const obj = {
    key:'value',
    'key1':'values'
}
obj.key

console.log(obj.key)
console.log(obj['key'])

const doc = {
    getElementById: (theIdOfTheElement) => {
        return theIdOfTheElement
}

doc.getElementById('id')
