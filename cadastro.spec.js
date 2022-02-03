

describe('Cadastro', ()=>{ 
     it('Usuário deve se tornar um Entregador', ()=>{ 
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')


        var entregador = { 

            nome: 'Igor Santos', 
            cpf: '00000014125', 
            email: 'teste@teste.com', 
            whatsapp:'81999999999',
            endereco: { 
                cep: '52221140',
                rua: 'Rua André Bezerra', 
                numero: '69',
                complemento: 'casa 062',
                bairro: 'Cajueiro',
                cidade_uf: 'Recife/PE',

            },

             metodo_entregador: 'Van/Carro',
             cnh: 'cnh-digital.jpg'
           

        }
        
        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)

        cy.contains('.delivery-method li', entregador.metodo_entregador).click()

        cy.get('input[accept^="image"]').attachFile('/images/' + entregador.cnh)

        cy.get('div [type="submit"]').click()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        cy.get('div div [class="swal2-html-container"]')
        .should('have.text', expectedMessage)
        

        cy.get('div [class="swal2-confirm swal2-styled"]').click()

     })
     

     it('Usuário inserindo CPF invalido', ()=>{ 
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')


        var entregador = { 

            nome: 'Igor Santos', 
            cpf: '000000141IG', 
            email: 'teste@teste.com', 
            whatsapp:'81999999999',
            endereco: { 
                cep: '52221140',
                rua: 'Rua André Bezerra', 
                numero: '69',
                complemento: 'casa 062',
                bairro: 'Cajueiro',
                cidade_uf: 'Recife/PE',

            },

             metodo_entregador: 'Van/Carro',
             cnh: 'cnh-digital.jpg'
           

        }
        
        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)

        cy.contains('.delivery-method li', entregador.metodo_entregador).click()

        cy.get('input[accept^="image"]').attachFile('/images/' + entregador.cnh)

        cy.get('div [type="submit"]').click()

        
        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')
        

       

     })
})