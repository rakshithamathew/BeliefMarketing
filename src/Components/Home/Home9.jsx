import { Youtube, Instagram } from "lucide-react"

export default function Footter() {
  return (
    <div className="bg-[#2D2A6E] text-white">
      {/* Header Section */}
      <div className="px-6 py-6 md:px-12 md:py-8 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#FC821F] flex items-center justify-center text-black font-bold text-2xl">
              B
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">About Belief <br></br> Marketing Enterprise</h1>
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

      {/* Bottom Logo and Copyright */}
      <div className="text-center py-6 md:py-8">
        <div className="w-16 h-16 bg-[#FC821F] flex items-center justify-center text-black font-bold text-3xl mx-auto mb-4">
          B
        </div>
        <p className="text-[#FC821F] font-semibold"> Belief Marketing Enterprise © 2025</p>
      </div>
    </div>
  )
}
