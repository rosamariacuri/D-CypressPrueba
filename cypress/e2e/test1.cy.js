

describe('My First Test', () => {

    //PRUEBA
    it('Probando con titulo', () => {

        cy.visit("https://parabank.parasoft.com/")
        cy.title().should('eq','ParaBank | Welcome | Online Banking')
      
    })

    //Probando LOG IN
    //Usuario registrado:ro , password:ro

    it ('LOG IN: Identificando a usurio registrado',function(){
        cy.visit("https://parabank.parasoft.com/")
        cy.get('[ name="username"]').type('ro');
        cy.get('[ name="password"]').type('ro');
        cy.get('[ value="Log In"]').click();
    })
    it ('LOG IN: Identificando a usuario NO registrado',function(){
        cy.visit("https://parabank.parasoft.com/")
        cy.get('[ name="username"]').type('ros');
        cy.get('[ name="password"]').type('ros');
        cy.get('[ value="Log In"]').click();
    })

    //Nombre existente en Nueva Zelanda : Azpilikuetagaraykosaroyarenberekolarrea de 39 caracteres.
    it ('REGISTER: Probando con nombre largo',function(){
        cy.visit("https://parabank.parasoft.com/parabank/register.htm")
        cy.get('[ id="customer.firstName"]').type('Azpilikuetagaraykosaroyarenberekolarrea');
        cy.get('[ id="customer.lastName"]').type('Erreh Muñoz');
        cy.get('[ id="customer.address.street"]').type('rom');
        cy.get('[ id="customer.address.city"]').type(' Coahuila');
        cy.get('[ id="customer.address.state"]').type('Nueva Zelanda');
        cy.get('[ id="customer.address.zipCode"]').type('0632');
        cy.get('[ id="customer.phoneNumber"]').type('9898989898');
        cy.get('[ id="customer.ssn"]').type('r6');
        cy.get('[ id="customer.username"]').type('user2');
        cy.get('[ id="customer.password"]').type('user2');
        cy.get('[ id="repeatedPassword"]').type('user2');
        cy.get('[ value="Register"]').click();
    })

    it ('REGISTER: Probando con nombre de tamaño promedio',function(){
        cy.visit("https://parabank.parasoft.com/parabank/register.htm")
        cy.get('[ id="customer.firstName"]').type('Azpilikuetagara');
        cy.get('[ id="customer.lastName"]').type('Erreh Muñoz');
        cy.get('[ id="customer.address.street"]').type('rom');
        cy.get('[ id="customer.address.city"]').type(' Coahuila');
        cy.get('[ id="customer.address.state"]').type('Nueva Zelanda');
        cy.get('[ id="customer.address.zipCode"]').type('0632');
        cy.get('[ id="customer.phoneNumber"]').type('9898989898');
        cy.get('[ id="customer.ssn"]').type('r6');
        cy.get('[ id="customer.username"]').type('user2');
        cy.get('[ id="customer.password"]').type('user2');
        cy.get('[ id="repeatedPassword"]').type('user2');
        cy.get('[ value="Register"]').click();
    })

     
     it ('REGISTER: Probando con apellido largo',function(){
        cy.visit("https://parabank.parasoft.com/parabank/register.htm")
        cy.get('[ id="customer.firstName"]').type('Azpilikuetagarayk');
        cy.get('[ id="customer.lastName"]').type(' Keihanaikukauakahihulihe ekahaunaele');
        cy.get('[ id="customer.address.street"]').type('rom');
        cy.get('[ id="customer.address.city"]').type(' Coahuila');
        cy.get('[ id="customer.address.state"]').type('Nueva Zelanda');
        cy.get('[ id="customer.address.zipCode"]').type('0632');
        cy.get('[ id="customer.phoneNumber"]').type('9898989898');
        cy.get('[ id="customer.ssn"]').type('r6');
        cy.get('[ id="customer.username"]').type('user3');
        cy.get('[ id="customer.password"]').type('user3');
        cy.get('[ id="repeatedPassword"]').type('user3');
        cy.get('[ value="Register"]').click();
    })

    it ('REGISTER: Probando con apellido con números',function(){
        cy.visit("https://parabank.parasoft.com/parabank/register.htm")
        cy.get('[ id="customer.firstName"]').type('Azpilikuetagarayk');
        cy.get('[ id="customer.lastName"]').type(' Keihanaikukauaka678888');
        cy.get('[ id="customer.address.street"]').type('rom');
        cy.get('[ id="customer.address.city"]').type(' Coahuila');
        cy.get('[ id="customer.address.state"]').type('Nueva Zelanda');
        cy.get('[ id="customer.address.zipCode"]').type('0632');
        cy.get('[ id="customer.phoneNumber"]').type('9898989898');
        cy.get('[ id="customer.ssn"]').type('r6');
        cy.get('[ id="customer.username"]').type('user3');
        cy.get('[ id="customer.password"]').type('user3');
        cy.get('[ id="repeatedPassword"]').type('user3');
        cy.get('[ value="Register"]').click();
    })
    

it ('REGISTER: Probando con apellido con caracteres especiales',function(){
    cy.visit("https://parabank.parasoft.com/parabank/register.htm")
    cy.get('[ id="customer.firstName"]').type('Azpilikuetagarayk');
    cy.get('[ id="customer.lastName"]').type(' Keihanaikukauaka67.,.');
    cy.get('[ id="customer.address.street"]').type('rom');
    cy.get('[ id="customer.address.city"]').type(' Coahuila');
    cy.get('[ id="customer.address.state"]').type('Nueva Zelanda');
    cy.get('[ id="customer.address.zipCode"]').type('0632');
    cy.get('[ id="customer.phoneNumber"]').type('9898989898');
    cy.get('[ id="customer.ssn"]').type('r6');
    cy.get('[ id="customer.username"]').type('user4');
    cy.get('[ id="customer.password"]').type('user4');
    cy.get('[ id="repeatedPassword"]').type('user4');
    cy.get('[ value="Register"]').click();
})






it ('REGISTER: Probando con letras el codigo postal',function(){
    cy.visit("https://parabank.parasoft.com/parabank/register.htm")
    cy.get('[ id="customer.firstName"]').type('Azpilikuetagarayk');
    cy.get('[ id="customer.lastName"]').type(' Keihanaikukauaka67.,.');
    cy.get('[ id="customer.address.street"]').type('rom');
    cy.get('[ id="customer.address.city"]').type(' Coahuila');
    cy.get('[ id="customer.address.state"]').type('Nueva Zelanda');
    cy.get('[ id="customer.address.zipCode"]').type('lele');
    cy.get('[ id="customer.phoneNumber"]').type('9898989898');
    cy.get('[ id="customer.ssn"]').type('r6');
    cy.get('[ id="customer.username"]').type('user5');
    cy.get('[ id="customer.password"]').type('user5');
    cy.get('[ id="repeatedPassword"]').type('user5');
    cy.get('[ value="Register"]').click();
})


it ('REGISTER: Probando con letras el campo Phone',function(){
    cy.visit("https://parabank.parasoft.com/parabank/register.htm")
    cy.get('[ id="customer.firstName"]').type('Azpilikuetagarayk');
    cy.get('[ id="customer.lastName"]').type(' Keihanaikukauaka67.,.');
    cy.get('[ id="customer.address.street"]').type('rom');
    cy.get('[ id="customer.address.city"]').type(' Coahuila');
    cy.get('[ id="customer.address.state"]').type('Nueva Zelanda');
    cy.get('[ id="customer.address.zipCode"]').type('lele');
    cy.get('[ id="customer.phoneNumber"]').type('telefono');
    cy.get('[ id="customer.ssn"]').type('r6');
    cy.get('[ id="customer.username"]').type('user6');
    cy.get('[ id="customer.password"]').type('user6');
    cy.get('[ id="repeatedPassword"]').type('user6');
    cy.get('[ value="Register"]').click();
})



it ('REGISTER: Probando con letras el campo Phone',function(){
    cy.visit("https://parabank.parasoft.com/parabank/register.htm")
    cy.get('[ id="customer.firstName"]').type('Azpilikuetagarayk');
    cy.get('[ id="customer.lastName"]').type(' Keihanaikukauaka67.,.');
    cy.get('[ id="customer.address.street"]').type('rom');
    cy.get('[ id="customer.address.city"]').type(' Coahuila');
    cy.get('[ id="customer.address.state"]').type('Nueva Zelanda');
    cy.get('[ id="customer.address.zipCode"]').type('lele');
    cy.get('[ id="customer.phoneNumber"]').type('telefono');
    cy.get('[ id="customer.ssn"]').type('r6');
    cy.get('[ id="customer.username"]').type('user5');
    cy.get('[ id="customer.password"]').type('user5');
    cy.get('[ id="repeatedPassword"]').type('user5');
    cy.get('[ value="Register"]').click();
})

  })

