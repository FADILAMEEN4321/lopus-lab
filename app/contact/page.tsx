"use client"

import type React from "react"

import { MapPin, Mail, Phone, Send } from "lucide-react"
import { Map } from "@/components/map"
import { openPositionsData } from "@/data/open-positions"

export default function ContactPage() {

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">
          Get in touch with our team for collaborations, inquiries, or opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 mr-3 text-teal-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p className="text-gray-600">
                School of Biological Sciences, UM-DAE CEBS,
                  <br />
                  Kalina, Santacruz East,
                  <br />
                  Mumbai - 400098
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-6 w-6 mr-3 text-teal-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:manu.lopus@cbs.ac.in" className="hover:text-teal-600">
                  manu.lopus@cbs.ac.in
                  </a>
                </p>
              </div>
            </div>

  
          </div>

          

        </div>

        <div className="">
            <div className="h-80 w-full rounded-lg overflow-hidden shadow-md">
              {/* In a real application, you would embed a Google Map here */}
              <div id="map" className="h-80 w-full rounded-lg overflow-hidden shadow-md">
              <Map />
            </div>
            </div>
          </div>

        
      </div>

      <div id="open-positions" className="pt-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Open Positions</h2>

        {openPositionsData.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {openPositionsData.map((position, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                <p className="text-gray-600 mb-4">
                  {position.type} • {position.location}
                </p>
                <div className="prose prose-sm mb-4">
                  <p>{position.description}</p>
                </div>

                {position.requirements && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {position.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                )}

               
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              There are currently no open positions. Please check back later or contact us directly.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

