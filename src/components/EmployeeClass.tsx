import React from "react";


interface IProps{}
interface IState{
    name: string,
    age: number;
    title: string;
}
export class EmployeeClass extends React.Component<IProps, IState> {
    constructor(prop: IProps){
        super(prop)
        this.state = {
            name: "Duyen",
            age: 25,
            title: "Huyen",
        } as IState
    }
    render(){
        let {name, age, title} = this.state
        return(
            <React.Fragment>
                <div>Employee class component</div>
                <div className="list-group">
                <div className="list-group-item">Name: {name}</div>
                <div className="list-group-item">Age: {age}</div>
                <div className="list-group-item">Title: {title}</div>
            </div>
            </React.Fragment>
        );
    }
}