import React from "react";


class Task3 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            color:"red"
        }
        
    }
    // static getDerivedStateFromProps(props, state) {
    //     return {color: props.favcol };
    //   }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({color:"blue"})
        }, 1000)
    }
    render(){
        return <>
        <h1>My Favorite Color is {this.state.color}</h1></>
    }
}

export default Task3;