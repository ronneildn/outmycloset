import { hash } from 'bcrypt';

import dbConnect from '../../util/dbConnect';

const User 	= require('../../models/user').model

dbConnect();

export default async function signup(req, res){

    if (req.method === 'POST') {
        try {
            const user = await User.create(req.body);

            if (user) res.status(200).json({message: "user created"});
            else res.status(400).json({message: "Unable to create user"});
        }
        catch (error) {
            res.status(400).json({message: "Unable to create user"});
        }
    }
    // else {
    //     res.status(405).json({ message: 'We only support POST' });
    // }
    if (req.method === 'GET') {

        res.status(400).json({message: "Username or password inncorrect"});
        // try {
        //     const user = await User.findOne({email, password})
        //
        //     if (user) res.status(200).json({message: "user found"});
        //     else res.status(400).json({message: "Username or password inncorrect"});
        // }
        // catch (error) {
        //     res.status(400)
        // }
    }
    else {
        res.status(405).json({ message: 'Bad request' });
    }
}
