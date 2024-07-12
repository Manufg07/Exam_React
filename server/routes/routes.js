const express = require("express");
const router = express.Router();
const vehicle= require("../models/vehicle");
const verifyToken = require("../middleware/authMiddleware")

router.get("/home",verifyToken, async (req, res) => {
  const details = await courses.find({});
  res.json(details);
});

router.post("/vehicle", async (req, res) => {
    try {
      const data = req.body;
      const result = await vehicle.create(data);
      res.status(201).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json();
    }
  });

  router.get('/vehicles', async (req, res) => {
    try {
      const vehicles = await vehicle.find();
      res.status(200).json(vehicles);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch recipes' });
    }
  });
  
  router.get('/api/vehicles/:id', async (req, res) => {
    try {
      const recipe = await vehicle.findById(req.params.id);
      if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
      res.json(recipe);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  

module.exports = router;