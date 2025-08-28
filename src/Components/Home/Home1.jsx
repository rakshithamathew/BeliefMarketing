"use client"

import React from "react"

import { useState } from "react"

export default function Home1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    details: "",
    agreeToPolicy: false,
  })

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
    <div className="min-h-screen" style={{ backgroundColor: '#f4f0e3' }}>
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 
                className="leading-tight"
                style={{
                  fontFamily: '"Futura Bold", Sans-serif',
                  fontSize: '100px',
                  fontWeight: 700,
                  lineHeight: '100px',
                  color: '#151052'
                }}
              >
                Uber Sexual Assault Lawsuit: How To File & MDL Updates
                <div className="h-2 w-full mt-2" style={{ backgroundColor: '#FC821F' }}></div>
              </h1>

              <div className="leading-relaxed space-y-4">
                <p 
                  style={{
                    fontSize: '21px',
                    lineHeight: '35px',
                    fontFamily: '"Avenir Book", sans-serif',
                    fontWeight: 400,
                    color: '#151052'
                  }}
                >
                  If you have a sexual assault claim against Uber, it's important to understand your rights and legal
                  options for holding the responsible parties accountable.{" "}
                  <span 
                    style={{
                      fontFamily: '"Futura Bold", Sans-serif',
                      fontWeight: 700
                    }}
                  >
                    Helping Survivors is here to inform you on when, why, and how to file an Uber sexual assault
                    lawsuit.
                  </span>{" "}
                  You can also follow along with the{" "}
                  <span className="text-blue-600 underline">
                    latest Uber sexual assault multi-district litigation updates
                  </span>{" "}
                  below.
                </p>
              </div>
            </div>

            {/* Circular Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-32 h-32 rounded-full flex items-center justify-center relative" style={{ backgroundColor: '#FC821F' }}>
                <div className="text-center">
                  <div 
                    className="leading-tight"
                    style={{
                      fontFamily: '"Futura Bold", Sans-serif',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#151052'
                    }}
                  >
                    HELPING
                    <br />
                    SURVIVORS
                  </div>
                </div>
                {/* Decorative elements around the circle */}
                <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-slate-800 rounded-full"></div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-y-1/2 w-3 h-3 bg-slate-800 rounded-full"></div>
                <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-slate-800 rounded-full"></div>
                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-slate-800 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-slate-800 p-8 rounded-lg">
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 
                  className="leading-tight"
                  style={{
                    fontFamily: '"Futura Bold", Sans-serif',
                    fontSize: '25px',
                    fontWeight: 700,
                    lineHeight: '25px',
                    color: '#EBFF02'
                  }}
                >
                  Have you experienced sexual assault or abuse?
                </h2>
                <p 
                  className="leading-relaxed"
                  style={{
                    fontSize: '21px',
                    lineHeight: '35px',
                    fontFamily: '"Avenir Book", sans-serif',
                    fontWeight: 400,
                    color: '#FFFFFF'
                  }}
                >
                  We can help answer your questions and connect you with an attorney if you may have a case.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label 
                      className="font-medium"
                      style={{
                        fontSize: '21px',
                        lineHeight: '35px',
                        fontFamily: '"Avenir Book", sans-serif',
                        fontWeight: 400,
                        color: '#FFFFFF'
                      }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-white border-0 text-slate-800 rounded-md focus:outline-none focus:ring-2"
                      style={{ focusRing: '2px solid #FC821F' }}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label 
                      className="font-medium"
                      style={{
                        fontSize: '21px',
                        lineHeight: '35px',
                        fontFamily: '"Avenir Book", sans-serif',
                        fontWeight: 400,
                        color: '#FFFFFF'
                      }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-white border-0 text-slate-800 rounded-md focus:outline-none focus:ring-2"
                      style={{ focusRing: '2px solid #FC821F' }}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label 
                      className="font-medium"
                      style={{
                        fontSize: '21px',
                        lineHeight: '35px',
                        fontFamily: '"Avenir Book", sans-serif',
                        fontWeight: 400,
                        color: '#FFFFFF'
                      }}
                    >
                      Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-white border-0 text-slate-800 rounded-md focus:outline-none focus:ring-2"
                      style={{ focusRing: '2px solid #FC821F' }}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label 
                      className="font-medium"
                      style={{
                        fontSize: '21px',
                        lineHeight: '35px',
                        fontFamily: '"Avenir Book", sans-serif',
                        fontWeight: 400,
                        color: '#FFFFFF'
                      }}
                    >
                      State *
                    </label>
                    <select
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3 py-2 bg-white border-0 text-slate-800 rounded-md focus:outline-none focus:ring-2"
                      style={{ focusRing: '2px solid #FC821F' }}
                    >
                      <option value="">Please Select a State</option>
                      {states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label 
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#FFFFFF'
                    }}
                  >
                    If you feel comfortable, please tell us more details about what happened.
                  </label>
                                      <textarea
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-3 py-2 bg-white border-0 text-slate-800 rounded-md focus:outline-none focus:ring-2 min-h-[120px] resize-none"
                      style={{ focusRing: '2px solid #FC821F' }}
                      placeholder=""
                      rows={4}
                    />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy-policy"
                      checked={formData.agreeToPolicy}
                      onChange={(e) => setFormData({ ...formData, agreeToPolicy: e.target.checked })}
                      className="mt-1 w-4 h-4 bg-white border-white rounded focus:ring-2"
                      style={{ color: '#FC821F', focusRing: '2px solid #FC821F' }}
                    />
                    <label 
                      htmlFor="privacy-policy" 
                      className="leading-relaxed"
                      style={{
                        fontSize: '21px',
                        lineHeight: '35px',
                        fontFamily: '"Avenir Book", sans-serif',
                        fontWeight: 400,
                        color: '#FFFFFF'
                      }}
                    >
                      I agree to Helping Survivors' <span className="underline">Privacy Policy</span>. By submitting
                      this form, I agree to Helping Survivors' Privacy Policy. Helping Survivors may connect me with a
                      law firm to discuss the matters of my potential case. I agree to be contacted via phone, email,
                      and/or text message directly by a law firm.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-slate-800 py-4 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: '#FC821F',
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '23px',
                      fontWeight: 700
                    }}
                    disabled={!formData.agreeToPolicy}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
