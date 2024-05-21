import { useState, useEffect } from "react";
import { createPet, updatePet } from "../services/petService.js";

const PetForm = ({ pet, onSubmit }) => {
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
  })

  const handleChange = (event) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if (pet) {
            await updatePet(formData, pet._id);
        } else {
            await createPet(formData);
        }
        onSubmit();
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
        name="name"
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
        name="name"
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
