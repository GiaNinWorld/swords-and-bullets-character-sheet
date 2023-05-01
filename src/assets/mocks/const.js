const ENHANCEMENTS = [
    {id: "1", name: "Adaptive", effect: {}, cost: 0},
    {id: "2", name: "Superior Physique", effect: {life: 2}, cost: 0},
    {id: "3", name: "Tameless", effect: {skills: [{Courage: 1}]}, cost: 0},
    {id: "4", name: "Great Strength", effect: {weapons: [{brutal: 1}]}, cost: 0},
    {id: "5", name: "Bachrings\' Luck", effect: {description: "Pode optar rolar 1d2 invés de 1d100, sendo 1 igual a erro crítico e 2 igual a um acerto"}, cost: 0},
    {id: "6", name: "Non-magical nature", effect: {description: "Ganha mais 10 ao persistir mágia e reduz o dano em 1"}, cost: 0},
    {id: "7", name: "Warrior\'s Heart", effect: {description: "Todos os testes de persistir relacionados a combate recebem um grau de dificuldade a menos"}, cost: 0},
    {id: "8", name: "Huge Strength", effect: {weapons: [{brutal: 2}, {damage: 1}]}, cost: 0},
    {id: "9", name: "Excelent Hearing", effect: {}, cost: 0},
    {id: "10", name: "Rich Heritage", effect: {}, cost: 0},
    {id: "11", name: "Storm Master", effect: {}, cost: 0},
    {id: "12", name: "Nature\'s Lord", effect: {}, cost: 0},
    {id: "13", name: "Mixed Clans", effect: {}, cost: 0},
    {id: "14", name: "Mana Batteries", effect: {}, cost: 0},
    {id: "15", name: "Half-Quadruped", effect: {}, cost: 0},
    {id: "16", name: "Powerful Charge", effect: {}, cost: 0},
    {id: "17", name: "Semi-aquatic", effect: {}, cost: 0},
    {id: "18", name: "Powerful Jaw", effect: {}, cost: 0},
    {id: "19", name: "Born Runner", effect: {}, cost: 0},
    {id: "20", name: "Dohva\'s Breath", effect: {}, cost: 0},
    {id: "21", name: "Jumper", effect: {}, cost: 0},
    {id: "22", name: "Swamp\'s Quietness", effect: {}, cost: 0},
    
  ];

const RACES = [
    { id: "1", name: "Dynol", effect: {enhancements: ENHANCEMENTS[0]}},
    { id: "2", name: "Mawr", effect: {enhancements: [ENHANCEMENTS[1], ENHANCEMENTS[2], ENHANCEMENTS[3]]} },
    { id: "3", name: "Bachring", effect: {enhancements: [ENHANCEMENTS[0], ENHANCEMENTS[4]]} },
    { id: "4", name: "Darwin\'o", effect: {enhancements: [ENHANCEMENTS[5]]} },
    { id: "5", name: "Orgun", effect: {enhancements: [ENHANCEMENTS[6]]} },
    { id: "6", name: "Orgare", effect: {enhancements: [ENHANCEMENTS[6]]} },
    { id: "7", name: "Ogre", effect: {enhancements: [ENHANCEMENTS[6], ENHANCEMENTS[7]]} },
    { id: "8", name: "Goberan\'o", effect: {enhancements: [ENHANCEMENTS[8], ENHANCEMENTS[9]]} },
    { id: "9", name: "Furutan\'o", effect: {enhancements: [ENHANCEMENTS[10], ENHANCEMENTS[11]]} },
    { id: "10", name: "Dontarian\'o", effect: {enhancements: [ENHANCEMENTS[12], ENHANCEMENTS[13]]} },
    { id: "11", name: "Altayian\'e", effect: {enhancements: [ENHANCEMENTS[14], ENHANCEMENTS[15]]} },
    { id: "12", name: "Kanaka\'ka", effect: {enhancements: [ENHANCEMENTS[16], ENHANCEMENTS[17]]} },
    { id: "13", name: "Leonin\'os", effect: {enhancements: [ENHANCEMENTS[18]]} },
    { id: "14", name: "Dohvak\'as", effect: {enhancements: [ENHANCEMENTS[19]]} },
    { id: "15", name: "Bulk\'ers", effect: {enhancements: [ENHANCEMENTS[20], ENHANCEMENTS[16], ENHANCEMENTS[21]]} }
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
    { id: "16", name: "Dalir", description: ["Theft, Thievery."] },
    { id: "17", name: "Tiriricus", description: ["Assassination, Arts."] },
    { id: "18", name: "Gazur", description: ["Violent War, Unbridled Fury."] },
    { id: "19", name: "Zerdam", description: ["Poison, Alchemy, Diseases, Medicine."] }
];

export const CONSTANTS = {
    RACES,
    NATIONS,
    BACKGROUNDS,
    SIZES
};