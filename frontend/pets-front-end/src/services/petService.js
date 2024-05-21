
const fetchPets = async() => {
    try {
        const res = await fetch('http://localhost:3000/pets');
        const data = await res.json()
        return data;
    } catch (error) {
        console.log(error);
    }
}

const createPet = async (formData) => {
    try {
        const res = await fetch('http://localhost:3000/pets', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

const updatePet = async (formData, _id) => {
    try {
        const res = await fetch('http://localhost:3000/pets/' + _id, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}


export { fetchPets, createPet, updatePet };