const express = require('express');
const router = express.Router();

const Pet = require('../models/pet.js');


router.post('/' , async (req, res) => {
    try{
        const createdPet = await Pet.create(req.body);
        res.status(201).json(createdPet);
    }catch(e) {
        res.status(500).json({ error: e.message });
    }
});

router.get('/' , async (req, res) => {
    try{
        const allPets = await Pet.find();
        res.status(200).json(allPets);
    }catch(e){
        res.status(500).json({error: e.message});
    }
});

router.get('/:petId' , async (req, res) => {
    try{
        const foundPet = await Pet.findById(req.params.petId);
        if(!foundPet) {
            res.status(404);
            throw new Error('Pet not found.');
        }
        res.status(200).json(foundPet);
    }catch(e){
        res.status(500).json({error: e.message});
    }
});

router.delete('/:petId', async(req, res) => {
    try{
        const deletePet = await Pet.findByIdAndDelete(req.params.petId);
        if(!deletePet){
            res.status(404);
            throw new Error('Pet not found.');
        }
        res.status(200).json(deletePet);
    }catch(e){
        res.status(500).json({error: e.message})
    }
});

router.put('/:petId', async (req, res) => {
    try{
        const updatePet = await Pet.findByIdAndUpdate(req.params.petId, req.body, {
            new: true,
        });
        if (!updatePet) {
            res.status(404);
            throw new Error('Pet not found.');
          }
        res.status(200).json(updatePet);
    }catch(e){
        res.status(500).json({error: e.message});
    }
})



module.exports = router;