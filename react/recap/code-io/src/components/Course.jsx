import html from "../assets/html.jpg";
import Card from "./Card";

const courses = [
  {
    id: 1,
    title: "HTML",
    image: html,
    description:
      "Learn the foundation of web development by building structured and semantic web pages using HTML. Perfect for beginners starting their frontend journey.",
    duration: "Beginner",
    level: "Easy",
  },
  {
    id: 2,
    title: "HTML",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500",
    description:
      "Learn the foundation of web development by building structured and semantic web pages using HTML. Perfect for beginners starting their frontend journey.",
    duration: "Beginner",
    level: "Easy",
  },
  {
    id: 3,
    title: "HTML",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500",
    description:
      "Learn the foundation of web development by building structured and semantic web pages using HTML.",
    duration: "Beginner",
    level: "Easy",
  },
];

export default function Course(){
    return(
        <div className= "card-container">
            {courses.map((course) => (
                <Card
                    key={course.id}
                    title={course.title}
                    image={course.image}
                    description={course.description}
                    duration={course.duration}
                    level={course.level}
                />
            ))}
        </div>
    )
}