import Heros from "../model/heros.model.js";

export const getAll = async (req, res) => {
  try {
    const heros = await Heros.find();
    if (heros) {
      res.status(201).json(heros);
    } else {
      res.status(201).json({ message: "Errors in fetching heros" });
    }
  } catch (error) {
    console.log("Error in addHero", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const addHero = async (req, res) => {
  const {
    heroName,
    description,
    heroImageUrl,
    heroFaceUrl,
    health,
    healthUp,
    mana,
    manaUp,
    strength,
    strengthUp,
    agility,
    agilityUp,
    intelligence,
    intelligenceUp,
    damageLL,
    damageUL,
    range,
    movSpeed,
    armour,
    magicalDefense,
    turnRate,
    dayVision,
    nightVision,
    primaryAttribute,
    attackType,
    roles,
    ability_1_name,
    ability_1_description,
    ability_1_image,
    ability_2_name,
    ability_2_description,
    ability_2_image,
    ability_3_name,
    ability_3_description,
    ability_3_image,
    ability_4_name,
    ability_4_description,
    ability_4_image,
    ability_5_name,
    ability_5_description,
    ability_5_image,
    ability_6_name,
    ability_6_description,
    ability_6_image,
    shard_ability_name,
    shard_ability_description,
    shard_ability_image,
    scepter_ability_name,
    scepter_ability_description,
    scepter_ability_image,
  } = req.body;

  try {
    const existingHero = await Heros.findOne({ heroName: { $regex: new RegExp('^' + heroName + '$', 'i') } })

    if (existingHero) {
      return res.status(400).json({ message: "This hero name is already present" });
    }

    const abilities = [
      { name: ability_1_name, description: ability_1_description, abilityImgUrl: ability_1_image, type: "normal" },
      { name: ability_2_name, description: ability_2_description, abilityImgUrl: ability_2_image, type: "normal" },
      { name: ability_3_name, description: ability_3_description, abilityImgUrl: ability_3_image, type: "normal" },
      { name: ability_4_name, description: ability_4_description, abilityImgUrl: ability_4_image, type: "normal" },
      { name: ability_5_name, description: ability_5_description, abilityImgUrl: ability_5_image, type: "normal" },
      { name: ability_6_name, description: ability_6_description, abilityImgUrl: ability_6_image, type: "normal" },
      { name: shard_ability_name, description: shard_ability_description, abilityImgUrl: shard_ability_image, type: "shard" },
      { name: scepter_ability_name, description: scepter_ability_description, abilityImgUrl: scepter_ability_image, type: "scepter" }
    ];

    const attributes = {
      health,
      healthUp,
      mana,
      manaUp,
      strength,
      strengthUp,
      agility,
      agilityUp,
      intelligence,
      intelligenceUp,
    };

    const attack = {
      attackType,
      damageLL,
      damageUL,
      range,
    };

    const defense = {
      armour,
      magicalDefense,
    };

    const mobility = {
      movSpeed,
      turnRate,
      dayVision,
      nightVision,
    };

    const stats = {
      attributes,
      attack,
      defense,
      mobility,
    };

    const newHero = new Heros({
      heroName,
      description,
      heroImageUrl,
      heroFaceUrl,
      stats,
      primaryAttribute,
      attackType,
      roles,
      abilities,
    });

    if (newHero) {
      await newHero.save();
      res.status(201).json({
        message: `New hero "${newHero.heroName}" updated in database`,
        hero: newHero.heroName,
        _id: newHero._id,
      });
    } else {
      res.status(400).json({ message: "Invalid hero data" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log("Error in addHero", error);
  }
};


export const updateHero = async (req, res) => {
  try {
    const heros = await Heros.find();
    if (heros) {
      res.status(201).json(heros);
    } else {
      res.status(201).json({ message: "Errors in fetching heros" });
    }
  } catch (error) {
    console.log("Error in addHero", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};