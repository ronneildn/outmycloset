import dbConnect from '../../util/dbConnect';

export default function handler(req, res) {
    dbConnect();
    res.status(200).json({ name: 'John Doe' })
}
