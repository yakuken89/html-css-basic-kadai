const year = new Date("2024-10-12");
const fullYear = year.getFullYear();

const month = new Date("2024-10-12");
const fullMonth = month.getMonth()+1;

const date = new Date("2024-10-12");
const fullDate = date.getDate();

console.log(fullYear + `年` + fullMonth + `月` + fullDate + `日`); 