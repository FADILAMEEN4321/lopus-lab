"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

interface NewsCardProps {
  title: string
  date: string
  excerpt: string
  imageSrc: string
}

export function NewsCard({ title, date, excerpt, imageSrc }: NewsCardProps) {
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
        <div className="flex items-center text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span className="text-sm">{date}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link href="/news" className="inline-flex items-center text-teal-600 hover:text-teal-800">
          Read more
        </Link>
      </div>
    </motion.div>
  )
}


