import React from "react";

interface IState { }
interface IProps {
    name?: string;
    age?: number;
    title?: string;
}

export class CustomerClass extends React.Component<IProps, IState>{
    constructor(prop: IProps) {
        super(prop);
    }
    render() {
        
        let {name, age, title} = this.props;

        return (
            <React.Fragment>
                <div>Customer class Component</div>
                <ul className="list-group">
                    <li className="list-group-item">
                        Name: {name}
                    </li>
                    <li className="list-group-item">
                        Age: {age}
                    </li>
                    <li className="list-group-item">
                        Title: {title}
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}