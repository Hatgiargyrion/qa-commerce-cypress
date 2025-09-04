import { Given, When } from '@badeball/cypress-cucumber-preprocessor';
import UsuarioService from '../services/UsuarioService';

const usuarioService = new UsuarioService()

Given('que gero informações aleatórias para cadastro de um usuário', () => {
    usuarioService.gerarDadosAleatoriosUsuario();
})

When('envio a requisição para a API de criação de usuário', () => {
    usuarioService.criarUsuario()
})

When('realizo duas chamadas de criação de usuário utilizando os mesmos dados', () => {
    usuarioService.criarUsuario()
    usuarioService.criarUsuario()
})