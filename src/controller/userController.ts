import { Request, Response } from "express";
import { User } from "../model/user";
import { createUser, getUsers } from "../model/repository/userRepository";


export const createUserController = (req: Request, res: Response) => {
    const userData = req.body;
    const user = new User({
        name: userData.name,
        lastname: userData.lastname,
        age: userData.age
    })

    const responseJson = {
        name: user.getName,
        lastname: user.getLastName,
        message: 'Send'
    }

    createUser(user);
    return res.status(200).json(responseJson);
}

export const getUserController = (req: Request, res: Response) => {
    const users = getUsers();

    const responseUsersJson = {
        users: users
    }
    return res.status(201).json(responseUsersJson)
}
