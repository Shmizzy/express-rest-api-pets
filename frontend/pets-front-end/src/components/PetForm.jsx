import { useState, useEffect } from "react";
import * as petService from '../services/petService';

const PetForm = ({ pet, setPetList, petList }) => {
  const [ formData, setFormData ] = useState({
    name: '',
    breed: '',
    age: ''
  })

  useEffect(() => {
    if (pet) {
      setFormData({
        name: pet.name,
        breed: pet.breed,
        age: pet.age
      })
    }
  }, [pet]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(petList);
    try {
        if (pet) {
            await petService.updatePet(formData, pet._id);
            const newList = await petService.fetchPets();
            setPetList(newList);
        } else {
            const newPet = await petService.createPet(formData);
            setPetList([...petList , newPet]);
        }
       
    } catch (error) {
        console.log(error);
    }
};

  return (
    <form 
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <label style={{ alignSelf: "flex-start" }}>Name: </label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        style={{
          padding: "6px",
          width: "100%",
        }}
      />
      <label style={{ alignSelf: "flex-start" }}>Breed: </label>
      <input
        type="text"
        name="breed"
        value={formData.breed}
        onChange={handleChange}
        style={{
          padding: "6px",
          width: "100%",
        }}
      />
      <label style={{ alignSelf: "flex-start" }}>Age: </label>
      <input
        type="text"
        name="age"
        value={formData.age}
        onChange={handleChange}
        style={{
          padding: "6px",
          width: "100%",
        }}
      />
      <button type="submit">{pet ? 'Update Pet' : 'Create Pet'}</button>
    </form>
  );
};

export default PetForm;
