export default function AboutUs4() {
    return (
      <div className="min-h-screen bg-white py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main heading */}
          <h1 
            className="text-center mb-6 sm:mb-8 leading-tight"
            style={{
              fontFamily: '"Futura Bold", Sans-serif',
              fontSize: 'clamp(40px, 8vw, 100px)',
              fontWeight: 700,
              lineHeight: 'clamp(40px, 8vw, 100px)',
              color: '#151052'
            }}
          >
            Featured Law Firm Partner
          </h1>
  
          {/* Introduction paragraphs */}
          <div className="space-y-4 sm:space-y-6 text-center mb-12 sm:mb-16">
            <p 
              className="leading-relaxed"
              style={{
                fontSize: 'clamp(16px, 4vw, 21px)',
                lineHeight: 'clamp(24px, 5vw, 35px)',
                fontFamily: '"Avenir Book", sans-serif',
                fontWeight: 400,
                color: '#151052'
              }}
            >
              Helping Survivors works with a variety of organizations, including law firms. These law firms help us craft
              helpful content and provide information to survivors of sexual assault, abuse, and harassment to understand
              their legal rights and options.
            </p>
  
            <p 
              className="leading-relaxed"
              style={{
                fontSize: 'clamp(16px, 4vw, 21px)',
                lineHeight: 'clamp(24px, 5vw, 35px)',
                fontFamily: '"Avenir Book", sans-serif',
                fontWeight: 400,
                color: '#151052'
              }}
            >
              Helping Survivors collaborates with <span className="text-blue-600">Meirowitz & Wasserberg, LLP</span>, a
              law firm dedicated to advocating for victims of wrongdoing. Known for their expertise in handling cases
              involving sexual abuse and assault, Meirowitz & Wasserberg provide survivors with access to experienced
              legal professionals who are committed to seeking justice.
            </p>
  
            <p 
              className="leading-relaxed"
              style={{
                fontSize: 'clamp(16px, 4vw, 21px)',
                lineHeight: 'clamp(24px, 5vw, 35px)',
                fontFamily: '"Avenir Book", sans-serif',
                fontWeight: 400,
                color: '#151052'
              }}
            >
              If you reach out to Helping Survivors, a representative from a{" "}
              <span className="text-blue-600">law firm</span> may contact you directly in regards to filing a{" "}
              <span className="text-blue-600">civil case</span> if they believe they may be able to represent you. The
              firm's compassionate and client-focused approach ensures survivors feel supported throughout the legal
              process. They stand as advocates for those whose voices have been silenced, ensuring accountability and
              striving for meaningful results.
            </p>
          </div>
  
          {/* Attorney profile section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* Left column - Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[400px] sm:max-w-[500px] lg:w-[650px] h-[300px] sm:h-[400px] lg:h-[625px] bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Professional lawyer portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
  
            {/* Right column - Attorney info */}
            <div className="space-y-4 sm:space-y-6">
              <h2 
                className="leading-tight"
                style={{
                  fontFamily: '"Futura Bold", Sans-serif',
                  fontSize: 'clamp(20px, 5vw, 25px)',
                  fontWeight: 700,
                  lineHeight: 'clamp(20px, 5vw, 25px)',
                  color: '#151052'
                }}
              >
                Melissa Ryan Reitberg
              </h2>
  
              <p 
                className="leading-relaxed"
                style={{
                  fontSize: 'clamp(16px, 4vw, 21px)',
                  lineHeight: 'clamp(24px, 5vw, 35px)',
                  fontFamily: '"Avenir Book", sans-serif',
                  fontWeight: 400,
                  color: '#151052'
                }}
              >
                Melissa Ryan Reitberg is an experienced sexual assault attorney at Meirowitz & Wasserberg. Her
                compassionate, detail-oriented approach ensures survivors feel supported throughout the legal process.
                Melissa and her team are dedicated advocates for survivors of sexual assault, with extensive experience
                helping individuals take legal action in cases of institutionalized abuse. Their expertise includes
                representing survivors in:
              </p>
  
              {/* Expertise list */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex-shrink-0 mt-1">
                    <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white m-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p 
                    style={{
                      fontSize: 'clamp(14px, 3.5vw, 21px)',
                      lineHeight: 'clamp(20px, 4.5vw, 35px)',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Uber/Lyft sexual assault
                  </p>
                </div>
  
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex-shrink-0 mt-1">
                    <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white m-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p 
                    style={{
                      fontSize: 'clamp(14px, 3.5vw, 21px)',
                      lineHeight: 'clamp(20px, 4.5vw, 35px)',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Sexual assaults and abuse by a doctor
                  </p>
                </div>
  
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex-shrink-0 mt-1">
                    <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white m-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p 
                    style={{
                      fontSize: 'clamp(14px, 3.5vw, 21px)',
                      lineHeight: 'clamp(20px, 4.5vw, 35px)',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Sexual assault and abuse by members of religious organizations
                  </p>
                </div>
  
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex-shrink-0 mt-1">
                    <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white m-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p 
                    style={{
                      fontSize: 'clamp(14px, 3.5vw, 21px)',
                      lineHeight: 'clamp(20px, 4.5vw, 35px)',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Children and teens abused in schools, juvenile detention centers, foster care, and youth programs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  