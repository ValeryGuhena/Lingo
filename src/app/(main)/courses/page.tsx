import {getCourses, getUserProgress} from '@/db/query'
import { CoursesList } from './courses-list'

const CourcesPage = async() => {
const coursesData =  getCourses()
const userProgressData =  getUserProgress()
const [courses, userProgress] = await Promise.all([coursesData, userProgressData])
  return (
    <div className='h-full max-w-[913px] px-3 mx-auto'>
      <h1 className="text-2xl font-bold text-muted text-neutral-700">Language Courses</h1>
      <CoursesList courses={courses} activeCourseId={userProgress?.activeCourseId}/>
    </div>
  )
}

export default CourcesPage