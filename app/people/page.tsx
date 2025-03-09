import { peopleData } from "@/data/people"
import { TeamMemberCard } from "@/components/team-member-card"

export const metadata = {
  title: "People - Lopus Lab",
  description: "Meet the team at Lopus Lab working on cellular nanomedicine and chemical biology research",
}

export default function PeoplePage() {
  // Group people by their category
  const facultyMembers = peopleData.filter((person) => person.category === "faculty")
  const postdocs = peopleData.filter((person) => person.category === "postdoc")
  const phdStudents = peopleData.filter((person) => person.category === "phd")
  const masters = peopleData.filter((person) => person.category === "masters")
  const undergrads = peopleData.filter((person) => person.category === "undergrad")
  const staff = peopleData.filter((person) => person.category === "staff")
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
      {postdocs.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b">Postdoctoral Researchers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {postdocs.map((person) => (
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
      {phdStudents.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b">PhD Students</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {phdStudents.map((person) => (
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
      {masters.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b">Masters Students</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {masters.map((person) => (
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

      {/* Undergraduate Students */}
      {undergrads.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b">Undergraduate Students</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {undergrads.map((person) => (
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

      {/* Staff */}
      {staff.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b">Staff</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {staff.map((person) => (
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

      {/* Alumni */}
      {alumni.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b">Alumni</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {alumni.map((person) => (
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
    </div>
  )
}

