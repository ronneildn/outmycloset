import { hash } from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';

import dbConnect from '../../util/dbConnect';


dbConnect();

export default async function signup(
    req,
    res
){


    // if (req.method === 'POST') {
    //     hash(req.body.password, 10, async function(err, hash) {
    //         // Store hash in your password DB.
    //
    //         const statement = await db.prepare(
    //             'INSERT INTO person (name, email, password) values (?, ?, ?)'
    //         );
    //
    //         const result = await statement.run(req.body.name, req.body.email, hash);
    //         result.finalize();
    //
    //         const person = await db.all('select * from person');
    //         res.json(person);
    //     });
    // }
    // else {
    //     res.status(405).json({ message: 'We only support POST' });
    // }
    res.status(200).json({ success: true, data: "it works" });
}
