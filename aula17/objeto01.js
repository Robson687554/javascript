//
let amigo = {
    nome: 'jose',
    sexo: 'masc',
    peso: 85.4,
    engordar(p = 0) {
        console.log('engordou')
        this.peso += p

    }
}
//console.log(typeof amigo)
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)