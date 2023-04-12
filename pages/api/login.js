import { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';

import dbConnect from '../../util/dbConnect';

const User 	= require('../../models/user').model

dbConnect();

export default async function login(req, res){
    if(!req.body) res.status(404).json({ message: 'Bad request' });

    const KEY = "fghioslfgiuhairjlgouisogdfpasir9ug";
    const {username, password} = req.body;

    if (req.method === 'POST' && username && password) {
        try {

            const user = await User.findOne({username,password})
            //console.log(user);

            if (user){
                console.log("correct creds");
                const token = jwt.sign({
                    username: username,
                }, KEY);

                res.status(200).json(
                    {
                        token: jwt.sign({
                            username: user.username,
                            isAdmin: user.isAdmin
                        }, KEY)
                    }
                )
            }
            else res.status(400).json({message: "Username or password inncorrect"});
        }
        catch (error) {
            res.status(400).end();
        }
    }
    else {
        res.status(405).end();
    }
}
