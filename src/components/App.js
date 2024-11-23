import React, { useState } from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [filters, setFilters] = useState({ type: "all" });
  const [pets, setPets] = useState([]);

  const handleChangeType = (type) => {
    setFilters({ ...filters, type });
  };

  const handleFindPetsClick = () => {
    let endpoint = "http://localhost:3001/pets";
    if (filters.type !== "all") {
      endpoint += `?type=${filters.type}`;
    }

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setPets(data));
  };

  const handleAdoptPet = (id) => {
    setPets((prevPets) =>
      prevPets.map((pet) =>
        pet.id === id ? { ...pet, isAdopted: true } : pet
      )
    );
  };

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <Filters
        filters={filters}
        onChangeType={handleChangeType}
        onFindPetsClick={handleFindPetsClick}
      />
      <PetBrowser pets={pets} onAdoptPet={handleAdoptPet} />
    </div>
  );
}

export default App;