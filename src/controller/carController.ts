import { Request, Response } from "express";
import { Car } from "../model/car";
import { createCar, getCars } from "../model/repository/carRepository";

export const createCarController = (req: Request, res: Response) => {
    const carData = req.body;
    const car = new Car({
        type: carData.type,
        model: carData.model,
        price: carData.price
    })

    const responseJson = {
        type: car.getType,
        model: car.getModel,
        price: car.getPrice,
        message: 'Car was created'
    }

    createCar(car);
    return res.status(200).json(responseJson)

}

export const getCarController = (req: Request, res: Response) => {

    const cars = getCars();

    const responseCarJson = {
        cars: cars
    }

    return res.status(200).json(responseCarJson)
}

