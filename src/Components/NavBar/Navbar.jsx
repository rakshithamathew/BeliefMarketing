"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import logo from "../../asset/BME LOGO.png"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const navigate = useNavigate();

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
    <nav className="bg-white  text-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="" className="w-30 h-10" />
          </div>

          <div className="hidden sm:block flex items-center space-x-4">
            <button className="border-2 border-[#FC821F] text-[#FC821F] px-4 lg:px-6 py-2 font-bold text-sm lg:text-base hover:bg-[#FC821F] hover:text-black transition-colors" onClick={() => navigate("/ContactUs")}>
              GET LEGAL HELP
            </button>
          </div>

          <button className="sm:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <div className="sm:hidden px-4 pb-4 space-y-3">

        <button className="w-full border-2 border-[#FC821F] text-[#FC821F] px-4 lg:px-6 py-2 font-bold text-sm lg:text-base hover:bg-[#FC821F] hover:text-black transition-colors" onClick={() => navigate("/ContactUs")}>
          GET LEGAL HELP
        </button>
      </div>
    </nav>
  )
}
