import { Youtube, Instagram } from "lucide-react"

export default function Footter() {
  return (
    <div className="min-h-screen bg-[#2D2A6E] text-white">
      {/* Header Section */}
      <div className="px-6 py-8 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#FC821F] flex items-center justify-center text-black font-bold text-2xl">
              H
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">Helping Survivors</h1>
          </div>

          {/* Mission Statement */}
          <div className="flex-1 lg:max-w-md lg:mx-8">
            <p style={{
              fontFamily: '"Futura Book", Sans-serif',
              fontSize: '17px',
              fontWeight: 500,
              lineHeight: '1.5em'
            }}>
              Belief Marketing Enterprise is a legal marketing agency dedicated to helping law firms grow. We generate exclusive, high-quality motor vehicle accident leads through SEO, paid ads, and conversion funnels. Our mission is simple: deliver results, not just clicks.
            </p>
          </div>

          {/* Get in Touch Button */}
          <button className="bg-[#FC821F] text-black px-6 py-3 font-semibold hover:bg-yellow-300 transition-colors self-start lg:self-center">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-white/20 mx-6 md:mx-12 lg:mx-16"></div>

      {/* Footer Links Section */}
      <div className="px-6 py-12 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Connect Column */}
          <div>
            <h3 style={{
              fontFamily: '"Avenir Book", Sans-serif',
              fontSize: '20px',
              fontWeight: 800,
              lineHeight: '20px'
            }} className="mb-6">Connect</h3>
                         <ul className="space-y-3">
               <li>
                 <a href="#" style={{
                   fontFamily: '"Avenir Book", Sans-serif',
                   fontSize: '18px',
                   fontWeight: 400,
                   lineHeight: '25px',
                   color: 'white',
                   textDecoration: 'none'
                 }} className="hover:text-[#FC821F] transition-colors">
                   Contact Us
                 </a>
               </li>
               <li>
                 <a href="#" style={{
                   fontFamily: '"Avenir Book", Sans-serif',
                   fontSize: '18px',
                   fontWeight: 400,
                   lineHeight: '25px',
                   color: 'white',
                   textDecoration: 'none'
                 }} className="hover:text-[#FC821F] transition-colors">
                   About Us
                 </a>
               </li>
               <li>
                 <a href="#" style={{
                   fontFamily: '"Avenir Book", Sans-serif',
                   fontSize: '18px',
                   fontWeight: 400,
                   lineHeight: '25px',
                   color: 'white',
                   textDecoration: 'none'
                 }} className="hover:text-[#FC821F] transition-colors">
                   Melissa Reitberg
                 </a>
               </li>
               <li>
                 <a href="#" style={{
                   fontFamily: '"Avenir Book", Sans-serif',
                   fontSize: '18px',
                   fontWeight: 400,
                   lineHeight: '25px',
                   color: 'white',
                   textDecoration: 'none'
                 }} className="hover:text-[#FC821F] transition-colors">
                   Kathryn Kosmides
                 </a>
               </li>
               <li>
                 <a href="#" style={{
                   fontFamily: '"Avenir Book", Sans-serif',
                   fontSize: '18px',
                   fontWeight: 400,
                   lineHeight: '25px',
                   color: 'white',
                   textDecoration: 'none'
                 }} className="hover:text-[#FC821F] transition-colors">
                   Media Inquiries
                 </a>
               </li>
             </ul>
          </div>

          {/* Types of Assault Column */}
          <div>
            <h3 style={{
              fontFamily: '"Avenir Book", Sans-serif',
              fontSize: '20px',
              fontWeight: 800,
              lineHeight: '20px'
            }} className="mb-6">Types of Assault</h3>
                         <ul className="space-y-3">
               <li>
                 <a href="#" style={{
                   fontFamily: '"Avenir Book", Sans-serif',
                   fontSize: '18px',
                   fontWeight: 400,
                   lineHeight: '25px',
                   color: 'white',
                   textDecoration: 'none'
                 }} className="hover:text-[#FC821F] transition-colors">
                   Rideshare Sexual Assault
                 </a>
               </li>
               <li>
                 <a href="#" style={{
                   fontFamily: '"Avenir Book", Sans-serif',
                   fontSize: '18px',
                   fontWeight: 400,
                   lineHeight: '25px',
                   color: 'white',
                   textDecoration: 'none'
                 }} className="hover:text-[#FC821F] transition-colors">
                   Workplace Sexual Assault
                 </a>
               </li>
               <li>
                 <a href="#" style={{
                   fontFamily: '"Avenir Book", Sans-serif',
                   fontSize: '18px',
                   fontWeight: 400,
                   lineHeight: '25px',
                   color: 'white',
                   textDecoration: 'none'
                 }} className="hover:text-[#FC821F] transition-colors">
                   Child Sex Abuse
                 </a>
               </li>
               <li>
                 <a href="#" style={{
                   fontFamily: '"Avenir Book", Sans-serif',
                   fontSize: '18px',
                   fontWeight: 400,
                   lineHeight: '25px',
                   color: 'white',
                   textDecoration: 'none'
                 }} className="hover:text-[#FC821F] transition-colors">
                   School Sexual Abuse
                 </a>
               </li>
               <li>
                 <a href="#" style={{
                   fontFamily: '"Avenir Book", Sans-serif',
                   fontSize: '18px',
                   fontWeight: 400,
                   lineHeight: '25px',
                   color: 'white',
                   textDecoration: 'none'
                 }} className="hover:text-[#FC821F] transition-colors">
                   Clergy Sexual Abuse
                 </a>
               </li>
               <li>
                 <a href="#" style={{
                   fontFamily: '"Avenir Book", Sans-serif',
                   fontSize: '18px',
                   fontWeight: 400,
                   lineHeight: '25px',
                   color: 'white',
                   textDecoration: 'none'
                 }} className="hover:text-[#FC821F] transition-colors">
                   Doctor Sexual Abuse
                 </a>
               </li>
             </ul>
          </div>

          {/* Resources & Support Column */}
          <div>
            <h3 style={{
              fontFamily: '"Avenir Book", Sans-serif',
              fontSize: '20px',
              fontWeight: 800,
              lineHeight: '20px'
            }} className="mb-6">Resources & Support</h3>
                         <ul className="space-y-3">
               <li>
                 <a href="#" style={{
                   fontFamily: '"Avenir Book", Sans-serif',
                   fontSize: '18px',
                   fontWeight: 400,
                   lineHeight: '25px',
                   color: 'white',
                   textDecoration: 'none'
                 }} className="hover:text-[#FC821F] transition-colors">
                   Get Legal Help
                 </a>
               </li>
               <li>
                 <a href="#" style={{
                   fontFamily: '"Avenir Book", Sans-serif',
                   fontSize: '18px',
                   fontWeight: 400,
                   lineHeight: '25px',
                   color: 'white',
                   textDecoration: 'none'
                 }} className="hover:text-[#FC821F] transition-colors">
                   Resources
                 </a>
               </li>
               <li>
                 <a href="#" style={{
                   fontFamily: '"Avenir Book", Sans-serif',
                   fontSize: '18px',
                   fontWeight: 400,
                   lineHeight: '25px',
                   color: 'white',
                   textDecoration: 'none'
                 }} className="hover:text-[#FC821F] transition-colors">
                   How to Report Sexual Assault
                 </a>
               </li>
               <li>
                 <a href="#" style={{
                   fontFamily: '"Avenir Book", Sans-serif',
                   fontSize: '18px',
                   fontWeight: 400,
                   lineHeight: '25px',
                   color: 'white',
                   textDecoration: 'none'
                 }} className="hover:text-[#FC821F] transition-colors">
                   Sexual Assault Statute of Limitations
                 </a>
               </li>
               <li>
                 <a href="#" style={{
                   fontFamily: '"Avenir Book", Sans-serif',
                   fontSize: '18px',
                   fontWeight: 400,
                   lineHeight: '25px',
                   color: 'white',
                   textDecoration: 'none'
                 }} className="hover:text-[#FC821F] transition-colors">
                   Information Videos
                 </a>
               </li>
             </ul>
          </div>

          {/* Stay Connected Column */}
          <div>
            <h3 style={{
              fontFamily: '"Avenir Book", Sans-serif',
              fontSize: '20px',
              fontWeight: 800,
              lineHeight: '20px'
            }} className="mb-6">Stay Connected</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#FC821F] transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="hover:text-[#FC821F] transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Information You Can Trust Section */}
      <div className="px-6 md:px-12 lg:px-16 pb-12">
        <div className="border-2 border-white p-8 md:p-12 relative">
          <h2 style={{
            fontFamily: '"Avenir Book", Sans-serif',
            fontSize: '17px',
            fontWeight: 400,
            lineHeight: '1em'
          }} className="text-center mb-8 bg-[#2D2A6E] px-4 absolute -top-4 left-1/2 transform -translate-x-1/2">
            Information You Can Trust
          </h2>

          <div className="space-y-6">
            <p style={{
              textAlign: 'center',
              fontFamily: '"Avenir Book", Sans-serif',
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: '35px'
            }}>
              Helping Survivors is an organization on a mission to help heal, educate, and empower people who have been
              impacted by sexual assault and abuse.
            </p>

            <p style={{
              textAlign: 'center',
              fontFamily: '"Avenir Book", Sans-serif',
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: '35px'
            }}>
              All content, links, and information on our site is designed to be as accurate, unbiased, and up-to-date as
              possible. However, Helping Survivors is not a substitute for professional medical or legal advice and we
              do not endorse any third-party organizations or individuals unless explicitly stated otherwise.
            </p>

            <p style={{
              textAlign: 'center',
              fontFamily: '"Avenir Book", Sans-serif',
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: '35px'
            }}>
              Helping Survivors partners with nonprofits, law firms, and other organizations. We will not share your
              information without prior consent and abide by all privacy laws and regulations.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Logo and Copyright */}
      <div className="text-center pb-8">
        <div className="w-16 h-16 bg-[#FC821F] flex items-center justify-center text-black font-bold text-3xl mx-auto mb-4">
          B
        </div>
        <p className="text-[#FC821F] font-semibold">Belife Marketing Enterprise © 2025</p>
      </div>
    </div>
  )
}
