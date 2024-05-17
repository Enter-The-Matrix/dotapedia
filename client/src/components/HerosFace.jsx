import { useDispatch } from "react-redux";
import { setHeroData } from "../store/slices/heroCardSlice";

function HerosFace({ herodata }) {
  const dispatch = useDispatch()

    const dataForCard =()=>{
        console.log("carddata:",herodata);
        dispatch(setHeroData(herodata))
    }
    return (
      <div className="relative w-32 h-20 transform hover:scale-110 transition-transform" key={herodata._id}
      onClick={dataForCard}
      >
        <img className="w-full h-full object-cover" src={herodata.heroFaceUrl} alt="" />
        <h1 className="text-white font-bold absolute inset-0 flex justify-center items-center text-xs opacity-0 hover:cursor-pointer hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">{herodata.heroName}</h1>
      </div>
    );
  }
  
  export default HerosFace;
  