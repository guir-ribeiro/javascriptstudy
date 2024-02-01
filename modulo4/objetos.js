let user = {
    name: 'Guilherme',
    age: 23,
    email: 'guilherme@teste.com',
    city: 'Natal',
    blogPosts: ['Empada de frango', '4 receitas de pure de batata'],
    login: function () {
        console.log('Usuário Logado')
    },
    logout: function () {
        console.log('Usuario deslogado')
    }
}

// console.log(user.name)

const key = 'email'
// console.log(user[key]);

user.logout()
