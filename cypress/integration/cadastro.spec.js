import signupPage from '../pages/SignupPage'
import SignupFactory from '../factories/SignupFactory'
describe('Cadastro', () => {

    //beforeEach(function () {
    //    cy.fixture('deliver').then((massaDeTeste) => {
    //       this.deliver = massaDeTeste


    // })

    // })


    it('Usuário deve se tornar um Entregador', function () {

        var entregador = SignupFactory.entregador()


        signupPage.go()
        signupPage.fillForm(entregador)
        signupPage.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expectedMessage)

        signupPage.clic()


    })


    it('Usuário inserindo CPF invalido', function () {

        var entregador = SignupFactory.entregador()

        entregador.cpf = '000000159AA'

        signupPage.go()
        signupPage.fillForm(entregador)
        signupPage.submit()
        signupPage.alertMessegeShouldBe('Oops! CPF inválido')




    })

    it('Usuário inserindo Email invalido', function () {

        var entregador = SignupFactory.entregador()

        entregador.email = 'user.com.br'

        signupPage.go()
        signupPage.fillForm(entregador)
        signupPage.submit()
        signupPage.alertMessegeShouldBe('Oops! Email com formato inválido.')




    })

    context('Required fields', function () {

        const messages = [

            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'address-number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }

        ]

        before(function () {

            signupPage.go()
            signupPage.submit()

        })

        messages.forEach(function (msg){

         it(`${msg.field} is required`, function () {
          
            signupPage.alertMessegeShouldBe(msg.output)

         })

        })

    })

    //it('Required fields', function () {

       // signupPage.go()
        //signupPage.submit()
        //signupPage.alertMessegeShouldBe('É necessário informar o nome')
        //signupPage.alertMessegeShouldBe('É necessário informar o CPF')
        //signupPage.alertMessegeShouldBe('É necessário informar o email')
        //signupPage.alertMessegeShouldBe('É necessário informar o CEP')
        //signupPage.alertMessegeShouldBe('É necessário informar o número do endereço')
        //signupPage.alertMessegeShouldBe('Selecione o método de entrega')
        //signupPage.alertMessegeShouldBe('Adicione uma foto da sua CNH')

    //})




})