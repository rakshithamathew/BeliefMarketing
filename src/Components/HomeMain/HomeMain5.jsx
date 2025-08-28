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
              <button className="bg-[#FC821F] text-[#0B2D59] px-8 py-4 text-lg font-semibold hover:bg-[#b8f000] transition-colors duration-200">
                Get a Free Lead Generation Plan
              </button>
            </div>
          </div>
  
          <div className="relative">
            <div className="relative">
              <img
                src="https://plus.unsplash.com/premium_photo-1661715812379-23d652805042?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Diverse group of survivors and community members standing together"
                className="w-full h-auto rounded-lg"
              />
  
              <div className="absolute top-4 right-4 md:top-8 md:right-8">
                <div className="relative w-24 h-24 md:w-32 md:h-32">
                  <div className="w-full h-full bg-[#FC821F] rounded-full flex items-center justify-center border-4 border-[#0B2D59]">
                    <div className="text-[#0B2D59] font-bold text-2xl md:text-3xl">H</div>
                  </div>
                  <div className="absolute inset-0 rounded-full">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <defs>
                        <path id="circle" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                      </defs>
                      <text className="text-[8px] md:text-[6px] fill-[#0B2D59] font-semibold">
                        <textPath href="#circle" startOffset="0%">
                          HELPING SURVIVORS • HELPING SURVIVORS •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  