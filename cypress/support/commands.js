Cypress.Commands.add('gerarNomeAleatorio', () => {
    const nomes = ["João", "Maria", "Lucas", "Ana", "Gabriel", "Beatriz"];
    const sobrenomes = ["Silva", "Souza", "Oliveira", "Costa", "Pereira"];
    const nome = nomes[Math.floor(Math.random() * nomes.length)];
    const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
    return `${nome} ${sobrenome}`;
});

Cypress.Commands.add('gerarEmailAleatorio', (isValid) => {
    const dominios = ["gmail.com", "yahoo.com", "hotmail.com"];
    const nomeEmail = Math.random().toString(36).substring(2, 10);
    let dominio = ''
    if (isValid) {
        dominio = dominios[Math.floor(Math.random() * dominios.length)];
    }

    return `${nomeEmail}@${dominio}`;
});

Cypress.Commands.add('gerarSenhaValida', (tamanho = 6) => {
    const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const especiais = "!@#$%^&*()";

    if (tamanho < 6) tamanho = 6;

    let senha = '';
    senha += letrasMaiusculas.charAt(Math.floor(Math.random() * letrasMaiusculas.length));
    senha += especiais.charAt(Math.floor(Math.random() * especiais.length));

    const todosCaracteres = letrasMinusculas + letrasMaiusculas + numeros + especiais;

    for (let i = senha.length; i < tamanho; i++) {
        senha += todosCaracteres.charAt(Math.floor(Math.random() * todosCaracteres.length));
    }

    senha = senha.split('').sort(() => 0.5 - Math.random()).join('');

    return senha;
});
