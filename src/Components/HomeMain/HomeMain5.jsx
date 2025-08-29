import heroTwo from "../../asset/hero2.png"

export default function HomeMain5() {
  return (
    <div className="min-h-screen bg-[#f5f1e8] flex items-center justify-center p-4 md:p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B2D59] leading-tight">
              Ready to Scale Your Law Firm With More Cases?
            </h1>
            <div className="relative">
              <div className="absolute bottom-0 left-0 w-full h-2 bg-[#FC821F] transform translate-y-2"></div>
            </div>
          </div>

          <p className="text-[#0B2D59] text-lg md:text-xl leading-relaxed max-w-lg">
            We provide exclusive, qualified accident leads nationwide. No setup fees. No long-term contracts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#FC821F] text-[#0B2D59] px-8 py-4 text-lg font-semibold 
                     hover:bg-[#0B2D59] hover:text-white transition-colors duration-200">
              Get a Free Lead Generation Plan
            </button>
          </div>

        </div>

        <div className="relative">
          <div className="relative">
            <img
              src={heroTwo}
              alt="Diverse group of survivors and community members standing together"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
