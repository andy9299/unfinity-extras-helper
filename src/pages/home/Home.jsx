import { useNavigate } from "react-router-dom";

const Home = () => {  
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center content-center">
      <h1 className="py-8 text-8xl	">Unfinity Extras Helper</h1>
      <button 
      class="m-auto h-32 w-64 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
      onClick={()=>{navigate("/stickers")}}
      >
        Stickers
      </button>
      <button 
      class="m-auto h-32 w-64 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
      onClick={()=>{alert("Coming Soon")}}
      >
        Attractions
      </button>
    </div>
  );
};

export default Home;