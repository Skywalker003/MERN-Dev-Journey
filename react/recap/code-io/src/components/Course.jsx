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
      <div className= "card-container">
          {courses.map((course) => (
              <Card
                  key={course.id}
                  title={course.title}
                  image={course.image}
                  description={course.description}
                  difficulty={course.difficulty}
                  level={course.level}
              />
          ))}
      </div>
  )
}