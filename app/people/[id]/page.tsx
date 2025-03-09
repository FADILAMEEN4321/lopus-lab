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

            {person.website && (
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
            )}

            {person.socialLinks && (
              <div className="flex space-x-4 mt-6">
                {person.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-teal-600"
                    aria-label={link.platform}
                  >
                    {link.platform === "Twitter" && (
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    )}
                    {link.platform === "LinkedIn" && (
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    )}
                    {link.platform === "Google Scholar" && (
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            )}
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
              <ul className="space-y-3">
                {person.education.map((edu, index) => (
                  <li key={index} className="flex">
                    <div className="mr-4 font-medium text-gray-600 w-20">{edu.year}</div>
                    <div>
                      <div className="font-medium">{edu.degree}</div>
                      <div className="text-gray-600">{edu.institution}</div>
                    </div>
                  </li>
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

          {person.publications && person.publications.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Selected Publications</h2>
              <ul className="space-y-4">
                {person.publications.map((pub, index) => (
                  <li key={index} className="border-l-4 border-teal-500 pl-4 py-1">
                    <p className="mb-1">
                      {pub.authors} ({pub.year})
                    </p>
                    <p className="font-medium mb-1">{pub.title}</p>
                    <p className="text-gray-600 italic">{pub.journal}</p>
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-800 text-sm inline-flex items-center mt-1"
                      >
                        DOI: {pub.doi} <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              {person.publicationsCount && person.publicationsCount > person.publications.length && (
                <div className="mt-6">
                  <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                    <Link href="/publications">View All Publications</Link>
                  </Button>
                </div>
              )}
            </section>
          )}

          {person.awards && person.awards.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Awards & Honors</h2>
              <ul className="space-y-3">
                {person.awards.map((award, index) => (
                  <li key={index} className="flex">
                    <div className="mr-4 font-medium text-gray-600 w-20">{award.year}</div>
                    <div>
                      <div className="font-medium">{award.title}</div>
                      {award.organization && <div className="text-gray-600">{award.organization}</div>}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {person.teaching && person.teaching.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Teaching</h2>
              <ul className="space-y-4">
                {person.teaching.map((course, index) => (
                  <li key={index}>
                    <div className="font-medium">
                      {course.code}: {course.title}
                    </div>
                    {course.description && <div className="text-gray-600 mt-1">{course.description}</div>}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

