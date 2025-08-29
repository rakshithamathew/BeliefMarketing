import imag1st from "../../asset/hero1.png"

export default function HomeMain1() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8" style={{ backgroundColor: '#F2F2F2' }}>
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">

            <div className="relative">
              <h2
                className="leading-tight"
                style={{
                  fontFamily: '"Futura Bold", Sans-serif',
                  fontSize: '100px',
                  fontWeight: 700,
                  lineHeight: '100px',
                  color: '#0B2D59'
                }}
              >
                We Help
                <br />
                Law Firms
                <br />
                Get More Cases
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
            Belief Marketing Enterprise partners with attorneys and law firms to deliver qualified motor vehicle accident leads through SEO, paid ads, and custom funnels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* <button
              className="px-8 py-4 transition-colors duration-200"
              style={{
                backgroundColor: '#EBFF02',
                color: '#151052',
                fontFamily: '"Inter", sans-serif',
                fontSize: '23px',
                fontWeight: 700
              }}
            >
             Get Legal Leads
            </button> */}
            <button
              className="bg-[#FC821F] text-[#0B2D59] px-8 py-4 text-lg font-semibold 
                     hover:bg-[#0B2D59] hover:text-white transition-colors duration-200"
              
            >
              Get Legal Leads
            </button>

          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <div className="relative">
            <img
              src={imag1st}
              alt="Diverse group of survivors and community members standing together"
              className="w-full h-auto rounded-lg"
            />

          </div>
        </div>
      </div>
    </div>
  )
}
