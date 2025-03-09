"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ResearchHighlight } from "@/components/research-highlight"
import { TeamMemberCard } from "@/components/team-member-card"
import { PublicationCard } from "@/components/publication-card"
import { NewsCard } from "@/components/news-card"
import { motion } from "framer-motion"
import { researchData } from "@/data/research"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] bg-gradient-to-r from-teal-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={"/assests/images/hero-1.jpg"}
            alt="Lab background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 flex flex-col items-start justify-center h-full px-4 py-16 mx-auto text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Image
                          src={"/assests/images/logo.png"}
                          alt="logo"
                          width={170}
                          height={170}
                          className="mb-6"
                        />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Lopus Lab</h1>
            <p className="max-w-2xl mt-4 text-xl text-teal-100">
            Cellular Nanomedicine & Chemical Biology Lab School of Biological Sciences
            </p>
            <p className="max-w-2xl mt-4 text-xl text-teal-100">
            UM-DAE Centre for Excellence in Basic Sciences, Mumbai
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Link href="/research">
                  Explore Our Research <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-teal-600 border-white hover:text-white hover:bg-white/10">
                <Link href="/contact">Join Our Team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lab Overview */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900">Lab Research Overview</h2>
                <p className="mt-4 text-lg text-gray-700">
                Our laboratory focuses on developing metal-based nanosystems to make it easier for potent anticancer molecules to get into cancer cells. The mechanisms of action of such drug-coated nanocarriers work in cancer cells is being figured out.
                </p>
                <p className="mt-4 text-lg text-gray-700">
                In this quest, we have developed several potent gold-based nanosystems that can effectively bring therapeutic phytochemicals into cancer cells. Investigations of their therapeutic efficacy in different model systems are going on.
                </p>
                <p className="mt-4 text-lg text-gray-700">
                The second area of research is selective elimination cancer cells by inducing different cell death mechanisms in these cells.
                </p>
                <Button asChild className="mt-6 bg-teal-600 hover:bg-teal-700">
                  <Link href="/research">Learn More About Our Research</Link>
                </Button>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-80 w-full rounded-xl overflow-hidden shadow-xl"
              >
                <Image src={"/assests/images/botryllus-model-organism-01.jpg"} alt="Lab research" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Research Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              researchData.slice(0, 3).map((research, index) => (
                <ResearchHighlight
              title={research.title}
              description={research.description?.[0]}
              imageSrc={research.imageSrc}
            />
              ))
            }
            
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
              <Link href="/research">View All Research Areas</Link>
            </Button>
          </div>
        </div>
      </section>


      {/* Recent Publications */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <NewsCard
              title="Lopus Lab receives $2.5M NIH grant"
              date="March 1, 2023"
              excerpt="Our lab has been awarded a significant grant to further our research on nanomedicine approaches to neurodegenerative diseases."
              imageSrc="/placeholder.svg?height=300&width=500"
            />
            <NewsCard
              title="Lopus Lab receives $2.5M NIH grant"
              date="March 1, 2023"
              excerpt="Our lab has been awarded a significant grant to further our research on nanomedicine approaches to neurodegenerative diseases."
              imageSrc="/placeholder.svg?height=300&width=500"
            />
          </div>
          <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
              <Link href="/news">Read All News</Link>
            </Button>
          </div>
        </div>
      </section>

      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-900 to-blue-900 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            We're always looking for talented researchers and students to join our lab. Check out our open positions and
            application process.
          </p>
          <Button asChild size="lg" className="bg-white text-teal-900 hover:bg-gray-100">
            <Link href="/contact#open-positions">View Open Positions</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

