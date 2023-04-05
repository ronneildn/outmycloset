import { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';

import dbConnect from '../../util/dbConnect';

const User 	= require('../../models/user').model

dbConnect();

export default async function login(req, res){
    console.log("login endpoint")
    if(!req.body) res.status(404).json({ message: 'Bad request' });
    //
    // const {username, password} = req.body;
    //
    const KEY = "fghioslfgiuhairjlgouisogdfpasir9ug";
    // console.log("----login POST")
    // console.log(username);
    // console.log(password);
    // //res.status(200).json({ message: 'Bad request! No creds' });
    //
    // if (req.method === 'POST' && username && password) {
    //
    //     try {
    //         //const user = await User.findOne({email, password})
    //
    //         //if (user){
    //         if (password === "password"){
    //             console.log("authenticated");
    //
    //             res.status(200)
    //             // res.json({
    //             //     token: jwt.sign({
    //             //         email,
    //             //         admin: email === "admin"
    //             //     }, KEY)
    //             // });
    //         }
    //         else res.status(400).json({message: "Username or password inncorrect"});
    //     }
    //     catch (error) {
    //         res.status(400)
    //     }
    // }
    // else {
    //     res.status(405).json({ message: 'Bad request! No creds' });
    // }

    return new Promise(resolve => {
        const {username, password} = req.body;

        if (req.method === 'POST' && username && password) {
            try {
                if (password === "password"){
                    console.log("correct creds");
                    const token = jwt.sign({
                        username: username,
                    }, KEY);

                    console.log(token);
                    //res.status(200).json({ result: "hi" });

                    res.status(200).json(
                        {
                            token: jwt.sign({
                                username,
                                admin: username === "admin"
                            }, KEY)
                        }
                    )
                }
                else res.status(400).json({message: "Username or password inncorrect"});

                console.lof("resolve")
                return resolve();
            }
            catch (error) {
                res.status(400)
                return resolve();
            }
        }
        else {
            res.status(405).end();
            return resolve();
        }
  })
}
