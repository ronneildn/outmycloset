import {NextApiRequest, NextApiResponse} from "next";

export default function(req: NextApiRequest, res: NextApiResponse){
    const { token } = req.body;
    const {admin} = jwt.verify;
}
