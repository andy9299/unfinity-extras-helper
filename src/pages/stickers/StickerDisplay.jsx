import React, { useEffect, useState } from "react";

const StickerDisplay = ({name, art, ability, stats, imageName}) => {

  return (
  <div className="flex flex-col sm:flex-row h-full w-full items-center content-center ">
    <div className="w-64 flex-none pb-2 ">
      <img 
        src={`../../sticker-sheets/${imageName}`} 
        alt={name}/>
    </div>
      <div className="p-2">
        {name.split(" ").map((splitName)=> {
          return (
            <div key={`${splitName}-div`}>
              <label for={splitName} className="block mb-2 text-sm font-medium text-gray-900" key={`${splitName}-label`}>{splitName}</label>
              <input type="text" id={splitName} className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" key={`${splitName}-input`}/>
            </div>
          )
        })}
      </div>
      <div className="p-2">
      {art.map((splitArt)=> {
        return (
          <div key={`${splitArt}-art`}>
            <label for={splitArt} className="block mb-2 text-sm font-medium text-gray-900" key={`${splitArt}-label`}>{splitArt}</label>
            <input type="text" id={splitArt} className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" key={`${splitArt}-input`}/>
          </div>
        )
      })}
    </div>
    <div className="p-2">
      {ability.split("\n").map((splitAbility)=>{
        return (
          <div key={`${splitAbility}-ability`}>
            <label for={splitAbility} className="block mb-2 text-sm font-medium text-gray-900" key={`${splitAbility}-label`}>{splitAbility}</label>
            <input type="text" id={splitAbility} className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" key={`${splitAbility}-input`}/>
          </div>
        )
      })}
    </div>
    <div className="p-2">
      {stats.split("\n").map((splitStats)=>{
        return (
          <div key={`${splitStats}-stats`}>
            <label for={splitStats} className="block mb-2 text-sm font-medium text-gray-900" key={`${splitStats}-label`}>{splitStats}</label>
            <input type="text" id={splitStats} className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" key={`${splitStats}-input`}/>
          </div>
        )
      })}
    </div>
  </div>
  );
};

export default StickerDisplay;