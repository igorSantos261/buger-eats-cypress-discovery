var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    entregador: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

         var date = {
            nome: `${firstName} ${lastName}`, 
            cpf: cpf.generate(), 
            email: faker.internet.email(firstName), 
            whatsapp:'81999999999',
            endereco: { 
                cep: '52221140',
                rua: 'Rua André Bezerra', 
                numero: '69',
                complemento: 'casa 062',
                bairro: 'Cajueiro',
                cidade_uf: 'Recife/PE'
    
            },
    
            metodo_entregador: 'Van/Carro',
            cnh: 'cnh-digital.jpg'
    
        }

        return date

    }
}