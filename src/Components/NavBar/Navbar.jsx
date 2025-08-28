"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const navItems = [
    {
      title: "ABOUT US",
      options: ["Our Mission", "Our Team", "Success Stories", "Contact Us"]
    },
    {
      title: "RIDESHARE ASSAULT",
      options: ["Uber Assault", "Lyft Assault", "Taxi Assault", "Legal Process"]
    },
    {
      title: "WORKPLACE SEXUAL ASSAULT",
      options: ["Harassment", "Hostile Environment", "Retaliation", "EEOC Claims"]
    },
    {
      title: "JUVENILE DETENTION ABUSE",
      options: ["Physical Abuse", "Emotional Abuse", "Neglect", "Legal Rights"]
    },
    {
      title: "OTHER ABUSE",
      options: ["Domestic Violence", "Elder Abuse", "Institutional Abuse", "Reporting"]
    },
    {
      title: "RESOURCES",
      options: ["Legal Help", "Support Groups", "Emergency Contacts", "Educational Materials", "FAQ"]
    },
  ]

  const handleMouseEnter = (index) => {
    setActiveDropdown(index)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <nav className="bg-[#0B2D59] text-white">
      {/* Main header */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo and brand */}
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-400 text-black font-bold text-2xl lg:text-3xl w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center">
              B
            </div>
            {/* <span className="text-xl lg:text-2xl font-semibold">Belief Marketing Enterprise</span> */}
          </div>

          {/* Center text - hidden on mobile */}
          {/* <div className="hidden lg:block flex-1 text-center px-8">
            <div className="border-t border-b border-white/30 py-2">
              <p className="italic text-sm lg:text-base">More than 1,200 sexual assault survivors helped since 2023</p>
            </div>
          </div> */}

          {/* CTA Button */}
          <div className="hidden sm:block flex items-center space-x-4">
            {/* <Link 
              to="/duck" 
              className="text-yellow-400 hover:text-white transition-colors text-sm font-medium"
            >
              3D Duck Model
            </Link> */}
            <button className="border-2 border-[#FC821F] text-[#FC821F] px-4 lg:px-6 py-2 font-bold text-sm lg:text-base hover:bg-[#FC821F] hover:text-black transition-colors">
              GET LEGAL HELP
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="sm:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Center text for mobile - shown below main header */}
        {/* <div className="lg:hidden pb-4">
          <div className="border-t border-b border-white/30 py-2 text-center">
            <p className="italic text-sm">More than 1,200 sexual assault survivors helped since 2023</p>
          </div>
        </div> */}
      </div>

      {/* Navigation menu */}
      <div className={`bg-[#0B2D59] border-t border-white/20 ${isMobileMenuOpen ? "block" : "hidden"} sm:block`}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-8 lg:space-x-12 py-4">
            {navItems.map((item, index) => (
              <div 
                key={index} 
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 text-sm lg:text-base font-medium hover:text-[#FC821F] transition-colors py-2 sm:py-0">
                  <span>{item.title}</span>
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {activeDropdown === index && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="py-2">
                      {item.options.map((option, optionIndex) => (
                        <Link
                          key={optionIndex}
                          to={option === "FAQ" ? "/FAQ" : "#"}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400 hover:text-black transition-colors"
                        >
                          {option}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile CTA Button */}
      <div className="sm:hidden px-4 pb-4 space-y-3">
        {/* <Link 
          to="/duck" 
          className="block w-full text-center text-yellow-400 hover:text-white transition-colors text-sm font-medium py-2"
        >
          3D Duck Model
        </Link> */}
        <button className="w-full border-2 border-yellow-400 text-yellow-400 py-3 font-bold text-sm hover:bg-yellow-400 hover:text-black transition-colors">
          GET LEGAL HELP
        </button>
      </div>
    </nav>
  )
}
