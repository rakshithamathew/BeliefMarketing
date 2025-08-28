export default function AboutUs3() {
    return (
      <div className="min-h-screen bg-[#151052] text-white px-4 py-6 sm:py-8 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 
              className="mb-4 sm:mb-6 leading-tight"
              style={{
                fontFamily: '"Futura Bold", Sans-serif',
                fontSize: 'clamp(40px, 8vw, 100px)',
                fontWeight: 700,
                lineHeight: 'clamp(40px, 8vw, 100px)',
                color: '#FFFFFF'
              }}
            >
              How We Can Help
            </h1>
            <p 
              className="leading-relaxed max-w-3xl mx-auto"
              style={{
                fontSize: 'clamp(16px, 4vw, 21px)',
                lineHeight: 'clamp(24px, 5vw, 35px)',
                fontFamily: '"Avenir Book", sans-serif',
                fontWeight: 400,
                color: '#FFFFFF'
              }}
            >
              At Helping Survivors, we provide comprehensive assistance to individuals who have experienced sexual harm.
              To date, we've helped over 1,200 sexual assault survivors find the resources they need. Our services are
              designed to help survivors navigate the resources, supporting legal rights and supporting emotional healing.
              Our mission is to be present and honest every step.
            </p>
          </div>
  
          {/* Services Section */}
          <div className="space-y-8 sm:space-y-12">
            {/* Provide Resources & Support */}
            <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="text-xl sm:text-2xl md:text-3xl">😊</div>
                </div>
              </div>
              <div className="flex-1">
                <h2 
                  className="mb-3 sm:mb-4 leading-tight"
                  style={{
                    fontFamily: '"Futura Bold", Sans-serif',
                    fontSize: 'clamp(20px, 5vw, 25px)',
                    fontWeight: 700,
                    lineHeight: 'clamp(20px, 5vw, 25px)',
                    color: '#FFFFFF'
                  }}
                >
                  Provide Resources & Support
                </h2>
                <p 
                  className="mb-3 sm:mb-4 leading-relaxed"
                  style={{
                    fontSize: 'clamp(16px, 4vw, 21px)',
                    lineHeight: 'clamp(24px, 5vw, 35px)',
                    fontFamily: '"Avenir Book", sans-serif',
                    fontWeight: 400,
                    color: '#FFFFFF'
                  }}
                >
                  When an individual experiences sexual harm, they often do not what the experience, but anyone, or seek
                  outside assistance with their fear. This happens for a variety of reasons — but survivors deserve
                  support whether the harm happened yesterday or fifty years ago.
                </p>
                <p 
                  className="leading-relaxed"
                  style={{
                    fontSize: 'clamp(16px, 4vw, 21px)',
                    lineHeight: 'clamp(24px, 5vw, 35px)',
                    fontFamily: '"Avenir Book", sans-serif',
                    fontWeight: 400,
                    color: '#FFFFFF'
                  }}
                >
                  Helping Survivors connects individuals with relevant resources, including counseling services, hotlines,
                  and community organizations. We also provide information and referrals to help survivors access the
                  support they need. Our goal is to help survivors feel empowered to make decisions about their healing
                  journey and to ensure they have access to the resources and support they need to heal and move forward.
                </p>
              </div>
            </div>
  
            {/* Understand Rights & Options */}
            <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 border-2 border-[#2D1B69] rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#2D1B69] rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h2 
                  className="mb-3 sm:mb-4 leading-tight"
                  style={{
                    fontFamily: '"Futura Bold", Sans-serif',
                    fontSize: 'clamp(20px, 5vw, 25px)',
                    fontWeight: 700,
                    lineHeight: 'clamp(20px, 5vw, 25px)',
                    color: '#FFFFFF'
                  }}
                >
                  Understand Rights & Options
                </h2>
                <p 
                  className="mb-3 sm:mb-4 leading-relaxed"
                  style={{
                    fontSize: 'clamp(16px, 4vw, 21px)',
                    lineHeight: 'clamp(24px, 5vw, 35px)',
                    fontFamily: '"Avenir Book", sans-serif',
                    fontWeight: 400,
                    color: '#FFFFFF'
                  }}
                >
                  Most survivors don't understand their rights and options. This can mean reporting to law enforcement,
                  filing a civil lawsuit, reporting someone to a professional board, and more. We provide connections and
                  resources to help people understand what options may be available to them.
                </p>
                <p 
                  className="leading-relaxed"
                  style={{
                    fontSize: 'clamp(16px, 4vw, 21px)',
                    lineHeight: 'clamp(24px, 5vw, 35px)',
                    fontFamily: '"Avenir Book", sans-serif',
                    fontWeight: 400,
                    color: '#FFFFFF'
                  }}
                >
                  Understanding the full scope of legal and personal options can feel overwhelming. That's where Helping
                  Survivors steps in. From explaining the legal processes involved in civil cases to outlining how to
                  report incidents to professional boards, we aim to demystify survivor choices and connect them to
                  trusted experts. Our goal is to empower survivors with knowledge so they can make informed decisions
                  about their path forward, whether that involves legal action, personal healing, or both.
                </p>
              </div>
            </div>
  
            {/* Helping Survivors Heal */}
            <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="relative">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 border-2 border-[#2D1B69] rounded-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-0.5 sm:w-6 sm:h-0.5 bg-[#2D1B69] rotate-45"></div>
                      <div className="w-4 h-0.5 sm:w-6 sm:h-0.5 bg-[#2D1B69] -rotate-45 absolute"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h2 
                  className="mb-3 sm:mb-4 leading-tight"
                  style={{
                    fontFamily: '"Futura Bold", Sans-serif',
                    fontSize: 'clamp(20px, 5vw, 25px)',
                    fontWeight: 700,
                    lineHeight: 'clamp(20px, 5vw, 25px)',
                    color: '#FFFFFF'
                  }}
                >
                  Helping Survivors Heal
                </h2>
                <p 
                  className="mb-3 sm:mb-4 leading-relaxed"
                  style={{
                    fontSize: 'clamp(16px, 4vw, 21px)',
                    lineHeight: 'clamp(24px, 5vw, 35px)',
                    fontFamily: '"Avenir Book", sans-serif',
                    fontWeight: 400,
                    color: '#FFFFFF'
                  }}
                >
                  Each individual's experience is different — and so are their healing journeys. We want to help provide
                  transparent information about the healing process and help individuals get the right care at the right
                  time.
                </p>
                <p 
                  className="leading-relaxed"
                  style={{
                    fontSize: 'clamp(16px, 4vw, 21px)',
                    lineHeight: 'clamp(24px, 5vw, 35px)',
                    fontFamily: '"Avenir Book", sans-serif',
                    fontWeight: 400,
                    color: '#FFFFFF'
                  }}
                >
                  Healing is a deeply personal process, and there is no one-size-fits-all approach. By providing
                  information about therapeutic options, support strategies, and self-care practices, Helping Survivors
                  helps survivors make informed choices that honor their unique needs and circumstances. We understand
                  that healing takes time, and we're here to support survivors at every stage of their journey, whether
                  they're just beginning to process their experience or are further along in their healing process.
                </p>
              </div>
            </div>
          </div>
  
          {/* Video Section */}
          <div className="mt-12 sm:mt-16">
            <div className="relative rounded-lg overflow-hidden aspect-video">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="How do you work with helping survivors"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    )
  }
  