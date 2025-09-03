import { Given } from '@badeball/cypress-cucumber-preprocessor';
import HomePA from '../pages/home/HomePA';

const homePA = new HomePA();

Given('que estou na página inicial do portal QA-Commerce', () => {
    homePA.acessarWebsite()
})