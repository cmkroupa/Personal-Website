import "./Card.css"
import { useState} from 'react'
type Course = {
     title: string;
     code: string;
     description: string;
     grade?: number;
     utilized?: string[];
     
};

type CardProps = {
  title: string;
  university: string;
     courses: Course[];
  inprogress: Course[];
};

export default function Card({ title, university, courses, inprogress }: CardProps) {
  const [isOpen, setIsOpen] = useState("");
     return (
    <div className="card-container">
      <div className="card-title">
        <h1 className="card-program-title">{title}</h1>
          <h2>{university}</h2>
          <button>Completed</button>       
          <button>In Progress</button>       
      </div>
      <div className="education-all">
     {courses.map((course, index) => (
          isOpen === course.code ? (
               <div onClick={() => setIsOpen("")} key={index} className="card-course-selected">
                    <p>{course.title} - {course.grade}%</p>
                    <p>{course.description}</p>
               </div>
          ) : (
               <div onClick={() => setIsOpen(course.code)} key={index} className="card-course">
                    <p>{course.title} - {course.grade}%</p>
               </div>
          )))}
     </div>

    </div>
  );
}
