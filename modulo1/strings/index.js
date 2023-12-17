const email = 'guilhermeribeiro@email.com';

// const lastIndexA = email.lastIndexOf('@') // retorna o index do ultimo elemento selecionado

const spliceName = email.slice(0, email.indexOf('@'));

const emailReplace = email.replace('r', 'R' )

console.log(emailReplace)