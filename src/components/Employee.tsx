import React, { useState } from "react";

interface IProps{}
interface IState {
    name: string;
    age: number;
    title: string;
}

let Employee:React.FC<IProps> = () => {

    let [state, setState] = useState<IState>({
        name: "Duyen",
        age: 25,
        title: "Huynh",
    });
    return(
        <React.Fragment>
            <div>
                Employee component
            </div>
            <div className="list-group">
                <div className="list-group-item">Name: {state.name}</div>
                <div className="list-group-item">Age: {state.age}</div>
                <div className="list-group-item">Title: {state.title}</div>
            </div>
        </React.Fragment>
    )
};

export default Employee;