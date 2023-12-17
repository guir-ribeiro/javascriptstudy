const password = '321';

if(password.length >= 12 && password.includes('1')) {
    console.log('Senha muito forte =)')
} else if (password.length >= 8 || password.includes('1') && password.length >= 5) {
    console.log('Senha forte');
} else {
    console.log('A senha deve ter pelo menos 8 caracteres');
}