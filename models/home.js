import mongoose from "mongoose";

const homeSchema = new mongoose.Schema({
    donations: {
        number: {type: String },
        updated: {type: Date }
    }
});

module.exports.model = mongoose.models.home || mongoose.model('home', homeSchema);
