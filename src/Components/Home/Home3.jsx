// import Image from "next/image"

export default function Home3() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Key Takeaways Box */}
            <div className="border-2 border-blue-800 bg-white p-4">
              <h3 
                className="mb-3 leading-tight border-b-4 border-yellow-400 pb-2"
                style={{
                  fontFamily: '"Futura Bold", Sans-serif',
                  fontSize: '25px',
                  fontWeight: 700,
                  lineHeight: '25px',
                  color: '#151052'
                }}
              >
                Key Takeaways
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span 
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Since 2017, thousands of survivors have filed Uber sexual assault lawsuits to seek damages for the harm that happened to them, including both drivers and riders who experienced sexual assault, harassment, and kidnapping.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span 
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Individuals are filing Uber sexual assault lawsuits against the company to seek accountability, justice, and healing. We can connect you with an{" "}
                    <span className="text-blue-600 underline">experienced rideshare sexual assault attorney</span> who
                    can help you understand your rights and options.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span 
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    A majority of all federal rideshare sexual assault lawsuits against Uber have been consolidated into a Multi-District Litigation, or MDL. As of July 2025, 2,359 cases are pending in{" "}
                    <span className="text-blue-600 underline">
                      The Uber Technologies, Passenger Sexual Assault Litigation MDL No. 3084
                    </span>
                    .
                  </span>
                </li>
              </ul>
            </div>

            {/* Main Content */}
            <div className="space-y-4">
              <p 
                className="leading-relaxed"
                style={{
                  fontSize: '21px',
                  lineHeight: '35px',
                  fontFamily: '"Avenir Book", sans-serif',
                  fontWeight: 400,
                  color: '#151052'
                }}
              >
                Since Uber's founding in 2009, thousands of individuals have come forward with allegations of sexual assault
                that occurred while they were using the rideshare company's services, either as passengers or drivers.
                After similar cases began to pile up, a panel of judges decided in October 2023 to consolidate federal
                cases against Uber into a multi-district litigation, or MDL, for pre-trial proceedings to save court
                resources. The MDL is pending before U.S. District Judge Charles Breyer of the Northern District of
                California.
              </p>

              <h1 
                className="mt-8 mb-4 leading-tight"
                style={{
                  fontFamily: '"Futura Bold", Sans-serif',
                  fontSize: '100px',
                  fontWeight: 700,
                  lineHeight: '100px',
                  color: '#151052'
                }}
              >
                Uber Lawsuit Allegations
              </h1>

              <p 
                className="mb-6 leading-relaxed"
                style={{
                  fontSize: '21px',
                  lineHeight: '35px',
                  fontFamily: '"Avenir Book", sans-serif',
                  fontWeight: 400,
                  color: '#151052'
                }}
              >
                Most of the cases against Uber in the MDL involve passengers who have experienced sexual assault,
                harassment, or other harm at the hands of Uber drivers.
              </p>

                             {/* Numbered Points */}
               <div className="space-y-4">
                 <div className="flex items-start">
                   <div className="bg-blue-300 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                     1
                   </div>
                   <div 
                     style={{
                       fontSize: '21px',
                       lineHeight: '35px',
                       fontFamily: '"Avenir Book", sans-serif',
                       fontWeight: 400,
                       color: '#151052'
                     }}
                   >
                     <span 
                       style={{
                         fontFamily: '"Futura Bold", Sans-serif',
                         fontWeight: 700
                       }}
                     >
                       Lack of Safety Measures
                     </span>{" "}
                     – Survivors allege that Uber is
                     vicariously liable for the actions of its drivers. They further assert that the company was
                     negligent by failing to implement appropriate safety measures to protect passengers.
                   </div>
                 </div>

                 <div className="flex items-start">
                   <div className="bg-blue-300 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                     2
                   </div>
                   <div 
                     style={{
                       fontSize: '21px',
                       lineHeight: '35px',
                       fontFamily: '"Avenir Book", sans-serif',
                       fontWeight: 400,
                       color: '#151052'
                     }}
                   >
                     <span 
                       style={{
                         fontFamily: '"Futura Bold", Sans-serif',
                         fontWeight: 700
                       }}
                     >
                       Breach of Contract
                     </span>{" "}
                     – Lawsuit allegations state that Uber's
                     services aren't as safe as they claim. The rideshare company has faced extensive criticism for
                     failing to conduct adequate background checks for drivers and not allowing passengers to choose a
                     preferred driver gender.
                   </div>
                 </div>
               </div>

                             {/* Infographic */}
               <div className="mt-8">
                 <div className="border-2 border-gray-800 bg-blue-100 p-6">
                   <h3 
                     className="mb-4 leading-tight"
                     style={{
                       fontFamily: '"Futura Bold", Sans-serif',
                       fontSize: '25px',
                       fontWeight: 700,
                       lineHeight: '25px',
                       color: '#151052'
                     }}
                   >
                     Overview of the Uber Sexual Assault Lawsuit
                   </h3>
                   <p 
                     className="mb-4"
                     style={{
                       fontSize: '21px',
                       lineHeight: '35px',
                       fontFamily: '"Avenir Book", sans-serif',
                       fontWeight: 400,
                       color: '#151052'
                     }}
                   >
                     Uber is facing thousands of sexual assault lawsuits from passengers claiming that the company's lack of safety measures failed to protect them.
                   </p>
                   <div className="grid grid-cols-2 gap-4 mb-4">
                     <div className="text-center">
                       <div className="bg-red-500 text-white p-3 rounded mb-2">
                         <span 
                           style={{
                             fontFamily: '"Futura Bold", Sans-serif',
                             fontSize: '18px',
                             fontWeight: 700,
                             color: '#FFFFFF'
                           }}
                         >
                           Gross Negligence
                         </span>
                       </div>
                       <p 
                         style={{
                           fontSize: '16px',
                           lineHeight: '24px',
                           fontFamily: '"Avenir Book", sans-serif',
                           fontWeight: 400,
                           color: '#151052'
                         }}
                       >
                         Failed to implement adequate safety measures
                       </p>
                     </div>
                     <div className="text-center">
                       <div className="bg-yellow-500 text-white p-3 rounded mb-2">
                         <span 
                           style={{
                             fontFamily: '"Futura Bold", Sans-serif',
                             fontSize: '18px',
                             fontWeight: 700,
                             color: '#FFFFFF'
                           }}
                         >
                           Weak
                         </span>
                       </div>
                       <p 
                         style={{
                           fontSize: '16px',
                           lineHeight: '24px',
                           fontFamily: '"Avenir Book", sans-serif',
                           fontWeight: 400,
                           color: '#151052'
                         }}
                       >
                         Background checks and safety protocols
                       </p>
                     </div>
                   </div>
                   <p 
                     style={{
                       fontSize: '21px',
                       lineHeight: '35px',
                       fontFamily: '"Avenir Book", sans-serif',
                       fontWeight: 400,
                       color: '#151052'
                     }}
                   >
                     These allegations form the basis of the multi-district litigation against Uber, with plaintiffs seeking compensation for damages resulting from the company's alleged failure to provide safe transportation services.
                   </p>
                 </div>
                 <h1 
                className="mt-8 mb-4 leading-tight"
                style={{
                  fontFamily: '"Futura Bold", Sans-serif',
                  fontSize: '100px',
                  fontWeight: 700,
                  lineHeight: '100px',
                  color: '#151052'
                }}
              >
                Uber Lawsuit Allegations
              </h1>

              <p 
                className="mb-6 leading-relaxed"
                style={{
                  fontSize: '21px',
                  lineHeight: '35px',
                  fontFamily: '"Avenir Book", sans-serif',
                  fontWeight: 400,
                  color: '#151052'
                }}
              >
                Most of the cases against Uber in the MDL involve passengers who have experienced sexual assault,
                harassment, or other harm at the hands of Uber drivers.
              </p>
               </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Last Date Modified */}
            <div className="flex text-white">
              <div className="bg-blue-800 p-3 flex-1 text-center">
                <div 
                  style={{
                    fontFamily: '"Futura Bold", Sans-serif',
                    fontSize: '25px',
                    fontWeight: 700,
                    lineHeight: '25px',
                    color: '#FFFFFF'
                  }}
                >
                  Last Date Modified
                </div>
              </div>
              <div className="bg-teal-500 p-3 flex-1 text-center">
                <div 
                  style={{
                    fontSize: '21px',
                    lineHeight: '35px',
                    fontFamily: '"Avenir Book", sans-serif',
                    fontWeight: 400,
                    color: '#FFFFFF'
                  }}
                >
                  August 22, 2025
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div>
              <h3 
                className="mb-4 leading-tight"
                style={{
                  fontFamily: '"Futura Bold", Sans-serif',
                  fontSize: '25px',
                  fontWeight: 700,
                  lineHeight: '25px',
                  color: '#151052'
                }}
              >
                Table of Contents
              </h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#" 
                    className="hover:underline"
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Uber Lawsuit Allegations
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="hover:underline"
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Uber MDL Process Explained
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="hover:underline"
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Uber Sexual Assault Litigation – Recent Updates
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="hover:underline"
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Uber Multi-District Litigation Timeline
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="hover:underline"
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Can I File an Uber Sexual Assault Lawsuit?
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="hover:underline"
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Steps to File an Uber Sexual Assault Lawsuit
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="hover:underline"
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Uber Sexual Assault Settlement Amounts
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="hover:underline"
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Uber Sexual Assault Lawsuits in the News
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="hover:underline"
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Uber Sexual Assault Lawsuit FAQ
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="hover:underline"
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    What is the difference between class action lawsuits and multi-district litigation?
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="hover:underline"
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    How many sexual assault cases is Uber facing?
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="hover:underline"
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Does Uber mandate mediation for sexual assault claims?
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="hover:underline"
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    What safety measures has Uber implemented in response to sexual assault cases?
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="hover:underline"
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Will my privacy be protected if I file an Uber sexual assault lawsuit?
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="hover:underline"
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    How long does an Uber lawsuit take?
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="hover:underline"
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Want To Speak With A Lawyer?
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Pages */}
            <div>
              <h3 
                className="bg-blue-800 text-white p-3 text-center"
                style={{
                  fontFamily: '"Futura Bold", Sans-serif',
                  fontSize: '25px',
                  fontWeight: 700,
                  lineHeight: '25px',
                  color: '#FFFFFF'
                }}
              >
                Related Pages
              </h3>
              <ul className="border border-gray-300 divide-y divide-gray-300">
                <li className="p-3">
                  <a 
                    href="#" 
                    className="hover:underline"
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Hiring an Uber or Lyft Sexual Assault Lawyer
                  </a>
                </li>
                <li className="p-3">
                  <a 
                    href="#" 
                    className="hover:underline"
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Uber Sexual Assault Lawsuit
                  </a>
                </li>
                <li className="p-3">
                  <a 
                    href="#" 
                    className="hover:underline"
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Lyft Sexual Assault Lawsuit
                  </a>
                </li>
                <li className="p-3">
                  <a 
                    href="#" 
                    className="hover:underline"
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Rideshare Sexual Assault Statistics
                  </a>
                </li>
                <li className="p-3">
                  <a 
                    href="#" 
                    className="hover:underline"
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    What to Do if You've Experienced Rideshare Sexual Assault
                  </a>
                </li>
                <li className="p-3">
                  <a 
                    href="#" 
                    className="hover:underline"
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Are Ubers Safe?
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
