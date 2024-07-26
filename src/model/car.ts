interface CarProps{
    type: string;
    model: string;
    price: number;
}

export class Car {
    private type: string;
    private model: string;
    private price: number;

    get getType() {
        return this.type;
    }

    get getModel() {
        return this.model;
    }

    get getPrice() {
        return this.price;
    }

    constructor(props: CarProps) {
        this.type = props.type
        this.model = props.model
        this.price = props.price
    }
}