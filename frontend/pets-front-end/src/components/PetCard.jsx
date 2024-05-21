import './petCard.css'

const PetCard = ({ pet }) => {
    return(
        <div className="petCard">
            <h1>{pet.name}</h1>
            <h2>Age: {pet.age}</h2>
            <h2>Breed: {pet.breed}</h2>
        </div>
    )
}

export default PetCard;