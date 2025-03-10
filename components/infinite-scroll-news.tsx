"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { NewsCard } from "@/components/news-card"
import { newsData } from "@/data/news"

export function InfiniteScrollNews() {
  const [isHovering, setIsHovering] = useState(false)
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  // Get the most recent publications (last 6)
  const recentNews = [...newsData]
    .slice(0, 3)

  // Duplicate the publications to create a seamless loop
  const duplicatedNews = [...recentNews, ...recentNews]

  // Start the animation
  useEffect(() => {
    if (!isHovering) {
      controls.start({
        x: "-50%",
        transition: {
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      })
    } else {
      // Pause the animation
      controls.stop()
    }
  }, [controls, isHovering])

  return (
    <div
      className="relative w-full overflow-hidden py-4"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      ref={containerRef}
    >
      <motion.div
        className="flex"
        animate={controls}
        style={{ width: "115%" }} // Double width to accommodate duplicated items
      >
        {duplicatedNews.map((news, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/4 flex-shrink-0 px-4">
            <NewsCard
              title={news.title}
              date={news.date}
              excerpt={news.excerpt}
              imageSrc={news.imageSrc}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

