import { Youtube, Instagram } from "lucide-react"

export default function Footter() {
  return (
    <div className="min-h-screen bg-[#2D2dA6E] text-white">
      <div className="px-6 py-8 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          <div className="flex-1 lg:max-w-md lg:mx-8">
            <p style={{
              fontFamily: '"Futura Book", Sans-serif',
              fontSize: '17px',
              fontWeight: 500,
              lineHeight: '1.5em'
            }}>
              Belief Marketing Enterprise is a legal marketing agency focused on helping law firms grow by generating exclusive, high-quality motor vehicle accident leads through SEO, paid ads, and conversion funnels. Our mission is to deliver results, not just clicks.
            </p>
          </div>

          <button className="bg-[#FC821F] text-[#0B2D59] px-8 py-4 text-lg font-semibold 
                     hover:bg-[#0B2D59] hover:text-white transition-colors duration-200">
            Get in Touch
          </button>
        </div>
      </div>

      <div className="text-center pb-8">
        <div className="w-16 h-16 bg-[#FC821F] flex items-center justify-center text-black font-bold text-3xl mx-auto mb-4">
          B
        </div>
        <p className="text-[#FC821F] font-semibold">Belife Marketing Enterprise © 2025</p>
      </div>
    </div>
  )
}
