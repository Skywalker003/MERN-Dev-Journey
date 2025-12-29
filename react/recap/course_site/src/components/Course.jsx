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
  const levelOrder = {
  Beginner: 1,
  "Beginner → Intermediate": 2,
  Intermediate: 3,
  Advanced: 4,
};
  return(
    <div className="card-container">
      {[...courses]
      .sort(
        (a, b) => levelOrder[a.level] - levelOrder[b.level]
      )
      .filter((course) => levelOrder[course.level] <= levelOrder["Intermediate"])
      .map(
        ({ id, title, image, description, difficulty, level, shown } /*, index*/) => ( //destructured instead of (course) and then course.id, course.title etc
          <Card
            key={id}// index can also be used as key but id is better
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