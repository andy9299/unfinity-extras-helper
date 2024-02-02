import React from "react";
import { useNavigate } from "react-router-dom";


const Stickers = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav class="bg-red-700 hover:bg-red-800 text-white sticky top-0 py-4 text-center select-none" 
      onClick={() => navigate(-1)}>
        Go Back
      </nav>
      <div className="h-screen flex flex-col items-center content-center">
        <button 
        id="3"
        class="m-auto h-32 w-64 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
        onClick={() => {navigate("/stickers/picker/3")}}
        >
          Select 3
        </button>
        <button 
        id="10"
        className="m-auto h-32 w-64 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
        onClick={() => {navigate("/stickers/picker/10")}}
        >
          Build/Use a Deck
        </button>
      </div>
    </>

  );
};

export default Stickers;