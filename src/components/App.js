import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
let url = `http://localhost:3001/pets`

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState("all");
  
  
  function handlePetsClick(){
    if (filters !== "all"){
      url = `http://localhost:3001/pets?type=${filters}`
    }
    else { url = `http://localhost:3001/pets`}
      fetch(url)
      .then((r)=> r.json())
      .then((animalsArray) => {
        setPets(animalsArray)
      })
   
  }
  function handleAdoptPet(petId){
    const newPet = pets.map((pet) => 
    pet.id === petId ? {...pet, isAdopted: true} : pet )
    setPets(newPet)
    
    
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={setFilters} onFindPetsClick={handlePetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser onAdoptPet={handleAdoptPet} pets={pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
