import mongoose from "mongoose";

const updateSchema = new mongoose.Schema({
    imgUrl: {type: String },
    title: {type: String },
    subTitle: {type: String },
    description: {type: String },
    link: {type: String },
    created: {type: Date },
    page: {type: Boolean }
});

module.exports.model = mongoose.models.update || mongoose.model('update', updateSchema);
