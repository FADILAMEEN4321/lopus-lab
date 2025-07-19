import Image from "next/image"
import { teachingData } from "@/data/teaching"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export const metadata = {
  title: "Teaching - Lopus Lab",
  description: "Courses and educational resources offered by Lopus Lab",
}

export default function TeachingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Teaching</h1>
        <p className="text-xl text-gray-600">Courses and educational resources taught by Dr Manu Lopus.</p>
      </div>

      <div className="space-y-16">
        {teachingData.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="relative h-64 md:h-full w-full">
                  <Image src={course.imageSrc || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                </div>
              </div>
              <div className="p-8 md:w-2/3">
                <div className="uppercase tracking-wide text-sm text-teal-600 font-semibold">{course.code}</div>
                <h2 className="mt-2 text-2xl font-bold text-gray-900">{course.title}</h2>
                {/* <p className="mt-2 text-gray-600">Instructor: {course.instructor}</p> */}

                <div className="mt-4 prose max-w-none">
                  <p>{course.description}</p>
                </div>

                {/* {course.topics && course.topics.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Topics Covered</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {course.topics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                )} */}

                {/* {course.schedule && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule</h3>
                    <p className="text-gray-700">{course.schedule}</p>
                  </div>
                )} */}

                {/* {course.syllabus && (
                  <div className="mt-6">
                    <Button asChild variant="outline" className="text-teal-600 border-teal-600 hover:bg-teal-50">
                      <a
                        href={course.syllabus}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        Download Syllabus <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

