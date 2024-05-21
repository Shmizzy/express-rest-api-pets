import { useState, useEffect } from 'react';
import { createPet, updatePet } from '../services/petService.js';

const PetForm = ({ pet, onSubmit }) => {
  return (
    <form 
      style={{
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center"
      }}>
      <label style={{alignSelf: "flex-start"}}>Name: </label>
      <input 
        style={{
          padding: "6px", 
          width: "100%"
      }}/>
      <label style={{alignSelf: "flex-start"}}>Breed: </label>
      <input style={{padding: "6px", width: "100%"}} />
      <label style={{alignSelf: "flex-start"}}>Age: </label>
      <input style={{padding: "6px", width: "100%"}} />
    </form>
  )
}

export default PetForm;