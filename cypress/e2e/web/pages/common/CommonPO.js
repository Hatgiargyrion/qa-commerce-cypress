class CommonPO {
    elementos = {
        submenu: () => cy.get('ul.navbar-nav a.nav-link'),
        containerMensagem: () => cy.get('div')
    }
}

export default CommonPO