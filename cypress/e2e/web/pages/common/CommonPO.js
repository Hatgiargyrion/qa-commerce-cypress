class CommonPO {
    elementos = {
        submenu: () => cy.get('ul.navbar-nav a.nav-link')
    }
}

export default CommonPO