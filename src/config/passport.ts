import { Request, Response, NextFunction } from "express";
import passport from "passport";
import { BasicStrategy } from "passport-http";
import {User} from '../models/User';
import dotenv from 'dotenv';
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt"; 
import jwt from 'jsonwebtoken';


dotenv.config();

const notAuthorizedJson = { status: 401, message: 'Não autorizado'};

const options = {

    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET as string 
}

passport.use(new JWTStrategy(options, async (payload, done) => {

    const user = await User.findByPk(payload.id); 

    if(user) {

        return done(null, user); 

    } else {

        return done(notAuthorizedJson, false);
    }
}))

passport.use(new BasicStrategy(async (email: string, password: string, done) => {

    if (email && password) {
        try {
            const user = await User.findOne({
                where: { email, password }
            });

            if (user) {
                return done(null, user);
            }
        } catch (err) {
            return done(err);
        }
    }

    return done(null, false);
}));

export const privateRoute = (req: Request, res: Response, next: NextFunction) => {

    passport.authenticate('basic', (err: any, user: any) => {
        
        if (err) {
            return next(err);
        }

        req.user = user;
        return user ? next() : res.status(401).json(notAuthorizedJson);

    })(req, res, next);

};

export const generateToken = (data: object) => {

    return jwt.sign(data, process.env.JWT_SECRET as string);
}

export const privateRoute_1 = (req: Request, res: Response, next: NextFunction) => {

    passport.authenticate('jwt', (err: any, user: any) => {

        req.user = user; 
        return user ? next() : next(notAuthorizedJson); 
    })(req, res, next); 
}


export default passport;