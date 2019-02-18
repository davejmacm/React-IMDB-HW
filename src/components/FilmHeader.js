import React, {Component} from "react";

class FilmHeader extends Component{

render(){

  return(
    <div classname="header">
      <h2>{this.props.header}</h2>
    </div>
  )

}



}
export default FilmHeader;
