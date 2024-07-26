interface UserProps{
    name: string;
    lastname: string;
    age: number;
}

export class User {
    private name: string;
    private lastname: string;
    private age: number;

    get getName() {
        return this.name;
    }

    get getLastName() {
        return this.lastname;
    }

    get getAge() {
        return this.age;
    }

    constructor(props: UserProps) {
        this.name = props.name
        this.lastname = props.lastname
        this.age = props.age
    }


}