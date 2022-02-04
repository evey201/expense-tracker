import { Invoice } from './modules/invoice.js';
import { Payment } from './modules/payment.js';
import { ListTemplate } from './modules/listTemplate.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne= new Invoice('mario', 'web work', 25000)
// docTwo= new Payment('luigi', 'plumbing work', 500)
// let docs: HasFormatter[] = []
// docs.push(docOne, docTwo)
// console.log(docs)
// const invoiceOne = new Invoice('mario', 'work on website', 500000);
// console.log(invoiceOne);
// Interfaces are used to enforce a certain type of structure of a class or an object
// interface isPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }
const form = document.querySelector('.new-item-form');
console.log(form.children);
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    // console.log(doc);
    list.render(doc, type.value, 'end');
});
