import {CONSTANTS} from '../assets/mocks/const';

const initAttributesValues = {
    base: 25,
    extras: 0,
    enhancement: 0,
    total: 25,
    modifier: 2
};

const initInfoValues = {
    id: null, name: null, effect: {}
};

const info = {
    name: "",
    player: "",
    race: CONSTANTS.RACES.filter(item => item.id === "1")[0],
    nation: initInfoValues,
    background: initInfoValues,
    size: initInfoValues
};

const attributes = {
    Strength: initAttributesValues,
    Dexterity: initAttributesValues,
    Agility: initAttributesValues,
    Resistence: initAttributesValues,
    Intelligence: initAttributesValues,
    Charisma: initAttributesValues,
    Will: initAttributesValues,
    Perception: initAttributesValues
};

export const data = {
    info,
    attributes
};