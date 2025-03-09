"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

interface PublicationCardProps {
  title: string
  authors: string
  journal: string
  year: string
  imageSrc: string
}

export function PublicationCard({ title, authors, journal, year, imageSrc }: PublicationCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative h-48 md:h-auto md:w-1/3">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 md:w-2/3">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-1">{authors}</p>
        <p className="text-gray-500 mb-4">
          {journal}, {year}
        </p>
        <a href="#" className="inline-flex items-center text-teal-600 hover:text-teal-800">
          View publication <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  )
}

