import CommonPO from "./CommonPO";

class CommonPA extends CommonPO {

    acessarSubmenuComTexto(submenu) {
        let submenuT = submenu.toUpperCase()
        console.log(submenu, submenuT)

        switch (submenuT) {
            case 'HOME':
            case 'CARRINHO':
            case 'MINHA CONTA':
                this.elementos.submenu().contains(submenuT).click();
                break;
            default:
                throw new Error(`Submenu "${submenu}" não reconhecido`);
        }
    }

}

export default CommonPA