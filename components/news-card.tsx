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
    <Link href="/news" passHref>
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
    className="bg-white rounded-lg shadow-md overflow-hidden h-[400px] flex flex-col"
  >
    <div className="relative h-48">
      <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
    </div>
    <div className="p-6 flex-1 flex flex-col justify-between">
      <div>
        <div className="flex items-center text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span className="text-sm">{date}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
      </div>
    </div>
  </motion.div>
</Link>

  )
}


