import { peopleData } from "@/data/people"
import { TeamMemberCard } from "@/components/team-member-card"

export const metadata = {
  title: "People - Lopus Lab",
  description: "Meet the team at Lopus Lab working on cellular nanomedicine and chemical biology research",
}

export default function PeoplePage() {
  // Group people by their category
  const facultyMembers = peopleData.filter((person) => person.category === "faculty")
  const GratuatedCoguided = peopleData.filter((person) => person.category === "gratuated/co-guided")
  const PostDoctorals = peopleData.filter((person) => person.category === "Postdoctoral")
  const ProjectStudents = peopleData.filter((person) => person.category === "Project Students")
  const alumni = peopleData.filter((person) => person.category === "alumni")

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
        <p className="text-xl text-gray-600">
          Meet the dedicated researchers, students, and staff who make our work possible.
        </p>
      </div>

      {/* Faculty */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b">Principal Investigator</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {facultyMembers.map((person) => (
            <TeamMemberCard
              key={person.id}
              name={person.name}
              role={person.title}
              imageSrc={person.imageSrc}
              id={person.id}
            />
          ))}
        </div>
      </section>

      {/* Postdoctoral Researchers */}
      {GratuatedCoguided.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b">Gratuated/Co-guided</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {GratuatedCoguided.map((person) => (
              <TeamMemberCard
                key={person.id}
                name={person.name}
                role={person.title}
                imageSrc={person.imageSrc}
                id={person.id}
              />
            ))}
          </div>
        </section>
      )}

      {/* PhD Students */}
      {PostDoctorals.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b">Postdoctoral Fellows trained in the Lab</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {PostDoctorals.map((person) => (
              <TeamMemberCard
                key={person.id}
                name={person.name}
                role={person.title}
                imageSrc={person.imageSrc}
                id={person.id}
              />
            ))}
          </div>
        </section>
      )}

      {/* Masters Students */}
      
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b">Project Students</h2>
          <div className="">
            <p className="text-lg font-semibold text-gray-900">Samridhi, Anisha, Bhadra, Greeshma</p>
          </div>
        </section>
 

      {/* Alumni */}
     
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b">Alumni</h2>
          <div className="">
           
          <p className="text-lg font-semibold text-gray-900">Mushakn Sharma, Rakshita Madammaki, Athira CA, Ananya Sachdev, Swati Sudipta, Mr. Prasad Mohite, Ms Akansha Shah,  Ms. Shefali Gedam, Dr Grace Nirmala, Mr Sujith Remulla, Mr Mohammed Nisham,  Ms Ankita Gupta, Mr Ashish Beck, Ms. Nayana Nambiar, Ms. Tejashree Mahaddalkar, Dr. Sanith C, Dr. Madhura Pradhan, Mr. Abhishek Howlader,  Mr. Swagat Pradhan, Ms. Neha Mohanpuria, Mr. Chaitanya Krishna, Ms. Sailee Lavekar</p>

          </div>
        </section>

    </div>
  )
}

