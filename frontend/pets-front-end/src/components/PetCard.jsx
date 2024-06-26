import './petCard.css'

const PetCard = ({ pet, updateSelected }) => {
    
    const updatePet = () => {
        updateSelected(pet)
    }
    
    return(
        <div className="petCard" onClick={updatePet}>
            <h1>{pet.name}</h1>
            <h2>Age: {pet.age}</h2>
            <h2>Breed: {pet.breed}</h2>
        </div>
    )
}

export default PetCard;