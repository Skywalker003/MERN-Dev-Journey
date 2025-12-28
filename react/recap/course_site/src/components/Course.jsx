/*import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import js from "../assets/javascript.jpg";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import express from "../assets/express.png";
*/

import { courses } from "../data/coursesData";
import Card from "./Card";

export default function Course(){
  return(
    <div className="card-container">
      {courses.map(
        ({ id, title, image, description, difficulty, level, shown }) => ( //destructured instead of (course) and then course.id, course.title etc
          <Card
            key={id}
            title={title}
            image={image}
            description={description}
            difficulty={difficulty}
            level={level}
            shown={shown}
          />
        )
      )}
    </div>
  )
}