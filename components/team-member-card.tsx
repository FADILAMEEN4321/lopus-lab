"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface TeamMemberCardProps {
  name: string
  role: string
  imageSrc: string
  id: string
}

export function TeamMemberCard({ name, role, imageSrc, id }: TeamMemberCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <Link href={`/people/${id}`}>
        <div className="relative h-64 w-full">
          <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </Link>
    </motion.div>
  )
}

