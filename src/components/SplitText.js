import { Component } from "react";

class SplitText extends Component{
    render(){
        return(
            <span aria-label={this.props.copy}>
                {this.props.copy.split("").map(function(char, index){
                    return <span className= "span-header" key={index}>{char}</span>
                })}
            </span>
        );
    }
}

export default SplitText;