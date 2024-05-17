import { useEffect, useState } from "react";
import useGetAllHeros from "../hooks/useGetAllHeros";
import HeroCard from "../components/HeroCard";
import HerosList from "../components/HerosList";
import { useSelector } from "react-redux";

function LandingPage() {
  const { getAllHeros } = useGetAllHeros();
  const [herosData, setHerosData] = useState("");

  const getData = async () => {
    const data = await getAllHeros();
    setHerosData(data);
  };
  
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log("herosdata:", herosData);
  }, [herosData]);

  const heroCardData = useSelector((state) => state.hero.heroData);

  return (
    <div className="flex">
     
      <div className="w-[70%] h-screen">
        <HerosList herosData={herosData} />
      </div>
      <div className="w-[30%] h-screen">
        <HeroCard herosData={heroCardData} />
      </div>
    </div>
  );
}

export default LandingPage;
