import PropTypes from "prop-types";
import './petCard.css';

const PetCard = ({ pet }) => {
  return (
    <div className="petCard">
      <h1>{pet.name}</h1>
      <h2>Age: {pet.age}</h2>
      <h2>Breed: {pet.breed}</h2>
    </div>
  );
};

PetCard.propTypes = {
  pet: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  }).isRequired
};

export default PetCard;
