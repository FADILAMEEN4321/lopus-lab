import { newsData } from "@/data/news"
import { NewsCard } from "@/components/news-card"

export const metadata = {
  title: "News - Lopus Lab",
  description: "Latest news and updates from Lopus Lab",
}

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">News & Updates</h1>
        <p className="text-xl text-gray-600">Stay up to date with the latest happenings at Lopus Lab.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        {newsData.map((news, index) => (
          <NewsCard key={index} title={news.title} date={news.date} excerpt={news.excerpt} imageSrc={news.imageSrc} />
        ))}
      </div>
    </div>
  )
}

