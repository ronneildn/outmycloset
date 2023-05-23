import dbConnect from '../../util/dbConnect';

const Home 	= require('../../models/home').model
const _id = "6465619c74929180bfe1ff97";

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const notes = await Home.find({});

                res.status(200).json({ success: true, data: notes })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':

            const query = { _id: _id};
            const body = { $set: { "donations.number": req.body, "donations.updated": new Date() } };

            try {
                let response = await Home.findOneAndUpdate(query, body, {new: true});
                console.log(response);

                res.status(201).json({ success: true, data: response.donations.number})
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}
