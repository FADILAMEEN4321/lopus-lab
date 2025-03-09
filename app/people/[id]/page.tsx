import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { peopleData } from "@/data/people"

interface PersonPageProps {
  params: {
    id: string
  }
}

export function generateMetadata({ params }: PersonPageProps) {
  const person = peopleData.find((p) => p.id === params.id)

  if (!person) {
    return {
      title: "Person Not Found - Lopus Lab",
    }
  }

  return {
    title: `${person.name} - Lopus Lab`,
    description: `Learn about ${person.name}, ${person.title} at Lopus Lab`,
  }
}

export default function PersonPage({ params }: PersonPageProps) {
  const person = peopleData.find((p) => p.id === params.id)

  if (!person) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/people" className="inline-flex items-center text-teal-600 hover:text-teal-800 mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Team
      </Link>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg mb-6">
              <Image src={person.imageSrc || "/placeholder.svg"} alt={person.name} fill className="object-cover" />
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">{person.name}</h1>
            <p className="text-xl text-gray-600 mb-4">{person.title}</p>

            {person.email && (
              <div className="flex items-center mb-2">
                <Mail className="h-5 w-5 mr-2 text-teal-600" />
                <a href={`mailto:${person.email}`} className="text-teal-600 hover:text-teal-800">
                  {person.email}
                </a>
              </div>
            )}

            {/* {person.website && (
              <div className="flex items-center mb-4">
                <ExternalLink className="h-5 w-5 mr-2 text-teal-600" />
                <a
                  href={person.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-800"
                >
                  Personal Website
                </a>
              </div>
            )} */}

            
          </div>
        </div>

        <div className="md:col-span-2">
          {person.bio && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Biography</h2>
              <div className="prose prose-lg max-w-none">
                {person.bio.map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          )}

{person.education && person.education.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
              <ul className="list-disc pl-5 space-y-2">
                {person.education.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          

{person.postionHeld && person.postionHeld.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Position Held</h2>
              <ul className="list-disc pl-5 space-y-2">
                {person.postionHeld.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {person.research && person.research.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Research Interests</h2>
              <ul className="list-disc pl-5 space-y-2">
                {person.research.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

{person.awardAndHonour && person.awardAndHonour.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Awards & Honours</h2>
              <ul className="list-disc pl-5 space-y-2">
                {person.awardAndHonour.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

        </div>
      </div>
    </div>
  )
}

