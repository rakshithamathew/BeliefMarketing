export default function Home2() {
    return (
      <div className="h-10vh bg-gray-50">
        {/* Header Bar */}
        <div className="px-4 py-3" style={{ backgroundColor: '#00C9FF' }}>
          {/* Desktop Version */}
          <div className="hidden md:block">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Author Section */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
                    alt="Kathryn Kosmides"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div 
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    <span 
                      style={{
                        fontFamily: '"Futura Bold", Sans-serif',
                        fontWeight: 700
                      }}
                    >
                      Author:
                    </span>{" "}
                    Kathryn Kosmides
                  </div>
                  <div 
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Survivor Advocate
                  </div>
                </div>
              </div>
  
              {/* Reviewer Section */}
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div 
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    <span 
                      style={{
                        fontFamily: '"Futura Bold", Sans-serif',
                        fontWeight: 700
                      }}
                    >
                      Reviewed By:
                    </span>{" "}
                    Melissa Reitberg
                  </div>
                  <div 
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    User Sexual Assault Attorney
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                    alt="Melissa Reitberg"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
  
          {/* Mobile Version */}
          <div className="md:hidden">
            <div className="max-w-7xl mx-auto space-y-3">
              {/* Author Section - Mobile */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                    alt="Kathryn Kosmides"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div 
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    <span 
                      style={{
                        fontFamily: '"Futura Bold", Sans-serif',
                        fontWeight: 700
                      }}
                    >
                      Author:
                    </span>{" "}
                    Kathryn Kosmides
                  </div>
                  <div 
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    Survivor Advocate
                  </div>
                </div>
              </div>
  
              {/* Reviewer Section - Mobile */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                    alt="Melissa Reitberg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div 
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    <span 
                      style={{
                        fontFamily: '"Futura Bold", Sans-serif',
                        fontWeight: 700
                      }}
                    >
                      Reviewed By:
                    </span>{" "}
                    Melissa Reitberg
                  </div>
                  <div 
                    style={{
                      fontSize: '21px',
                      lineHeight: '35px',
                      fontFamily: '"Avenir Book", sans-serif',
                      fontWeight: 400,
                      color: '#151052'
                    }}
                  >
                    User Sexual Assault Attorney
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Content Area */}
      </div>
    )
  }
  