import React, { useState } from "react"
import contact from "../../asset/contact.png"
export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    howDidWeFind: "",
    currentAge: "",
    yearItHappened: "",
    whereItHappened: "",
    state: "",
    knowIndividual: "",
    additionalInfo: "",
    agreeToPrivacy: false,
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ]

  return (
    <div className="min-h-screen bg-[#f5f1e8] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Form */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-[#0B2D59] leading-tight">
                Get Legal
                <br />
                <span className="relative">
                  Help
                  <div className="absolute -bottom-2 left-0 w-20 h-2 bg-[#FC821F]"></div>
                </span>
              </h1>
              <p className="text-[#0B2D59] text-sm leading-relaxed">
                Our legal will reach out to you as soon as possible with more
                <br />
                information regarding your legal rights and options.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#0B2D59] text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FC821F] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#0B2D59] text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FC821F] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Phone and How did we find you Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#0B2D59] text-sm font-medium mb-2">Phone *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FC821F] focus:border-transparent"
                    required
                  />
                </div>
                {/* <div>
                  <label className="block text-[#0B2D59] text-sm font-medium mb-2">How did we find you?</label>
                  <input
                    type="text"
                    value={formData.howDidWeFind}
                    onChange={(e) => handleInputChange("howDidWeFind", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FC821F] focus:border-transparent"
                  />
                </div> */}
              </div>

              {/* Age and Year Row */}
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#0B2D59] text-sm font-medium mb-2">How old are you now?</label>
                  <input
                    type="text"
                    value={formData.currentAge}
                    onChange={(e) => handleInputChange("currentAge", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FC821F] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-[#0B2D59] text-sm font-medium mb-2">What year did it happen?</label>
                  <input
                    type="text"
                    value={formData.yearItHappened}
                    onChange={(e) => handleInputChange("yearItHappened", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FC821F] focus:border-transparent"
                  />
                </div>
              </div> */}

              {/* Where and State Row */}
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#0B2D59] text-sm font-medium mb-2">Where did it happen?</label>
                  <input
                    type="text"
                    value={formData.whereItHappened}
                    onChange={(e) => handleInputChange("whereItHappened", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FC821F] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-[#0B2D59] text-sm font-medium mb-2">
                    What state did it happen in? *
                  </label>
                  <select 
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FC821F] focus:border-transparent"
                    required
                  >
                    <option value="">Please select a state</option>
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div> */}

              {/* Know Individual */}
              {/* <div>
                <label className="block text-[#0B2D59] text-sm font-medium mb-2">How do you know the individual?</label>
                <input
                  type="text"
                  value={formData.knowIndividual}
                  onChange={(e) => handleInputChange("knowIndividual", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FC821F] focus:border-transparent"
                />
              </div> */}

              {/* Additional Info */}
              {/* <div>
                <p className="text-[#0B2D59] text-sm mb-2">
                  If you feel comfortable, please tell us more details about what happened and what type of assistance
                  you're seeking.
                </p>
                <textarea
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-[#FC821F] focus:border-transparent"
                  placeholder=""
                />
              </div> */}

              <div>
                <p className="text-[#0B2D59] text-sm mb-2">
                  Message/ Inquiry
                </p>
                <textarea
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-[#FC821F] focus:border-transparent"
                  placeholder=""
                />
              </div>

              {/* Privacy Policy */}
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={formData.agreeToPrivacy}
                  onChange={(e) => handleInputChange("agreeToPrivacy", e.target.checked)}
                  className="mt-1 h-4 w-4 text-[#FC821F] focus:ring-[#FC821F] border-gray-300 rounded"
                />
                <label htmlFor="privacy" className="text-xs text-[#0B2D59] leading-relaxed">
                  I agree to{" "}
                  <a href="#" className="text-blue-600 underline">
                    Belief Marketing Enterprise Privacy Policy
                  </a>
                  . By completing this form, I agree to{" "}
                  <a href="#" className="text-blue-600 underline">
                    Belief Marketing Enterprise Privacy Policy
                  </a> &nbsp;
                  Belief Marketing Enterprise may connect me with a law firm to discuss the merits of my potential case. I agree
                  to be contacted via phone, email, and/or text message directly by a law firm.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#FC821F] text-[#0B2D59] px-8 py-4 text-lg font-semibold 
                     hover:bg-[#0B2D59] hover:text-white transition-colors duration-200focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="relative flex flex-col items-center lg:items-end space-y-6">
            
            <div className="h-24 lg:h-32"></div>

            <div className="relative flex justify-center w-full">
              <div className="w-64 h-80 lg:w-80 lg:h-96 relative bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={contact}
                  alt="image"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="w-px h-32 border-l-2 border-dotted border-gray-400 mx-auto"></div>

            {/* Help Text */}
            <div className="text-center max-w-xs mx-auto">
              <p className="text-[#0B2D59] font-medium text-sm leading-relaxed italic">
                We're here to help survivors of sexual assault, harassment, and abuse understand their rights and
                options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
