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
    race: CONSTANTS.RACES.filter(item => item.id === "1")[0].name,
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

const skills = {
    Body: {
        Athetics: {
            Attribute: "Strength",
            Level: 0,
            Result: 0
        },
        Acrobatics: {
            Attribute: "Agility",
            Level: 0,
            Result: 0
        },
        Swimming: {
            Attribute: "Agility",
            Level: 0,
            Result: 0
        },
        Jump: {
            Attribute: "Agility",
            Level: 0,
            Result: 0
        },
        Constituion: {
            Attribute: "Resistence",
            Level: 0,
            Result: 0
        }
    },
    Mental: {
        Awareness: {
            Attribute: "Perception",
            Level: 0,
            Result: 0
        },
        Logic: {
            Attribute: "Intelligence",
            Level: 0,
            Result: 0
        },
        Courage: {
            Attribute: "Will",
            Level: 0,
            Result: 0
        },
        Control: {
            Attribute: "Will",
            Level: 0,
            Result: 0
        },
        Persist: {
            Attribute: "Will",
            Level: 0,
            Result: 0
        },
        Investigation: {
            Attribute: "Intelligence",
            Level: 0,
            Result: 0
        }
    },
    Social: {
        Empathy: {
            Attribute: "Charisma",
            Level: 0,
            Result: 0
        },
        FastTalk: {
            Attribute: "Intelligence",
            Level: 0,
            Result: 0
        },
        Intimidation: {
            Attribute: "Charisma",
            Level: 0,
            Result: 0
        },
        Leadership: {
            Attribute: "Charisma",
            Level: 0,
            Result: 0
        },
        SexAppeal: {
            Attribute: "Charisma",
            Level: 0,
            Result: 0
        }
    },
    Nature: {
        Survival: {
            Attribute: "Intelligence",
            Level: 0,
            Result: 0
        },
        Training: {
            Attribute: "Intelligence",
            Level: 0,
            Result: 0
        }
    },
    Robbery: {
        Stealth: {
            Attribute: "Agility",
            Level: 0,
            Result: 0
        },
        Theft: {
            Attribute: "Dexterity",
            Level: 0,
            Result: 0
        },
        LockPicking: {
            Attribute: "Intelligence",
            Level: 0,
            Result: 0
        }
    },
    Occult: {
        Occult: {
            Attribute: "Intelligence",
            Level: 0,
            Result: 0
        },
        Alchemy: {
            Attribute: "Intelligence",
            Level: 0,
            Result: 0
        },
        Ritual: {
            Attribute: "Intelligence",
            Level: 0,
            Result: 0
        },
        Theology: {
            Attribute: "Intelligence",
            Level: 0,
            Result: 0
        }
    },
    Ridding: {
        Driving: {
            Attribute: "Agility",
            Level: 0,
            Result: 0
        },
        Mount: {
            Attribute: "Agility",
            Level: 0,
            Result: 0
        },
        Navigating: {
            Attribute: "Intelligence",
            Level: 0,
            Result: 0
        }
    },
    Craftsmenship: {
        Crafting: {
            Attribute: "Intelligence",
            Level: 0,
            Result: 0
        },
        Healing: {
            Attribute: "Intelligence",
            Level: 0,
            Result: 0
        },
        Performing: {
            Attribute: "Intelligence",
            Level: 0,
            Result: 0
        }
    },
    Combat: {
        Dodge: {
            Attribute: "Agility",
            Level: 0,
            Result: 0
        },
        Shield: {
            Attribute: "Dexterity",
            Level: 0,
            Result: 0
        },
        Brawling: {
            Attribute: "Dexterity",
            Level: 0,
            Result: 0
        },
        Mace: {
            Attribute: "Dexterity",
            Level: 0,
            Result: 0
        },
        Knife: {
            Attribute: "Dexterity",
            Level: 0,
            Result: 0
        },
        Axe: {
            Attribute: "Dexterity",
            Level: 0,
            Result: 0
        },
        Sword: {
            Attribute: "Dexterity",
            Level: 0,
            Result: 0
        },
        Polearm: {
            Attribute: "Dexterity",
            Level: 0,
            Result: 0
        },
        Whip: {
            Attribute: "Dexterity",
            Level: 0,
            Result: 0
        },
        Throw: {
            Attribute: "Dexterity",
            Level: 0,
            Result: 0
        },
        Bow: {
            Attribute: "Dexterity",
            Level: 0,
            Result: 0
        },
        Crossbow: {
            Attribute: "Dexterity",
            Level: 0,
            Result: 0
        },
        Pistol: {
            Attribute: "Dexterity",
            Level: 0,
            Result: 0
        },
        Rifle: {
            Attribute: "Dexterity",
            Level: 0,
            Result: 0
        },
        Siege: {
            Attribute: "Intelligence",
            Level: 0,
            Result: 0
        },
        Channeling: {
            Attribute: "Will",
            Level: 0,
            Result: 0
        }
    }

const stats = {
    passiveAttention: 0,
    an: 0,
    life: {current: 0, total: ''},
    criticalDamage: {current: 0, total: 0},
    iniciative: 0,
    move: 0,
    fervor: {current: 0, total: 0},
    blood: {current: 0, total: 0},
    breath: {current: 0, total: 0},
    condition: []
};

export const data = {
    info,
    attributes,
    skills
    stats
};