import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {
  const petsList = pets.map((pet)=>{
  
    return <Pet
    key={pet.id}
    type={pet.type}
    gender={pet.gender}
    age={pet.age}
    weight={pet.weight}
    name={pet.name}
    isAdopted={pet.isAdopted}
    pet={pet}
    onAdoptPet={onAdoptPet}
    />
  })
 
  return <div className="ui cards">{petsList}</div>;
}

export default PetBrowser;
