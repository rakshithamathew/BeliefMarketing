// import imag1st from "../../imag1st.jpg"

export default function AboutUs1() {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 md:p-8" style={{ backgroundColor: '#F4F0E3' }}>
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 
                className="leading-tight"
                style={{
                  fontFamily: '"Futura Bold", Sans-serif',
                  fontSize: '25px',
                  fontWeight: 700,
                  lineHeight: '0px',
                  color: '#151052'
                }}
              >
                About Us
              </h1>
              <div className="relative">
                <h2 
                  className="leading-tight"
                  style={{
                    fontFamily: '"Futura Bold", Sans-serif',
                    fontSize: '100px',
                    fontWeight: 700,
                    lineHeight: '100px',
                    color: '#151052'
                  }}
                >
                  Our
                  <br />
                  Mission
                </h2>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-[#FC821F] transform translate-y-2"></div>
              </div>
            </div>
  
            <p 
              className="max-w-lg"
              style={{
                fontSize: '21px',
                lineHeight: '35px',
                display: 'block',
                fontFamily: '"Avenir Book", sans-serif',
                fontWeight: 400,
                color: '#151052'
              }}
            >
              Helping Survivors is on a mission to help heal, educate, and empower people who have been impacted by sexual abuse, assault, or harassment.
            </p>
  
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="px-8 py-4 transition-colors duration-200"
                style={{
                  backgroundColor: '#EBFF02',
                  color: '#151052',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '23px',
                  fontWeight: 700
                }}
              >
                About us
              </button>
              <button 
                className="px-8 py-4 text-lg font-semibold transition-colors duration-200"
                style={{
                  backgroundColor: '#151052',
                  color: '#EBFF02'
                }}
              >
                Get Legal Help
              </button>
            </div> */}
          </div>
  
          {/* Right Image Section */}
          <div className="relative">
            <div className="relative">
              <img
                // src={imag1st}
                alt="Diverse group of survivors and community members standing together"
                className="w-full h-auto rounded-lg"
              />
  
              {/* Circular Logo Overlay */}
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
  