const express = require('express');
const router = express.Router();
const FormData = require('../models/FormData');

router.post('/submit', async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.status(200).json({ message: "Form submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/all', async (req, res) => {
  try {
    const data = await FormData.find().sort({ _id: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
