/*import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import js from "../assets/javascript.jpg";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import express from "../assets/express.png";
*/

//import { courses } from "../data/coursesData";
import Card from "./Card";
import React from "react";

export default function Course(){

  const [courseList, setCourseList] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((response) => response.json())
      .then((data) => setCourseList(data));
  }, []);
  if (!courseList) {
    return <div>Loading...</div>;
  }
  
  function handleHide(id){
    setCourseList([...courseList].filter((course) => course.id != id));
  }

  const levelOrder = {
  Beginner: 1,
  "Beginner → Intermediate": 2,
  Intermediate: 3,
  Advanced: 4,
};
  return(
    <div className="card-container">
      {[...courseList]
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
            hide={handleHide}
            id={id}//it seems we cant use key prop so we pass id prop to use 
          />
        )
      )}
    </div>
  )
}