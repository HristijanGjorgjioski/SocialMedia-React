import jwt from 'jsonwebtoken';

const secret = "social-media";

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        
        let decodeData;

        if(token && token.length < 500) {
            decodeData = jwt.verify(token, secret);

            req.userId = decodeData?.indexOf;
        }
        next();
    } catch (error) {
        console.log(error);
    }
};

export default auth;
