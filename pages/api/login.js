import { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';

import dbConnect from '../../util/dbConnect';

const User 	= require('../../models/user').model

dbConnect();

export default async function login(req, res){
    const {email, password} = req.body;

    if (req.method === 'POST') {

        try {
            const user = await User.findOne({email, password})

            if (user) res.status(200).json({message: "user found"});
            else res.status(400).json({message: "Username or password inncorrect"});
        }
        catch (error) {
            res.status(400)
        }
    }
    else {
        res.status(405).json({ message: 'Bad request' });
    }
}
