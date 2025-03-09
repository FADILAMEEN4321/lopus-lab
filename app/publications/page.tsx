import Image from "next/image"
import { publicationsData } from "@/data/publications"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export const metadata = {
  title: "Publications - Lopus Lab",
  description: "Research publications from Lopus Lab in cellular nanomedicine and chemical biology",
}

export default function PublicationsPage() {
  // Group publications by year
  const publicationsByYear = publicationsData.reduce(
    (acc, pub) => {
      const year = pub.year
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(pub)
      return acc
    },
    {} as Record<string, typeof publicationsData>,
  )

  // Sort years in descending order
  const sortedYears = Object.keys(publicationsByYear).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Publications</h1>
        <p className="text-xl text-gray-600">Our research findings published in peer-reviewed journals.</p>
      </div>

      <div className="space-y-12">
        {sortedYears.map((year) => (
          <section key={year} id={`year-${year}`}>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b">{year}</h2>
            <div className="space-y-8">
              {publicationsByYear[year].map((publication, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700">{publication.title}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

