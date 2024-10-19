const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    clientId: { type: String, required: true },
    therapistId: { type: String, required: true },
    clientWellBeing: { type: Number, required: true },
    sessionQuestions: {
        client: { type: [Number], required: true },
        therapist: { type: [Number], required: true },
    },
    createdAt: { type: Date, default: Date.now },
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
