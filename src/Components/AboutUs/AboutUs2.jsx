export default function AboutUs2() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <h1 
          className="mb-6 sm:mb-8 leading-tight"
          style={{
            fontFamily: '"Futura Bold", Sans-serif',
            fontSize: 'clamp(40px, 8vw, 100px)',
            fontWeight: 700,
            lineHeight: 'clamp(40px, 8vw, 100px)',
            color: '#151052'
          }}
        >
          How We Started
        </h1>

        {/* Description paragraph */}
        <p 
          className="leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto"
          style={{
            fontSize: 'clamp(16px, 4vw, 21px)',
            lineHeight: 'clamp(24px, 5vw, 35px)',
            fontFamily: '"Avenir Book", sans-serif',
            fontWeight: 400,
            color: '#151052'
          }}
        >
          We are a passionate group of experts and advocates who believe individuals who have experienced sexual
          assault, abuse, or harassment deserve to know their rights and options. Our team combines professional
          expertise with deep empathy to ensure survivors feel supported, informed, and empowered to take the next steps
          in their healing and justice journeys.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <button 
            className="px-6 sm:px-8 py-3 rounded-md min-w-[140px] sm:min-w-[160px] transition-colors duration-200"
            style={{
              backgroundColor: '#EBFF02',
              color: '#151052',
              fontFamily: '"Inter", sans-serif',
              fontSize: 'clamp(18px, 4.5vw, 23px)',
              fontWeight: 700
            }}
          >
            Contact Us
          </button>
          <button 
            className="px-6 sm:px-8 py-3 rounded-md min-w-[140px] sm:min-w-[160px] transition-colors duration-200"
            style={{
              backgroundColor: '#151052',
              color: '#EBFF02',
              fontFamily: '"Inter", sans-serif',
              fontSize: 'clamp(18px, 4.5vw, 23px)',
              fontWeight: 700
            }}
          >
            Get Legal Help
          </button>
        </div>
      </div>
    </div>
  )
}
