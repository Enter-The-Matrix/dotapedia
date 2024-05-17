import strengthIcon from "../assets/primaryAttributes/strength.png";
import agilityIcon from "../assets/primaryAttributes/agility.png";
import intelligenceIcon from "../assets/primaryAttributes/intelligence.png";
import universalIcon from "../assets/primaryAttributes/universal.png";

function HeroCard({ herosData }) {

  if (!herosData || herosData.length === 0) {
    return null; // Don't render anything if herosData is empty
  }


  return (
    <div className="border-4 border-red-400 p-4">
      {/* ------------------------------------------------------------------------------------------------ */}
      <div className="flex items-center mb-4">
        <img className="w-8 h-8 mr-2" src={universalIcon} alt="" />
        <h1 className="text-3xl">{herosData.heroName.toUpperCase()}</h1>
      </div>
      {/* ------------------------------------------------------------------------------------------------ */}
      <div className="flex flex-col mb-2">
        {/* hero main image div */}
        <div className="flex ">
          <img
            className="w-72 h-65 object-cover"
            src={herosData.heroImageUrl}
            alt={herosData.hero}
          />
          {/* ---------------------------------------------------------------------------------------------------------- */}
          {/* stats */}
          <div className="">
            <div className="mb-2">
              <h1 className=" text-xl ">Attack</h1>
              <h1 className=" text-sm ">
                Attack Type: {herosData.stats.attack.attackType}
              </h1>
              <h1 className=" text-sm ">
                Attack: {herosData.stats.attack.damageLL}-
                {herosData.stats.attack.damageUL}{" "}
              </h1>
              <h1 className=" text-sm ">
                Attack Range: {herosData.stats.attack.range}
              </h1>
            </div>

            <div className="mb-2">
              <h1 className=" text-xl ">Defense</h1>
              <h1 className=" text-sm ">Armour: {herosData.stats.defense.armour}</h1>
              <h1 className=" text-sm ">
                Magic Resistance: {herosData.stats.defense.magicalDefense}%{" "}
              </h1>
            </div>

            <div className="mb-2">
              <h1 className=" text-xl ">Mobility</h1>
              <h1 className=" text-sm ">
                Movement Speed: {herosData.stats.mobility.movSpeed}
              </h1>
              <h1 className=" text-sm ">
                {" "}
                Turn Rate: {herosData.stats.mobility.turnRate}
              </h1>
              <h1 className=" text-sm ">
                Vision: {herosData.stats.mobility.dayVision}/
                {herosData.stats.mobility.nightVision}
              </h1>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------------------------- */}

        {/* attributes */}
        <div className="flex flex-col justify-center items-center ">
          <div className="flex justify-center items-center gap-14">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-xl font-semibold ">Health</h1>
              <div className="flex gap-1">
              <h1 className=" font-bold ">{herosData.stats.attributes.health}</h1>
              <h1>(Gains {herosData.stats.attributes.strengthUp} per lvl)</h1>{" "}</div>
            </div>

            <div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-xl font-semibold ">Mana</h1>
                <div className="flex gap-1">
                <h1 className=" font-bold ">{herosData.stats.attributes.mana}</h1>
                <h1>(Gains {herosData.stats.attributes.strengthUp} per lvl)</h1>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img className="w-6 h-6" src={strengthIcon} alt="" />
            <h1 className=" font-bold ">{herosData.stats.attributes.strength}</h1>
            <h1>(Gains {herosData.stats.attributes.strengthUp} per lvl)</h1>
          </div>

          <div className="flex items-center gap-2">
            <img className="w-6 h-6" src={agilityIcon} alt="" />
            <h1 className=" font-bold ">{herosData.stats.attributes.agility}</h1>
            <h1>(Gains {herosData.stats.attributes.agilityUp} per lvl)</h1>
          </div>

          <div className="flex items-center gap-2">
            <img className="w-6 h-6" src={intelligenceIcon} alt="" />
            <h1 className=" font-bold ">
              {herosData.stats.attributes.intelligence}
            </h1>
            <h1>(Gains {herosData.stats.attributes.intelligenceUp} per lvl)</h1>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------------------------- */}
        {/* abilities div */}
        <div className="flex flex-col m-auto">
          <div className="flex flex-wrap">
            {herosData.abilities.map(
              (ability, index) =>
                ability.abilityImgUrl && (
                  <img
                    key={index}
                    className="w-16 h-16 m-1 object-cover"
                    src={ability.abilityImgUrl}
                    alt={ability.name}
                  />
                )
            )}
          </div>
        </div>
      </div>
      {/* -----------------------------------------------------------------------------------------------    */}
      <div className="flex justify-center mt-1">
        <div className="w-[10%]">
          {/* <img
            className="w-full h-auto object-cover"
            src={hero.abilities[0].abilityImgUrl}
            alt={hero.ability1?.name}
          /> */}
        </div>
        {/* <div className="w-[90%] p-1">
          <h1 className="text-lg">{hero.abilities[0].name}</h1>
          <h1 className="text-sm">{hero.abilities[0].description}</h1>
        </div> */}
      </div>
      <button className="p-2 bg-red-200 mt-2 w-full text-3xl font-bold">
        Show Details
      </button>
    </div>
  );
}

export default HeroCard;
