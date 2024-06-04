import { Request, Response, NextFunction } from "express";
import { User } from '../models/User';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const Auth = {

    private:  async (req: Request, res: Response, next: NextFunction) => {

        let sucess = true; 
        // Fazer verificação de auth 

        if(req.headers.authorization) {

            const [authType, token] = req.headers.authorization.split('');

            if(authType === 'Bearer') {

                try {

                    JWT.verify(
                        token, 
                        process.env.JWT_SECRET_KEY as string
                    );

                    sucess = true;

                } catch(err) {

                    console.log("Erro", "DEU ERRO NO JWT");
                }
            }
        }

        if(sucess) {

            next(); 

        } else {

            res.status(403); 
            res.json({ error: 'Não autorizado'});
        }
    }
}