import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useLocalStorageState from "../../hooks/useLocalStorageState";
import stickerData from "./stickerData";
import StickerDisplay from "./StickerDisplay";

const StickerPicker = () => {
  let { num } = useParams();
  num = Number(num)
  const [ localDeck, setLocalDeck ] = useLocalStorageState(`stickers-${num}`, '[]')
  const [ display, setDisplay ] = useState(false)
  const [ shuffled, setShuffled ] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    if (num !== 3 && num !== 10) {
      navigate(-1);
    }
  }, [num, navigate]);

  const handleButtonClick = () => {
    let checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let ids = Array.from(checkedBoxes, node => node.id)
    if (ids.length === num) {
      try {
        setLocalDeck(JSON.stringify(ids))
      } catch(err) {
        alert('Failed to save locally. Proceeding with chosen cards.')
      } finally {
        let shuffledIds = ids
          .map(value => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value)
        setShuffled(shuffledIds.slice(0,3))
        setDisplay(true)
      }
    }
    else {
      alert(`Please only have ${num} cards! (Currently selected ${ids})`)
    }
  }

  const handleImageClick = (e) => {
    e.target.classList.toggle("border-8")
    e.target.classList.toggle('border-green-700')
  }

  return (
    <>
      {!display && <>
        <nav class="flex flex-row text-white sticky top-0 select-none h-14 w-screen " >
          <div className="flex items-center justify-center bg-red-700 hover:bg-red-800 flex-2 px-8"
          onClick={() => navigate(-1)}
          >
            Go Back
          </div>
          <div className="flex items-center justify-center bg-slate-600 hover:bg-slate-700 flex-1"  
          onClick={handleButtonClick}
          >
            {num === 3 ? "Pick 3 cards to use" : "Pick 10 then 3 will be selected randomly"}
          </div>
        </nav>
        <div className="pt-5 grid items-center justify-items-center gap-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {stickerData.map((sticker) => {
            let isSaved = JSON.parse(localDeck).includes(sticker.id.toString())
            return(
              <>
                <input 
                defaultChecked={ isSaved ? true : false} 
                type="checkbox" 
                id={sticker.id} 
                className="hidden"
                key={`${sticker.id}-checkbox`} />
                <label for={sticker.id} key={`${sticker.id}-label`}>
                  <img
                  key={`${sticker.id}-img`}
                  onClick={handleImageClick}
                  src={`.../sticker-sheets/${sticker.imageName}`} 
                  alt={sticker.name} 
                  className={`w-96 ${isSaved ? "border-8 border-green-700"	: "" }`}/>      
                </label>
              </>
            )
          })}
        </div>
      </>}
      {display && 
      <>
        <nav class="bg-red-700 hover:bg-red-800 text-white sticky top-0 py-4 text-center select-none" 
        onClick={() => navigate(-1)}>
          Go Back
        </nav>
        <div className="pt-5">
        {shuffled.map( (id) => {
          let randomStickerData = stickerData.find(sticker => sticker.id === Number(id))
          return(
            <StickerDisplay {...randomStickerData}/>
          )
        })}
        </div>

      </>}
  </>
  );
};

export default StickerPicker;