
import PetList from "./components/Petlist";
import { useState, useEffect } from "react";
import * as petService from './services/petService';


const App = () => {
  const [petList, setPetList] = useState([]);

  useEffect(()=> {
    const fetchPets = async() => {
      const pets = await petService.fetchPets();
      setPetList(pets);
    }
    fetchPets();
  }, [])
  
  return (
    <>
      <PetList petList={petList}/>
    </>
  )
}

export default App;