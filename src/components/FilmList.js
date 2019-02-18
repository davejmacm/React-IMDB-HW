import React, {Component} from "react";
import Film from "./Film";

class FilmList extends Component{
  render(){

    const films = this.props.data.map((film) => {
      return (
        <Film film={film.name} key={film.id}/>
      );
    });

    return (
      <div className="film-list">
        <h2>{films}</h2>
      </div>
    )

  }
}
export default FilmList;
