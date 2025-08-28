// "use client"

// import { useState, useEffect } from "react"
// import { cn } from "../../lib/utils"

// const timelineData = [
//   {
//     id: "july-25-2025",
//     date: "July 25, 2025",
//     title: "100+ Cases Reach Settlement; Bellwether Replacements Selected",
//     content: [
//       "According to a recently filed case management statement, 102 MDL cases managed by the law firm Estey & Bomberger have reached a settlement with Uber. The firm and Uber also reached a comprehensive settlement agreement to resolve their clients' claims in the California Judicial Council Coordination Proceedings (JCCP), a state-level case consolidation. Details on the settlement are not yet available.",
//       "After the recent dismissal of one of the bellwether cases in the Uber MDL, the court ordered the plaintiffs to select a replacement. The plaintiffs selected L.S. v. Uber Technologies Inc., a case involving a victim who was allegedly sexually assaulted or harassed by an Uber driver in Corpus Christie, Texas, on January 19, 2025. The court also ordered Uber to select a replacement case for Trial Wave 1, since the dismissed case was set to be in the first round of trials. Uber selected WHB 318, involving a victim who was allegedly sexually assaulted or harassed by an Uber driver in Mecklenburg County, North Carolina, on March 20, 2021.",
//       "Outside the courtroom, Uber announced a new policy that will allow women drivers and riders to request to avoid being paired with men starting in August in several major US cities. The app's previous lack of an option to choose the gender of your driver or rider is directly cited in the lawsuits as a product defect.",
//     ],
//     color: "bg-purple-600",
//   },
//   {
//     id: "july-16-2025",
//     date: "July 16, 2025",
//     title: "Judge Grants Uber's Motion to Transfer Bellwether Trials Back Home",
//     content: [
//       "After months of deliberation, U.S. District Judge Charles R. Breyer granted Uber's motion to transfer 11 bellwether cases back to their home states for trial in the Uber sexual assault multidistrict litigation (MDL). In contradiction with typical MDL processes, the bellwether cases will now be transferred to the appropriate districts once pre-trial proceedings conclude in California.",
//       '"For the judge to now rule on this clause, which was initially raised back in 2023, despite having approved cases mostly outside California for the bellwether proceedings, disrespects both the judicial process and the victims who have been waiting for their day in court," said Adam Slater, a partner at Slater Slater Schulman LLP, which represents more than 550 sexual assault victims in the litigation.',
//     ],
//     color: "bg-blue-500",
//   },
// ]

// const months = ["July 2025", "June 2025", "May 2025", "April 2025", "March 2025", "February 2025", "January 2025"]

// export default function Home5() {
//   const [activeTab, setActiveTab] = useState("2025")
//   const [scrollY, setScrollY] = useState(0)

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY)
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <div className="min-h-screen bg-stone-100">
//       {/* Header */}
//       <div className="px-4 py-8 md:px-8 lg:px-16">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-2">
//             Uber Multi-District Litigation Timeline
//           </h1>
//           <div className="w-full h-2 bg-yellow-400 mb-8"></div>

//           {/* Tab Navigation */}
//           <div className="flex gap-1 mb-8">
//             {["2025", "2024", "2023"].map((year) => (
//               <button
//                 key={year}
//                 onClick={() => setActiveTab(year)}
//                 className={cn(
//                   "px-6 py-3 text-sm font-medium border transition-colors",
//                   activeTab === year
//                     ? "bg-slate-800 text-white border-slate-800"
//                     : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50",
//                 )}
//               >
//                 {year} MDL Updates
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="px-4 md:px-8 lg:px-16">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex gap-8 lg:gap-12">
//             {/* Left Sidebar Timeline */}
//             <div className="hidden md:block w-32 lg:w-40 flex-shrink-0">
//               <div className="sticky top-8">
//                 <div className="relative">
//                   {/* Vertical line with scroll transition */}
//                   <div
//                     className="absolute left-0 w-0.5 bg-slate-300 transition-all duration-300 ease-out"
//                     style={{
//                       height: `${Math.min(100 + scrollY * 0.5, 400)}px`,
//                       opacity: Math.min(0.3 + scrollY * 0.001, 1),
//                     }}
//                   ></div>

//                   {months.map((month, index) => (
//                     <div
//                       key={month}
//                       className="relative mb-6 transition-all duration-300 ease-out"
//                       style={{
//                         transform: `translateX(${Math.max(0, 20 - scrollY * 0.05)}px)`,
//                         opacity: Math.min(0.6 + scrollY * 0.002, 1),
//                       }}
//                     >
//                       <div className="absolute -left-1 w-2 h-2 bg-slate-400 rounded-full"></div>
//                       <div className="pl-6 text-sm text-slate-600 font-medium">{month}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Main Timeline Content */}
//             <div className="flex-1 max-w-4xl">
//               {timelineData.map((item, index) => (
//                 <div key={item.id} className="relative mb-12">
//                   {/* Timeline dot */}
//                   <div className="absolute -left-4 md:-left-8 lg:-left-12 top-0">
//                     <div className={cn("w-3 h-3 rounded-full", item.color)}></div>
//                   </div>

//                   {/* Content */}
//                   <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
//                     <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-4">
//                       {item.date}: {item.title}
//                     </h2>

//                     <div className="space-y-4 text-slate-700 leading-relaxed">
//                       {item.content.map((paragraph, pIndex) => (
//                         <p key={pIndex} className="text-sm md:text-base">
//                           {paragraph}
//                         </p>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Connecting line to next item */}
//                   {index < timelineData.length - 1 && (
//                     <div className="absolute -left-4 md:-left-8 lg:-left-12 top-6 w-0.5 h-12 bg-slate-200"></div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { cn } from "../../lib/utils"

const timelineData = [
  {
    id: "july-25-2025",
    date: "July 25, 2025",
    title: "100+ Cases Reach Settlement; Bellwether Replacements Selected",
    content: [
      "According to a recently filed case management statement, 102 MDL cases managed by the law firm Estey & Bomberger have reached a settlement with Uber. The firm and Uber also reached a comprehensive settlement agreement to resolve their clients' claims in the California Judicial Council Coordination Proceedings (JCCP), a state-level case consolidation. Details on the settlement are not yet available.",
      "After the recent dismissal of one of the bellwether cases in the Uber MDL, the court ordered the plaintiffs to select a replacement. The plaintiffs selected L.S. v. Uber Technologies Inc., a case involving a victim who was allegedly sexually assaulted or harassed by an Uber driver in Corpus Christie, Texas, on January 19, 2025. The court also ordered Uber to select a replacement case for Trial Wave 1, since the dismissed case was set to be in the first round of trials. Uber selected WHB 318, involving a victim who was allegedly sexually assaulted or harassed by an Uber driver in Mecklenburg County, North Carolina, on March 20, 2021.",
      "Outside the courtroom, Uber announced a new policy that will allow women drivers and riders to request to avoid being paired with men starting in August in several major US cities. The app's previous lack of an option to choose the gender of your driver or rider is directly cited in the lawsuits as a product defect.",
    ],
    color: "bg-purple-600",
  },
  {
    id: "july-16-2025",
    date: "July 16, 2025",
    title: "Judge Grants Uber's Motion to Transfer Bellwether Trials Back Home",
    content: [
      "After months of deliberation, U.S. District Judge Charles R. Breyer granted Uber's motion to transfer 11 bellwether cases back to their home states for trial in the Uber sexual assault multidistrict litigation (MDL). In contradiction with typical MDL processes, the bellwether cases will now be transferred to the appropriate districts once pre-trial proceedings conclude in California.",
      '"For the judge to now rule on this clause, which was initially raised back in 2023, despite having approved cases mostly outside California for the bellwether proceedings, disrespects both the judicial process and the victims who have been waiting for their day in court," said Adam Slater, a partner at Slater Slater Schulman LLP, which represents more than 550 sexual assault victims in the litigation.',
    ],
    color: "bg-blue-500",
  },
  {
    id: "june-28-2025",
    date: "June 28, 2025",
    title: "Court Orders Discovery Extension for Additional Evidence Review",
    content: [
      "U.S. District Judge Charles R. Breyer granted a 60-day extension for discovery proceedings in the Uber MDL, allowing both parties additional time to review newly disclosed internal communications and safety protocols. The extension affects approximately 1,200 pending cases across multiple jurisdictions.",
      "Plaintiffs' counsel argued that recently produced documents from Uber's internal safety review committee require extensive analysis and may reveal additional patterns of negligent oversight. The documents, spanning from 2018 to 2024, include communications between executives regarding driver screening procedures and incident response protocols.",
      "Uber's legal team did not oppose the extension, stating that they are committed to full transparency in the discovery process. The company has agreed to produce an additional 50,000 pages of documents by the extended deadline.",
    ],
    color: "bg-green-600",
  },
  {
    id: "june-15-2025",
    date: "June 15, 2025",
    title: "Plaintiffs File Motion for Class Certification in Safety Protocol Claims",
    content: [
      "A coalition of plaintiffs' attorneys filed a motion seeking class certification for claims related to Uber's allegedly deficient safety protocols and driver screening procedures. The proposed class would include all passengers who used Uber services between January 2019 and December 2024 and were subjected to incidents involving inadequately screened drivers.",
      "The motion argues that common questions of law and fact predominate over individual issues, particularly regarding Uber's uniform policies for driver background checks, vehicle inspections, and incident reporting across all markets. Lead counsel estimates the potential class could include over 2 million individuals.",
      "Uber is expected to file its opposition to class certification within 30 days, likely arguing that individual circumstances of each incident preclude class treatment and that state law variations make a nationwide class inappropriate.",
    ],
    color: "bg-red-500",
  },
  {
    id: "may-30-2025",
    date: "May 30, 2025",
    title: "Expert Witness Depositions Begin in Bellwether Cases",
    content: [
      "Expert witness depositions commenced for the first wave of bellwether trials, with testimony from safety experts, technology specialists, and industry analysts. The depositions are expected to continue through July 2025 and will establish key technical and industry standard evidence for the trial proceedings.",
      "Dr. Sarah Mitchell, a transportation safety expert, testified that Uber's driver screening protocols fell below industry standards in several key areas, including psychological evaluation requirements and ongoing monitoring systems. Her analysis covered data from over 15 major ride-sharing companies across North America and Europe.",
      "Uber's expert witnesses are scheduled to provide counter-testimony regarding the company's safety innovations and the challenges of implementing comprehensive screening across a platform with millions of drivers worldwide.",
    ],
    color: "bg-indigo-600",
  },
  {
    id: "may-12-2025",
    date: "May 12, 2025",
    title: "Settlement Negotiations Resume with Federal Mediator",
    content: [
      "Settlement discussions resumed under the guidance of federal mediator Hon. Margaret Thompson, focusing on a potential global resolution for cases involving similar fact patterns. The mediation sessions, held in San Francisco, include representatives from major plaintiffs' firms and Uber's executive legal team.",
      "Sources close to the negotiations indicate that discussions center around a compensation fund structure similar to those used in other mass tort settlements, with individual awards based on severity of harm and economic damages. The proposed fund could exceed $500 million according to preliminary estimates.",
      "While no agreement has been reached, both sides expressed cautious optimism about the mediation process. A follow-up session is scheduled for early June 2025.",
    ],
    color: "bg-yellow-600",
  },
  {
    id: "april-18-2025",
    date: "April 18, 2025",
    title: "Court Approves Amended Case Management Order",
    content: [
      "Judge Breyer approved an amended case management order establishing new deadlines for expert witness disclosures and trial preparation in the Uber MDL. The order addresses concerns raised by both parties regarding the complexity of coordinating trials across multiple jurisdictions.",
      "Under the new timeline, expert witness reports must be submitted by June 30, 2025, with rebuttal reports due by August 15, 2025. The first bellwether trial is now scheduled to begin in October 2025, with subsequent trials following at 60-day intervals.",
      "The amended order also establishes protocols for sharing discovery materials across related state court proceedings and coordination with international litigation involving Uber's operations in Canada and the United Kingdom.",
    ],
    color: "bg-teal-600",
  },
  {
    id: "march-25-2025",
    date: "March 25, 2025",
    title: "Uber Implements Enhanced Safety Features Following Court Pressure",
    content: [
      "In response to ongoing litigation pressure, Uber announced the implementation of enhanced safety features including real-time trip monitoring, emergency response integration, and improved driver verification systems. The updates will be rolled out across all U.S. markets by the end of 2025.",
      "The new safety measures include mandatory driver re-screening every six months, integration with local law enforcement databases for real-time background monitoring, and AI-powered trip anomaly detection that can automatically alert emergency services when unusual patterns are detected.",
      "Plaintiffs' attorneys acknowledged the improvements while maintaining that the measures should have been implemented years earlier. The timing of the announcement, coinciding with ongoing settlement negotiations, has raised questions about Uber's motivation for the safety enhancements.",
    ],
    color: "bg-orange-600",
  },
  {
    id: "february-14-2025",
    date: "February 14, 2025",
    title: "International Coordination Efforts Expand to Include European Cases",
    content: [
      "The MDL court established formal coordination procedures with ongoing litigation in the United Kingdom, Germany, and France involving similar claims against Uber. The coordination aims to prevent conflicting judgments and ensure efficient resolution of overlapping legal issues.",
      "European regulators have expressed interest in the outcomes of the U.S. litigation, particularly regarding safety protocol standards and corporate liability frameworks. The European Union's Digital Services Act may be influenced by findings from the American proceedings.",
      "A joint working group of attorneys from both sides of the Atlantic has been formed to address jurisdictional issues and coordinate discovery efforts where permissible under international law.",
    ],
    color: "bg-pink-600",
  },
  {
    id: "january-08-2025",
    date: "January 8, 2025",
    title: "New Wave of Cases Filed Following Investigative Report",
    content: [
      "Following a comprehensive investigative report by the Washington Post detailing previously undisclosed safety incidents, an additional 200 cases were filed in the Uber MDL. The report revealed internal company documents showing awareness of safety risks that were not adequately addressed.",
      "The investigative report included analysis of over 3,000 incident reports filed with Uber's internal safety team between 2020 and 2024, revealing patterns of inadequate response to serious safety concerns and insufficient follow-up on driver misconduct reports.",
      "Uber issued a statement disputing the characterization of the incidents in the report and emphasizing the company's commitment to rider safety. However, the revelations have intensified calls for increased regulatory oversight of ride-sharing platforms.",
    ],
    color: "bg-purple-500",
  },
]

const months = [
  "July 2025",
  "June 2025",
  "May 2025",
  "April 2025",
  "March 2025",
  "February 2025",
  "January 2025",
  "December 2024",
  "November 2024",
  "October 2024",
  "September 2024",
  "August 2024",
]

export default function Home5() {
  const [activeTab, setActiveTab] = useState("2025")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Header */}
      <div className="px-4 py-8 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
        <h1 
              className="leading-tight mb-4"
              style={{
                fontFamily: '"Futura Bold", Sans-serif',
                fontSize: '100px',
                fontWeight: 700,
                lineHeight: '100px',
                color: '#151052'
              }}
            >
            Uber Multi-District Litigation Timeline
          </h1>
          <div className="w-full h-2 mb-8" style={{ backgroundColor: '#FC821F' }}></div>

          {/* Tab Navigation */}
          <div className="flex gap-1 mb-8">
            {["2025", "2024", "2023"].map((year) => (
              <button
                key={year}
                onClick={() => setActiveTab(year)}
                className={cn(
                  "px-6 py-3 text-sm font-medium border transition-colors",
                  activeTab === year
                    ? "bg-slate-800 text-white border-slate-800"
                    : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50",
                )}
              >
                {year} MDL Updates
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-8 lg:gap-12">
            {/* Left Sidebar Timeline */}
            <div className="hidden md:block w-32 lg:w-40 flex-shrink-0">
              <div className="sticky top-8">
                <div className="relative">
                  {/* Vertical line with scroll transition */}
                  <div
                    className="absolute left-0 w-0.5 bg-slate-300 transition-all duration-300 ease-out"
                    style={{
                      height: `${Math.min(100 + scrollY * 0.5, 400)}px`,
                      opacity: Math.min(0.3 + scrollY * 0.001, 1),
                    }}
                  ></div>

                  {months.map((month, index) => (
                    <div
                      key={month}
                      className="relative mb-6 transition-all duration-300 ease-out"
                      style={{
                        transform: `translateX(${Math.max(0, 20 - scrollY * 0.05)}px)`,
                        opacity: Math.min(0.6 + scrollY * 0.002, 1),
                      }}
                    >
                      <div className="absolute -left-1 w-2 h-2 bg-slate-400 rounded-full"></div>
                      <div className="pl-6 text-sm text-slate-600 font-medium">{month}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Timeline Content */}
            <div className="flex-1 max-w-4xl">
              {timelineData.map((item, index) => (
                <div key={item.id} className="relative mb-12">
                  {/* Timeline dot */}
                  <div className="absolute -left-4 md:-left-8 lg:-left-12 top-0">
                    <div className={cn("w-3 h-3 rounded-full", item.color)}></div>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                    <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-4">
                      {item.date}: {item.title}
                    </h2>

                    <div className="space-y-4 text-slate-700 leading-relaxed">
                      {item.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-sm md:text-base">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Connecting line to next item */}
                  {index < timelineData.length - 1 && (
                    <div className="absolute -left-4 md:-left-8 lg:-left-12 top-6 w-0.5 h-12 bg-slate-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
