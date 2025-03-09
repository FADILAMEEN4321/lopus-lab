import Image from "next/image"
import { researchData } from "@/data/research"

export const metadata = {
  title: "Research - Lopus Lab",
  description: "Explore our research areas in cellular nanomedicine and chemical biology",
}

export default function ResearchPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Research</h1>
        <p className="text-xl text-gray-600">
          Our laboratory focuses on understanding the biology of cancer progression and drug resistance, the development of green nanotechnology-based drug formulations and drug delivery systems, the mechanistic details of drug action in cancer cells, and nanoparticle-mediated radiosensitization of cancer cells. In these investigations, we use a combination of cellular and biophysical experiments, super-resolution microscopy, and computer-assisted simulations.
        </p>
      </div>

      <div className="space-y-16">
        {researchData.map((research, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
          >
            <div className="lg:w-1/2">
              <div className="relative h-64 w-full lg:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={research.imageSrc || "/placeholder.svg"}
                  alt={research.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{research.title}</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                {research.description.map((paragraph, i) => (
                  <p key={i} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
              {/* {research.keyFindings && (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Key Findings</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {research.keyFindings.map((finding, i) => (
                      <li key={i}>{finding}</li>
                    ))}
                  </ul>
                </div>
              )} */}
              {/* {research.applications && (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Applications</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {research.applications.map((application, i) => (
                      <li key={i}>{application}</li>
                    ))}
                  </ul>
                </div>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

