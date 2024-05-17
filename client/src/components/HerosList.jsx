import HerosFace from "./HerosFace";

function HerosList({ herosData }) {
  if (!herosData || herosData.length === 0) {
    return null; // Don't render anything if herosData is empty
  }

  const strengthHeros = herosData.filter(
    (hero) => hero.primaryAttribute === "strength"
  );
  const agilityHeros = herosData.filter(
    (hero) => hero.primaryAttribute === "agility"
  );
  const intelligenceHeros = herosData.filter(
    (hero) => hero.primaryAttribute === "intelligence"
  );
  const universalHeros = herosData.filter(
    (hero) => hero.primaryAttribute === "universal"
  );

  console.log("inside list", herosData);
  return (
    <div className="grid grid-rows-4 h-full">
      <div className="bg-gray-200 flex flex-wrap">
        <h1 className="inline-block whitespace-nowrap">Strength</h1>
        {strengthHeros.map((hero) => (
          <HerosFace key={hero._id} herodata={hero} />
        ))}
      </div>
      <div className="bg-gray-300 flex flex-wrap">
      <h1 className="">Agility</h1>
        {agilityHeros.map((hero) => (
          <HerosFace key={hero._id} herodata={hero} />
        ))}
      </div>
      <div className="bg-gray-400 flex flex-wrap">
      <h1 className="">Intelligence</h1>
        {intelligenceHeros.map((hero) => (
          <HerosFace key={hero._id} herodata={hero} />
        ))}
      </div>
      <div className="bg-gray-600 flex flex-wrap">
      <h1 className="">Universal</h1>
        {universalHeros.map((hero) => (
          <HerosFace key={hero._id} herodata={hero} />
        ))}
      </div>
    </div>
  );
}

export default HerosList;
