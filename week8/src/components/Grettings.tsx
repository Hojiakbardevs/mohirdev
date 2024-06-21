import React, { Component } from 'react'


interface Props {
    name: string;
}

class Grettings extends Component<Props>{

    constructor(props:Props){
        super(props);
    }

    render(): React.ReactNode {
        return <h1>Hello {this.props.name}</h1>
    }
}


export default Grettings