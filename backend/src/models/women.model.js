const mongoose = require('mongoose');

const womenSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        subtitle: { type: String, required: true },
        status: { type: String, required: true },
        price: { type: Number, required: true },
        pn: { type: Number, required: true },
        gallary: [
            { type: String, required: true },
            { type: String, required: true },
            { type: String, required: true }
        ],
        discription: { type: String, required: true },
        details: [
            { type: String, required: true },
            { type: String, required: true },
            { type: String, required: true },
            { type: String, required: true },
            { type: String, required: true },
            { type: String, required: true },
            { type: String, required: true },
            { type: String, required: true },
        ],
        style: { type: String, required: true },
        value: [
            { type: String, required: true },
            { type: String, required: true },
            { type: String, required: true },
            { type: String, required: true }
        ],
        rating: { type: String, required: true },
        comfort: { type: String, required: true },
        quality: { type: String, required: true },
        fit: { type: String, required: true },
        length: { type: String, required: true },
    },
    {
        versionKey: false,
        timeStamps: true
    }
);

module.exports = mongoose.model("women", womenSchema)


// mongodb+srv://sanjay_kashyap:<password>@cluster0.nhbuy.mongodb.net/myFirstDatabase?retryWrites=true&w=majorit