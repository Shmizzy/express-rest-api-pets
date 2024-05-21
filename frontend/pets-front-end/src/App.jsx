import PetForm from "./components/PetForm";
import PetList from "./components/Petlist";
import { useState, useEffect } from "react";
import * as petService from './services/petService';


const App = () => {
  const [petList, setPetList] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(()=> {
    const fetchPets = async() => {
      const pets = await petService.fetchPets();
      setPetList(pets);
    }
    fetchPets();
  }, []);

  const updateSelected = async(pet) => {
    setSelectedPet(pet);
    console.log(selectedPet);
  }

  return (
    <>
      <PetList petList={petList} updateSelected={updateSelected}/>
      <PetForm pet={selectedPet} setPetList={setPetList} petList={petList}/>
    </>
  )
}

export default App;