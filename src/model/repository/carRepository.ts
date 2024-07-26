import { Car } from "../car";

let cars: Car[] = [];

export const createCar = (car: Car): Car => {
    cars.push(car);
    return car;
};
export const getCars = (): Car[] => {
    return cars;
};
