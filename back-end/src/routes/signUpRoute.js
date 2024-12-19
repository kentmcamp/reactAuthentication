import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getDbConnection } from '../db';

export const signUpRoute = {
    path: '/api/signup',
    method: 'post',
    handler: async (req, res) => {
        try {
            const { email, password } = req.body;
            const db = getDbConnection('react-auth-db');

            const user = await db.collection('users').findOne({ email });
            if (user) {
                return res.sendStatus(409);
            }

            const passwordHash = await bcrypt.hash(password, 10);

            const startingInfo = {
                hairColor: '',
                favoriteFood: '',
                bio: '',
            };

            const result = await db.collection('users').insertOne({
                email,
                passwordHash,
                info: startingInfo,
                isVerified: false,
            });

            const { insertedId } = result;

            jwt.sign({
                id: insertedId,
                email,
                info: startingInfo,
                isVerified: false,
            }, process.env.JWT_SECRET,
            {
                expiresIn: '2d',
            },
            (err, token) => {
                if (err) {
                    console.error('Error signing token:', err);
                    return res.status(500).send(err);
                }
                res.status(200).json({ token });
            });
        } catch (error) {
            console.error('Error during sign up:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
};
