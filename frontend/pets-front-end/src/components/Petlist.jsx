//Defines a functional component called PetList that takes props as input. It maps over the petList array in the props to create a list of pets with their names displayed as list items. Each pet name is clickable, triggering the updateSelected function when clicked.


const PetList = (props) => { 
  const pets = props.petList.map((pet) => (
    <a key={pet._id} onClick={() => props.updateSelected(pet)}>
      <li>{pet.name}</li>
    </a>
  ));

  return (
    <div>
      <h1>Pet List</h1>
      {!props.petList.length ? <h2>No Pets Yet!</h2> : <ul>{pets}</ul>}
    </div>
  );
};

export default PetList;
