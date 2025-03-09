"use client"

import { useEffect } from "react"

export function Map() {
  useEffect(() => {
    // Load Leaflet CSS
    const linkElement = document.createElement("link")
    linkElement.rel = "stylesheet"
    linkElement.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    linkElement.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
    linkElement.crossOrigin = ""
    document.head.appendChild(linkElement)

    // Load Leaflet JS
    const script = document.createElement("script")
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
    script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
    script.crossOrigin = ""
    document.head.appendChild(script)

    script.onload = () => {
      // Initialize map after Leaflet is loaded
      const L = window.L

      const cebsCoordinates = [19.070555, 72.855180];

      // Create map
      const map = L.map("map").setView(cebsCoordinates, 13)

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap contributors",
      }).addTo(map)

      // Add marker for Lopus Lab location
      const marker = L.marker(cebsCoordinates).addTo(map)
      marker.bindPopup("<b>Lopus Lab</b><br>School of Biological Sciences, UM-DAE CEBS<br>Kalina, Santacruz East<br>Mumbai - 400098").openPopup()
    }

    // Cleanup function
    return () => {
      document.head.removeChild(linkElement)
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return null
}