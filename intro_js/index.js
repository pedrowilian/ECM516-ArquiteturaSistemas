// JSON: JavaScript Object Notation
// // Uma pessoa que se chama João e tem 17 anos
// let pessoa = {
//     nome: 'João',
//     idade: 17
// }

// console.log(pessoa.nome)
// console.log(pessoa['idade'])

//Uma pessoa que se chama Maria, tem 21 anos, e mora na Rua B, número 50
let pessoa = {
    nome: 'Maria',
    idade: 17,
    endereco:{
        rua: 'Rua B',
        numero: 50
    }
}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.endereco.rua)
console.log(pessoa.endereco.numero)

pessoa.nome = 'Ana Maria'
console.log(pessoa.nome)


// Closure
// const eAgora = () => {
//     let cont = 1
//     const f1 = () => console.log(cont)
//     cont++
//     const f2 = () => console.log(cont)
//     cont++
//     return {f1, f2}
// }
// const res = eAgora()
// res.f1()
// res.f2()

// function f(idade){
//     let nome = 'João'
//     function g(){
//         console.log(`Meu nome é ${nome} e tenho ${idade} anos.`)
//     }
//     return g
// }
// const res = f(17)
// res()

// function f (funcao){
//     funcao()
// }
// function g(){
//     function outraFuncao(){
//         console.log('Fui criada por g')
//         return () => "A"
//     }
//     return outraFuncao()
// }
// f(1)
// const res = g()
// f(res)
// console.log(res())


// let umaFuncao = function(){
//     console.log('Fui armazenada em uma variável')
//     return () => 'oi'
// }

// umaFuncao()
// function f(funcao){
//     console.log(funcao())
// }
// f(umaFuncao())

//listas/vetores/arrays/arranjos
// const numeros = [1, 2, 3, 4]
// const res = numeros.reduce((ac, v) => ac + v)
// // console.log(res)
// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Cristina', 'Alex']
// const res = nomes.every(n => n.startsWith("A"))
// const res2 = nomes.some(n => n.startsWith("A"))
// console.log(res)
//[A, A, R, C, A]
// const iniciais = nomes.map(function(nome){return nome.charAt(0)})
// console.log(iniciais)
// const apenasComA = nomes.filter(nome => nome.startsWith('A'))
// console.log(apenasComA)


// const f1 = () => {}
// const f2 = function(){}
// v1 = []
// console.log(v1.length)
// v1[0] = 'abc'
// console.log(v1.length)
// v1[10] = 2.5
// console.log(v1.length)
// console.log(v1)
// for(let i = 0; i < v1.length; i++)
//     console.log(v1[i])

// funções 
// function e arrow function
// não existe sobrecarga de função, ou seja, não é possível criar duas funções com o mesmo nome, mesmo que tenham parâmetros diferentes
// arrow function
// const eAgora = () => {1}
// const somar = (a, b) => a + b
// somar(2, 3) 

// const falarOi = nome => console.log('Oi, ' + nome + '!')
// falarOi('Maria')

// const triplo = function(x = 5){
//     return 3 * x
// }
// console.log(triplo())
// console.log(triplo(10))

// const dobro = function(x){
//     return 2 * x
// }

// function soma(a, b){
//     return a + b
// }
// const resultado = soma(2, 3)
// console.log(resultado)

// function hello(){
//     console.log('Hello!')
// }
// hello()

// function hello(nome){
//     console.log('Hello, ' + nome + '!')
// }
// hello('João')

// não existe sobrecarga de função, ou seja, não é possível criar duas funções com o mesmo nome, mesmo que tenham parâmetros diferentes
// arrow function



//coleções
// v1 = []
// v2 = []
// console.log(v1.length) // 0
// v1[0] = 2
// console.log(v1.length)
// v1[1] = "abc"
// console.log(v1.length)
// v1[10] = "João"
// console.log(v1)
// for(let i = 0; i < v1.length; i++){
//     console.log(v1[i])
// }



//operadores de comparação por igualdade: == e ===
// console.log(true == 1) // true, o operador == faz a coerção implícita, ou seja, ele converte o número 1 para booleano true antes de comparar
// console.log(1 === '1') // false, o operador === compara os valores e os tipos, ou seja, o número 1 é diferente da string '1'
// console.log(1 == '1') // true, o operador == faz a coerção implícita, ou seja, ele converte o string '1' para número 1 antes de comparar
// console.log(1 == 1)

// coerção implícita e explícita
// const n1 = 2
// const n2 = '3'
// const n3 = n1 + n2
// console.log(n3) // coerção implícita, o JS converteu o número 2 para string e concatenou com '3' resultando em '23'
// const n4 = n1 + Number(n2) // coerção explícita, o programador está convertendo a string '3' para número 3
// console.log(n4) // resultado 5

// matriz = [[], []]

// List <List <String>> matriz = new ArrayList<ArrayList <String>>(); 

// a = 'Agora sou uma string'
// console.log(a)
// console.log(typeof a)

// // Aparenta que a linguagem não tem tipos
// let a = 2
// console.log(a)
// // Tipo que a está apontando, pode mudar o poteiro
// console.log(typeof a)

// e o var?
//não use

// var idade = 18
// console.log(`Oi, ${nome}`)
// if(idade >= 18){
//     var nome = 'João'
//     console.log("Parabéns, "+ nome + ". Você pode dirigir")
// }
// console.log('Até, ' + nome)

// Declarando com o var
// var nasceu a muito tempo(dar prefêrencia por let do que var)
// var c = 2
// c = 3
// console.log(c)

//declarando variáveis 
// let a = 2
// console.log(a)
// let passouDeAno = true
// console.log(passouDeAno)
// a = 3
// console.log(a)
// let b
// console.log(b)
// b = 1.5
// console.log(b)

// Para saber o tipo da variável
// const idade = 17
// console.log(typeof(idade))

// Se é const só pode atribuir o valor ao criar a variável
// const nome = 'José'
// console.log(nome)

// nome = 'José Silva' -> isso irá dar erro
// Primeiro Hello World
// console.log('Hello World!')