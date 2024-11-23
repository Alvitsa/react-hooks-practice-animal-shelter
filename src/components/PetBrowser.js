import React from "react";
import Pet from "./Pet"; // Ensure you import the Pet component

function PetBrowser({ pets, onAdoptPet }) {
  return (
    <div className="ui cards" data-testid="pet-list">
      {pets.map((pet) => (
        <div key={pet.id}>
          <Pet pet={pet} onAdoptPet={onAdoptPet} />
        </div>
      ))}
    </div>
  );
}

export default PetBrowser;