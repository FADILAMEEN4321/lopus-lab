"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image";


const navItems = [
  { name: "Home", href: "/" },
  { name: "Research", href: "/research" },
  { name: "People", href: "/people" },
  { name: "Publications", href: "/publications" },
  { name: "Teaching", href: "/teaching" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
      <div className="flex items-center">
  <Link href="/" className="flex items-center">
  {/* <div className="mr-2 w-16 h-16 md:w-18 md:h-18 relative">
  <Image
    src="/assests/images/logo-trans.jpg"
    alt="logo"
    fill
    className="object-contain"
  />
</div> */}

    <span className="text-2xl md:text-3xl font-bold text-teal-700">Cellular Nanomedicine & Chemical Biology Lab</span>
  </Link>
</div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-teal-700",
                pathname === item.href ? "text-teal-700" : "text-gray-600",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-700 hover:bg-gray-100 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <X className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    pathname === item.href
                      ? "bg-teal-50 text-teal-700"
                      : "text-gray-700 hover:bg-gray-50 hover:text-teal-700",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

