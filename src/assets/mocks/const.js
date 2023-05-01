const RACES = [
    { id: 1, name: "Dynol", effect: {attributes: [
        {id: "Strength", value: 5},
        {id: "Agility", value: 5}
    ], flaws: {name : ""}} },
    { id: 2, name: "Mawr" },
    { id: 3, name: "Bachring" },
    { id: 4, name: "Darwin\'o" },
    { id: 5, name: "Orgun" },
    { id: 6, name: "Orgare" },
    { id: 7, name: "Ogre" },
    { id: 8, name: "Goberan\'o" },
    { id: 9, name: "Furutan\'o" },
    { id: 10, name: "Dontarian\'o" },
    { id: 11, name: "Altayian\'e" },
    { id: 12, name: "Kanaka\'ka" },
    { id: 13, name: "Leonin\'os" },
    { id: 14, name: "Dohvak\'as" },
    { id: 15, name: "Bulk\'ers" }
];

const NATIONS = [
    { id: 1, name: "Império Darw" },
    { id: 2, name: "Reino Órog" },
    { id: 3, name: "Reinos Livres" },
    { id: 4, name: "Império Furuto" },
    { id: 5, name: "Quatro Reinos" },
    { id: 6, name: "Nação Mercante" },
    { id: 7, name: "Reino Elfem & Ewhua" },
    { id: 8, name: "Altay" },
    { id: 9, name: "Kanakaka" }
];

const BACKGROUNDS = [
    { id: 1, name: "Soldado" },
    { id: 2, name: "Cortesão" },
    { id: 3, name: "Artesão" },
    { id: 4, name: "Estudioso" },
    { id: 5, name: "Mercador" },
    { id: 6, name: "Criminoso" },
    { id: 7, name: "Artista" },
    { id: 8, name: "Clérigo" },
    { id: 9, name: "Camponês" },
    { id: 10, name: "Marinheiro" }
];

const SIZES = [
    { id: 1, name: "Miúdo" },
    { id: 2, name: "Pequeno" },
    { id: 3, name: "Médio" },
    { id: 4, name: "Grande" },
    { id: 5, name: "Enorme" },
    { id: 6, name: "Imenso" }
];

const RELIGIONS = [
    { id: 1, name: "Nargadek", description: ["Good Death", "Mortality."] },
    { id: 2, name: "Salinda, Miskar, Venir", description: ["Knowledge", "Magic."] },
    { id: 3, name: "Ghouramura", description: ["Laws", "Justice."] },
    { id: 4, name: "Narukami, Iukiko", description: ["Storm", "War", "Honor."] },
    { id: 5, name: "Thetia", description: ["War, Glory", "Strategy."] },
    { id: 6, name: "Bar-Ranagir", description: ["Peace", "Life", "Self-Sacrifice."] },
    { id: 7, name: "Udatz", description: ["Travel", "Transportation", "Navigation."] },
    { id: 8, name: "Murguling, Grevejur", description: ["Forge", "Creation", "Hard Work."] },
    { id: 9, name: "Vostrokan", description: ["Advancement", "Technology", "Gadgets."] },
    { id: 10, name: "Firaous", description: ["Honorable Combat", "Competition", "Wars."] },
    { id: 11, name: "Bachiri", description: ["Luck", "Wealth."] },
    { id: 12, name: "Kysarid", description: ["Hunting", "Survival."] },
    { id: 13, name: "Ortovi", description: ["Trade", "Wealth."] },
    { id: 14, name: "Orog", description: ["Freedom", "War", "Courage."] },
    { id: 15, name: "Krog", description: ["War", "Raiders."] },
    { id: 16, name: "Dalir", description: ["Theft, Thievery."] },
    { id: 17, name: "Tiriricus", description: ["Assassination, Arts."] },
    { id: 18, name: "Gazur", description: ["Violent War, Unbridled Fury."] },
    { id: 19, name: "Zerdam", description: ["Poison, Alchemy, Diseases, Medicine."] }
];

export const CONSTANTS = {
    RACES,
    NATIONS,
    BACKGROUNDS,
    SIZES
};