import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toysObj, onDelete, onLikedToy}) {
  
  const toyComponents = toysObj.map(toy => <ToyCard key={toy.id} toyObj={toy} onDelete={onDelete} onLikedToy={onLikedToy}/>)

  return (
    <div id="toy-collection">{toyComponents}</div>
  );
}

export default ToyContainer;
