import React, {Component} from "react";

class Film extends Component{

  render(){
    return(<div className="film">
      <p><a href={this.props.url}>{this.props.name}</a></p>
    </div>);
  };
}

export default Film;
