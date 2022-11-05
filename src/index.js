import { fechEvent } from './js/fetch';


const form = document.querySelector('form')
let page = 1;

form.addEventListener('submit',onSubmitForm)
async function onSubmitForm(e) {
    e.preventDefault()
    page = 1
    const query = e.target.elements.input.value.trim();
    const response = await fechMuviQueri(query,page)
    try {
    console.log(response)
    }
    catch (error) {
        console.log(error)
    }
    // if (!query) {
    //     return console.log('The search string cannot be empty. Please specify your search query')
    // }
    console.log('query', query)
    
}