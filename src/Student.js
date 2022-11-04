import React,{Component} from "react"
class Student extends Component {
    constructor(props){
        super(props)
        this.state = {
            Id: 101300174,
            Name: "Ronak Gala",
            College: "George Brown College, Toronto"
        }
    }
    render(){
        return (
            <>
                <h3>{this.state.Id}</h3>
                <h3>{this.state.Name}</h3>
                <h4>{this.state.College}</h4>
            </>
        )
    }
}
export default Student