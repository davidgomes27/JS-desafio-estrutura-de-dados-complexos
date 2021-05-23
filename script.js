// Crie um objeto que receba ao menos três propriedades sobre você.

// Adicione uma nova propriedade sem alterar seu objeto inicial.

// Remova uma propriedade desse objeto.

//Mostre no console todas as propriedades desse objeto.

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

// Mostre no console o nome de um amigo de cada lista.




let eu = [
    {
        nome:"david",
        idade: 27,
        lugar: "Pernambuco",
    }
]

eu.time = "Mengão"
delete eu.idade


console.log (eu)

let cadastro = [
    {
        nome:"julia",
        idade: 29,
        telefone:40028922,
        amigos: ["yumi","lulu","thresh","leona"]
    },{
        nome:"keyo",
        idade:45,
        telefone:40028922,
        amigos:["evellyn","kayn","shaco","rumble"]
    },{
        nome:"daniels",
        idade: 10,
        telefone:40028922,
        amigos:["morgana","maokai","heimedinger","diana"]
    },{
        nome:"jukes",
        idade:27,
        telefone:40028922,
        amigos:["yasuo","yone","riven","renekton"]
    },{
        nome:"gragolandia",
        idade:13,
        telefone:40028922,
        amigos:["gragas","hecarim","graves","shivana"]
    }

]

console.log(cadastro[0].amigos[2] , cadastro[1].amigos[0] ,cadastro[2].amigos[0] ,cadastro[3].amigos[1] ,cadastro[4].amigos[0])