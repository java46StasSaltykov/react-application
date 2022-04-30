import React from "react";
import { useSelector } from "react-redux";
import { coursesService } from "../../config/service-config";
import { Course } from "../../models/Course";
import { StateType } from "../../redux/store";
export let curCourses: Course[] = new Array<Course>();
export let curCoursesId: number[] = new Array<number>();
const Courses: React.FC = () =>
{
    const courses: Course[] = useSelector<StateType, Course[]>(state => state.courses);
    curCourses = courses;
    curCoursesId = courses.map(c => c.id);
    return <ul>
        {courses.map(c => <li key={c.id}>{JSON.stringify(c)}</li>)}
    </ul>
}
export default Courses;
