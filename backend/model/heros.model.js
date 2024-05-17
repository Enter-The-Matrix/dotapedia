import mongoose from "mongoose";

const { Schema } = mongoose;

// Define the Ability schema
const AbilitySchema = new Schema({
  name: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  abilityImgUrl: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    enum: ["normal", "shard", "scepter"],
    default: "normal",
  },
});

// Define the Hero schema
const heroSchema = new Schema(
  {
    heroName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    heroImageUrl: {
      type: String,
      required: true,
    },
    heroFaceUrl: {
      type: String,
      required: true,
    },
    stats: {
      attributes: {
        health: { type: Number, required: true },
        healthUp: { type: Number, required: true },

        mana: { type: Number, required: true },
        manaUp: { type: Number, required: true },

        strength: { type: Number, required: true },
        strengthUp: { type: Number, required: true },

        agility: { type: Number, required: true },
        agilityUp: { type: Number, required: true },

        intelligence: { type: Number, required: true },
        intelligenceUp: { type: Number, required: true },
      },
      attack: {
        attackType: { type: String, required: true, enum: ["melee", "range"] },
        damageLL: { type: Number, required: true },
        damageUL: { type: Number, required: true },
        range: { type: Number, required: true },
      },
      defense: {
        armour: { type: Number, required: true },
        magicalDefense: { type: Number, required: true },
      },
      mobility: {
        movSpeed: { type: Number, required: true },
        turnRate: { type: Number, required: true },
        dayVision: { type: Number, required: true },
        nightVision: { type: Number, required: true },
      },
    },
    primaryAttribute: {
      type: String,
      required: true,
      enum: ["agility", "strength", "intelligence", "universal"],
    },
    roles: {
      type: [String],
      required: true,
      enum: [
        "tank",
        "carry",
        "offlaner",
        "support",
        "hard-support",
        "midlaner",
      ],
    },
    abilities: {
      type: [AbilitySchema],
      default: [],
    },
  },
  { timestamps: true }
);

const Heros = mongoose.model("Heros", heroSchema);

export default Heros;




// import mongoose from "mongoose";

// const heroSchema = new mongoose.Schema(
//   {
//     hero: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     heroImageUrl: {
//       type: String,
//       required: true,
//     },
//     heroFaceUrl: {
//       type: String,
//       required: true,
//     },
//     stats: {
//       attributes: {
//         health: { type: Number, required: true },
//         healthUp: { type: Number, required: true },

//         mana: { type: String, required: true },
//         manaUp: { type: Number, required: true },

//         strength: { type: Number, required: true },
//         strengthUp: { type: Number, required: true },

//         agility: { type: Number, required: true },
//         agilityUp: { type: Number, required: true },

//         intelligence: { type: Number, required: true },
//         intelligenceUp: { type: Number, required: true },

//       },
//       attack: {
//         attackType: { type: String, required: true, enum: ["melee", "range"] },
//         damageLL: { type: Number, required: true },
//         damageUL: { type: Number, required: true },
//         range: { type: Number, required: true },
//       },
//       defense: {
//         armour: { type: Number, required: true },
//         magicalDefense: { type: Number, required: true },
//       },
//       mobility: {
//         movSpeed: { type: Number, required: true },
//         turnRate: { type: Number, required: true },
//         dayVision: { type: Number, required: true },
//         nightVision: { type: Number, required: true },
//       },
//     },
//     primaryAttribute: {
//       type: String,
//       required: true,
//       enum: ["agility", "strength", "intelligence", "universal"],
//     },

//     roles: {
//       type: [String],
//       required: true,
//       enum: [
//         "tank",
//         "carry",
//         "offlaner",
//         "support",
//         "hard-support",
//         "midlaner",
//       ],
//     },
//     abilities: {
//       ability1: {
//         name: {
//           type: String,
//           default: null,
//         },
//         description: {
//           type: String,
//           default: null,
//         },
//         abilityImgUrl: {
//           type: String,
//           default: null,
//         },
//       },
//       ability2: {
//         name: {
//           type: String,
//           default: null,
//         },
//         description: {
//           type: String,
//           default: null,
//         },
//         abilityImgUrl: {
//           type: String,
//           default: null,
//         },
//       },
//       ability3: {
//         name: {
//           type: String,
//           default: null,
//         },
//         description: {
//           type: String,
//           default: null,
//         },
//         abilityImgUrl: {
//           type: String,
//           default: null,
//         },
//       },
//       ability4: {
//         name: {
//           type: String,
//           default: null,
//         },
//         description: {
//           type: String,
//           default: null,
//         },
//         abilityImgUrl: {
//           type: String,
//           default: null,
//         },
//       },
//       ability5: {
//         name: {
//           type: String,
//           default: null,
//         },
//         description: {
//           type: String,
//           default: null,
//         },
//         abilityImgUrl: {
//           type: String,
//           default: null,
//         },
//       },
//       ability6: {
//         name: {
//           type: String,
//           default: null,
//         },
//         description: {
//           type: String,
//           default: null,
//         },
//         abilityImgUrl: {
//           type: String,
//           default: null,
//         },
//       },
//       shard_ability: {
//         name: {
//           type: String,
//           default: null,
//         },
//         description: {
//           type: String,
//           default: null,
//         },
//         abilityImgUrl: {
//           type: String,
//           default: null,
//         },
//       },
//       scepter_ability: {
//         name: {
//           type: String,
//           default: null,
//         },
//         description: {
//           type: String,
//           default: null,
//         },
//         abilityImgUrl: {
//           type: String,
//           default: null,
//         },
//       },
//     },
//   },
//   { timestamps: true }
// );

// const Heros = mongoose.model("Heros", heroSchema);

// export default Heros;
