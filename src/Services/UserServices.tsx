import { IUser } from "../models/IUser";

export class UserServices{

    private static users: IUser[] = [
        {
            sno: "001",
            name: "nva",
            age: 20,
            designation: "Dev",
            company: "TMA"
        },
        {
            sno: "002",
            name: "nva",
            age: 35,
            designation: "PM",
            company: "TMA"
        },
        {
            sno: "003",
            name: "NVB",
            age: 40,
            designation: "sr.Dev",
            company: "TMA"
        },
    ];

    public static getAllUsers(){
        return this.users;
    }

}