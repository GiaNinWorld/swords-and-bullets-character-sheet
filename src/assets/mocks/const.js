const DESCRIPTIONS = [
    {
        DESCRIPTION_5: [
            { pt: "Pode optar rolar 1d2 invés de 1d100, sendo 1 igual a erro crítico e 2 igual a um acerto" },
            { en: "Can choose to roll 1d2 instead of 1d100, where 1 is a critical failure and 2 is a success" }
        ]
    },
    {
        DESCRIPTION_6: [
            { pt: "Ganha mais 10 ao persistir mágia e reduz o dano em 1" },
            { en: "Gains an additional 10 when persisting magic and reduces damage by 1" }
        ]
    },
    {
        DESCRIPTION_7: [
            { pt: "Todos os testes de persistir relacionados a combate recebem um degrau de dificuldade a menos" },
            { en: "All combat-related persistence tests receive one less difficulty step" }
        ]
    },
    {
        DESCRIPTION_9: [
            { pt: "Todos os testes de audição são feitos com um degrau a menos" },
            { en: "All hearing tests are done with one less difficulty step" }
        ]
    },
    {
        DESCRIPTION_10: [
            { pt: "O personagem 1d10+10 PP a mais" },
            { en: "Character gains 1d10+10 PP (player points) more" }
        ]
    },
    {
        DESCRIPTION_11: [
            { pt: "Com uma ação livre o personagem pode rolar 1d5 turnos para ter o dobro de ações, porém ao termino o mesmo ficará fadigado" },
            { en: "With a free action, the character can roll 1d5 turns to have double the number of actions, but will become fatigued at the end" }
        ]
    },
    {
        DESCRIPTION_13: [
            { pt: "Escolha até 2 atributos para aumentar em mais dois, podendo escolher duas vezes o mesmo atributo" },
            { en: "Choose up to 2 attributes to increase by two, and can choose the same attribute twice" }
        ]
    },
    {
        DESCRIPTION_14: [
            { pt: "Ganha o Enhancement: Magia: Arcanismo nível 1" },
            { en: "Gains the Enhancement: Magic: Arcanismo level 1" }
        ]
    },
    {
        DESCRIPTION_15: [
            { pt: "Dobra limite de fadiga para movimentação" },
            { en: "Doubles the fatigue limit for movement" }
        ]
    },
    {
        DESCRIPTION_16: [
            { pt: "Ao fazer um ataque de investida conta como montaria" },
            { en: "When making a charge attack, it counts as a mount" }
        ]
    },
    {
        DESCRIPTION_17: [
            { pt: "Pode prender o fôlego duas vezes mais" },
            { en: "Can hold breath for twice as long" }
        ]
    },
    {
        DESCRIPTION_18: [
            { pt: "Sua boca conta como arma natural, no caso ganha o Enhancement: Nature Weapon(mouth)" },
            { en: "Your mouth counts as a natural weapon, and gains the Enhancement: Nature Weapon(mouth)" }
        ]
    },
    {
        DESCRIPTION_19: [
            { pt: "Ao realizar uma ação de correr seu movimento triplica ao invés de duplicar" },
            { en: "When taking a dash action, your movement speed triples instead of doubling." }
        ]
    },
    {
        DESCRIPTION_20: [
            { pt: "Com uma ação rápida pode fazer uma pequena labareda de fogo, ataque desarmado que causa 1d5+2, pode ser feito novamente após uma boa refeição" },
            { en: "With a quick action, you can create a small flame attack that deals 1d5+2 damage as an unarmed attack. It can be used again after a good meal." }
        ]
    },
    {
        DESCRIPTION_21: [
            { pt: "Dobre a distância de saltos e pulos" },
            { en: "Double the distance of jumps and leaps." }
        ]
    }
];

const ENHANCEMENTS = [
    { id: "1", name: "Adaptive", effect: {}, cost: 0 },
    { id: "2", name: "Superior Physique", effect: { life: 2 }, cost: 0 },
    { id: "3", name: "Tameless", effect: { skills: [{ Courage: 1 }] }, cost: 0 },
    { id: "4", name: "Great Strength", effect: { weapons: [{ brutal: 1 }] }, cost: 0 },
    { id: "5", name: "Bachrings\' Luck", effect: { description: DESCRIPTIONS.DESCRIPTION_5 }, cost: 0 },
    { id: "6", name: "Non-magical nature", effect: { description: DESCRIPTIONS.DESCRIPTION_6 }, cost: 0 },
    { id: "7", name: "Warrior\'s Heart", effect: { description: DESCRIPTIONS.DESCRIPTION_7 }, cost: 0 },
    { id: "8", name: "Huge Strength", effect: { weapons: [{ brutal: 2 }, { damage: 1 }] }, cost: 0 },
    { id: "9", name: "Excelent Hearing", effect: { description: DESCRIPTIONS.DESCRIPTION_9 }, cost: 0 },
    { id: "10", name: "Rich Heritage", effect: { description: DESCRIPTIONS.DESCRIPTION_10 }, cost: 0 },
    { id: "11", name: "Storm Master", effect: { description: DESCRIPTIONS.DESCRIPTION_11 }, cost: 0 },
    { id: "12", name: "Nature\'s Lord", effect: { skills: [{ Leadership: 1 }] }, cost: 0 },
    { id: "13", name: "Mixed Clans", effect: { description: DESCRIPTIONS.DESCRIPTION_13 }, cost: 0 },
    { id: "14", name: "Mana Batteries", effect: { description: DESCRIPTIONS.DESCRIPTION_14 }, cost: 0 },
    { id: "15", name: "Half-Quadruped", effect: { description: DESCRIPTIONS.DESCRIPTION_16 }, cost: 0 },
    { id: "16", name: "Powerful Charge", effect: { description: DESCRIPTIONS.DESCRIPTION_16 }, cost: 0 },
    { id: "17", name: "Semi-aquatic", effect: { skills: [{ Swimming: 1 }], descrip5ion: DESCRIPTIONS.DESCRIPTION_17 }, cost: 0 },
    { id: "18", name: "Powerful Jaw", effect: { description: DESCRIPTIONS.DESCRIPTION_18 }, cost: 0 },
    { id: "19", name: "Born Runner", effect: { description: DESCRIPTIONS.DESCRIPTION_19 }, cost: 0 },
    { id: "20", name: "Dohva\'s Breath", effect: { description: DESCRIPTIONS.DESCRIPTION_20 }, cost: 0 },
    { id: "21", name: "Jumper", effect: { description: DESCRIPTIONS.DESCRIPTION_21 }, cost: 0 },
    { id: "22", name: "Swamp\'s Quietness", effect: { skills: [{ Control: 1 }] }, cost: 0 },

];

const FLAWS = [
    { id: "1", name: "Péssimo Temperamento", effect: {}, cost: 0 },
    { id: "2", name: "Supersticioso", effect: {}, cost: 0 },
    { id: "3", name: "Non-magical nature", effect: {}, cost: 0 },
    { id: "4", name: "Fúria Incontrolável", effect: {}, cost: 0 },
    { id: "5", name: "Stupid as an Ogre", effect: {}, cost: 0 },
    { id: "6", name: "Carnívoro", effect: {}, cost: 0 },
    { id: "7", name: "Cold Blood", effect: {}, cost: 0 },
];

const RACES = [
    {
        id: "1", name: "Dynol", attributes: [
            { Strength: 25 },
            { Dexterity: 25 },
            { Agility: 25 },
            { Resistence: 25 },
            { Intelligence: 25 },
            { Charisma: 25 },
            { Will: 25 },
            { Perception: 25 }], effect: { enhancements: ENHANCEMENTS[0] }
    },
    {
        id: "2", name: "Mawr", attributes: [
            { Strength: 30 },
            { Dexterity: 25 },
            { Agility: 25 },
            { Resistence: 30 },
            { Intelligence: 23 },
            { Charisma: 25 },
            { Will: 20 },
            { Perception: 23 }], effect: { enhancements: [ENHANCEMENTS[1], ENHANCEMENTS[2], ENHANCEMENTS[3]] }
    },
    {
        id: "3", name: "Bachring", attributes: [
            { Strength: 22 },
            { Dexterity: 27 },
            { Agility: 25 },
            { Resistence: 25 },
            { Intelligence: 25 },
            { Charisma: 27 },
            { Will: 25 },
            { Perception: 25 }], effect: { enhancements: [ENHANCEMENTS[0], ENHANCEMENTS[4]] }
    },
    {
        id: "4", name: "Darwin\'o", attributes: [
            { Strength: 27 },
            { Dexterity: 25 },
            { Agility: 23 },
            { Resistence: 30 },
            { Intelligence: 27 },
            { Charisma: 23 },
            { Will: 27 },
            { Perception: 25 }], effect: { enhancements: [ENHANCEMENTS[5]] }
    },
    {
        id: "5", name: "Orgun", attributes: [
            { Strength: 30 },
            { Dexterity: 35 },
            { Agility: 23 },
            { Resistence: 30 },
            { Intelligence: 22 },
            { Charisma: 23 },
            { Will: 30 },
            { Perception: 25 }], effect: { enhancements: [ENHANCEMENTS[6]] }
    },
    {
        id: "6", name: "Orgare", attributes: [
            { Strength: 27 },
            { Dexterity: 27 },
            { Agility: 23 },
            { Resistence: 27 },
            { Intelligence: 25 },
            { Charisma: 25 },
            { Will: 30 },
            { Perception: 25 }], effect: { enhancements: [ENHANCEMENTS[6]] }
    },
    {
        id: "7", name: "Ogre", attributes: [
            { Strength: 40 },
            { Dexterity: 30 },
            { Agility: 27 },
            { Resistence: 45 },
            { Intelligence: 13 },
            { Charisma: 15 },
            { Will: 20 },
            { Perception: 25 }], effect: { enhancements: [ENHANCEMENTS[6], ENHANCEMENTS[7]] }
    },
    {
        id: "8", name: "Goberan\'o", attributes: [
            { Strength: 22 },
            { Dexterity: 28 },
            { Agility: 28 },
            { Resistence: 20 },
            { Intelligence: 27 },
            { Charisma: 30 },
            { Will: 20 },
            { Perception: 32 }], effect: { enhancements: [ENHANCEMENTS[8], ENHANCEMENTS[9]] }
    },
    {
        id: "9", name: "Furutan\'o", attributes: [
            { Strength: 27 },
            { Dexterity: 27 },
            { Agility: 25 },
            { Resistence: 21 },
            { Intelligence: 27 },
            { Charisma: 28 },
            { Will: 27 },
            { Perception: 25 }], effect: { enhancements: [ENHANCEMENTS[10], ENHANCEMENTS[11]] }
    },
    {
        id: "10", name: "Dontarian\'o", attributes: [
            { Strength: 25 },
            { Dexterity: 25 },
            { Agility: 27 },
            { Resistence: 23 },
            { Intelligence: 27 },
            { Charisma: 27 },
            { Will: 25 },
            { Perception: 25 }], effect: { enhancements: [ENHANCEMENTS[12], ENHANCEMENTS[13]] }
    },
    {
        id: "11", name: "Altayian\'e", attributes: [
            { Strength: 30 },
            { Dexterity: 27 },
            { Agility: 30 },
            { Resistence: 27 },
            { Intelligence: 20 },
            { Charisma: 20 },
            { Will: 25 },
            { Perception: 25 }], effect: { enhancements: [ENHANCEMENTS[14], ENHANCEMENTS[15]] }
    },
    {
        id: "12", name: "Kanaka\'ka", attributes: [
            { Strength: 35 },
            { Dexterity: 25 },
            { Agility: 18 },
            { Resistence: 28 },
            { Intelligence: 23 },
            { Charisma: 23 },
            { Will: 25 },
            { Perception: 25 }], effect: { enhancements: [ENHANCEMENTS[16], ENHANCEMENTS[17]] }
    },
    {
        id: "13", name: "Leonin\'os", attributes: [
            { Strength: 26 },
            { Dexterity: 26 },
            { Agility: 30 },
            { Resistence: 25 },
            { Intelligence: 25 },
            { Charisma: 27 },
            { Will: 25 },
            { Perception: 25 }], effect: { enhancements: [ENHANCEMENTS[18]] }
    },
    {
        id: "14", name: "Dohvak\'as", attributes: [
            { Strength: 23 },
            { Dexterity: 25 },
            { Agility: 25 },
            { Resistence: 25 },
            { Intelligence: 27 },
            { Charisma: 27 },
            { Will: 25 },
            { Perception: 25 }], effect: { enhancements: [ENHANCEMENTS[19]] }
    },
    {
        id: "15", name: "Bulk\'ers", attributes: [
            { Strength: 20 },
            { Dexterity: 25 },
            { Agility: 25 },
            { Resistence: 27 },
            { Intelligence: 29 },
            { Charisma: 30 },
            { Will: 25 },
            { Perception: 25 }], effect: { enhancements: [ENHANCEMENTS[20], ENHANCEMENTS[16], ENHANCEMENTS[21]] }
    }
];

const NATIONS = [
    { id: "1", name: "Império Darw" },
    { id: "2", name: "Reino Órog" },
    { id: "3", name: "Reinos Livres" },
    { id: "4", name: "Império Furuto" },
    { id: "5", name: "Quatro Reinos" },
    { id: "6", name: "Nação Mercante" },
    { id: "7", name: "Reino Elfem & Ewhua" },
    { id: "8", name: "Altay" },
    { id: "9", name: "Kanakaka" }
];

const BACKGROUNDS = [
    { id: "1", name: "Soldado" },
    { id: "2", name: "Cortesão" },
    { id: "3", name: "Artesão" },
    { id: "4", name: "Estudioso" },
    { id: "5", name: "Mercador" },
    { id: "6", name: "Criminoso" },
    { id: "7", name: "Artista" },
    { id: "8", name: "Clérigo" },
    { id: "9", name: "Camponês" },
    { id: "10", name: "Marinheiro" }
];

const SIZES = [
    { id: "1", name: "Miúdo" },
    { id: "2", name: "Pequeno" },
    { id: "3", name: "Médio" },
    { id: "4", name: "Grande" },
    { id: "5", name: "Enorme" },
    { id: "6", name: "Imenso" }
];

const RELIGIONS = [
    { id: "1", name: "Nargadek", description: ["Good Death", "Mortality."] },
    { id: "2", name: "Salinda, Miskar, Venir", description: ["Knowledge", "Magic."] },
    { id: "3", name: "Ghouramura", description: ["Laws", "Justice."] },
    { id: "4", name: "Narukami, Iukiko", description: ["Storm", "War", "Honor."] },
    { id: "5", name: "Thetia", description: ["War, Glory", "Strategy."] },
    { id: "6", name: "Bar-Ranagir", description: ["Peace", "Life", "Self-Sacrifice."] },
    { id: "7", name: "Udatz", description: ["Travel", "Transportation", "Navigation."] },
    { id: "8", name: "Murguling, Grevejur", description: ["Forge", "Creation", "Hard Work."] },
    { id: "9", name: "Vostrokan", description: ["Advancement", "Technology", "Gadgets."] },
    { id: "10", name: "Firaous", description: ["Honorable Combat", "Competition", "Wars."] },
    { id: "11", name: "Bachiri", description: ["Luck", "Wealth."] },
    { id: "12", name: "Kysarid", description: ["Hunting", "Survival."] },
    { id: "13", name: "Ortovi", description: ["Trade", "Wealth."] },
    { id: "14", name: "Orog", description: ["Freedom", "War", "Courage."] },
    { id: "15", name: "Krog", description: ["War", "Raiders."] },
    { id: "16", name: "Dalir", description: ["Theft", "Thievery."] },
    { id: "17", name: "Tiriricus", description: ["Assassination", "Arts."] },
    { id: "18", name: "Gazur", description: ["Violent War", "Unbridled Fury."] },
    { id: "19", name: "Zerdam", description: ["Poison", "Alchemy", "Diseases", "Medicine."] }
];

export const CONSTANTS = {
    RACES,
    NATIONS,
    BACKGROUNDS,
    SIZES
};