const express = require('express');
const Session = require('../models/Session');

const router = express.Router();

router.post('/session', async (req, res) => {
    try {
        const session = new Session(req.body);
        await session.save();
        res.status(201).json(session);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/session/:id', async (req, res) => {
    try {
        const session = await Session.findById(req.params.id);
        if (!session) return res.status(404).json({ message: 'Session not found' });
        res.json(session);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
