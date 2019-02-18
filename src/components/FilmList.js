import React, {Component} from "react";
import Film from "./FilmList";

class FilmList extends Component{
  render(){

    const films = this.props.data.map((film) => {
      return (
        <Film name={film.name} key={film.id}/>
      );
    });

    return (
      <div className="film-list">
        {films}
      </div>
    )

  }
}
export default FilmList;
