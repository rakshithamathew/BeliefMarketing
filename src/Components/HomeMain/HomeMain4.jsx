import { Card, CardContent } from "../ui/Card"

export default function Home4() {
  return (
    <div className="min-h-screen bg-[#0B2D59] text-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-[60px] font-bold mb-6 leading-[80px] text-white" style={{ fontFamily: 'Futura Bold, sans-serif', fontWeight: 700 }}>
            Leads We Generate for Your Firm<br />
            
          </h1>
          <p className="text-[21px] text-white max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Avenir Book, sans-serif' }}>
           No matter your practice focus, we deliver exclusive accident leads tailored to your firm’s goals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Workplace Sexual Assault Card */}
          <Card className="bg-white text-gray-800 h-full shadow-lg">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="w-16 h-16 bg-[#c3f53c] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1L12 12.5c-.47-.63-1.21-1-2.01-1H7.46c-.8 0-1.54.37-2.01 1L2.5 16H5v6h15z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                Car Accidents
              </h3>
              <p className="text-sm text-gray-600 text-center mb-6 flex-grow">
                Leads from victims of passenger vehicle crashes ready to pursue compensation.
              </p>
              <div className="text-center">
                <a href="#" className="inline-flex items-center text-gray-800 font-semibold hover:text-gray-600 transition-colors duration-200">
                 Learn More <span className="ml-1">▸</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Religious Sexual Abuse Card */}
          <Card className="bg-white text-gray-800 h-full shadow-lg">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="w-16 h-16 bg-[#c3f53c] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  <path d="M12 6.5l1.54 3.13L17 10.27l-2.5 2.44.59 3.44L12 15.77l-3.09 1.63.59-3.44L7 10.27l3.46-.64L12 6.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                Truck & 18-Wheeler Accidents
              </h3>
              <p className="text-sm text-gray-600 text-center mb-6 flex-grow">
               High-value big rig and semi-truck accident claims for law firms nationwide.
              </p>
              <div className="text-center">
                <a href="#" className="inline-flex items-center text-gray-800 font-semibold hover:text-gray-600 transition-colors duration-200">
                  Get Truck Leads<span className="ml-1">▸</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Rideshare Sexual Assault Card */}
          <Card className="bg-white text-gray-800 h-full shadow-lg">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="w-16 h-16 bg-[#c3f53c] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                Motorcycle Accidents
              </h3>
              <p className="text-sm text-gray-600 text-center mb-6 flex-grow">
               Serious motorcycle crash cases delivered directly to your intake team.
              </p>
              <div className="text-center">
                <a href="#" className="inline-flex items-center text-gray-800 font-semibold hover:text-gray-600 transition-colors duration-200">
                  Get Motorcycle Leads <span className="ml-1">▸</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Juvenile Detention Sexual Abuse Card */}
          <Card className="bg-white text-gray-800 h-full shadow-lg">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="w-16 h-16 bg-[#c3f53c] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1L12 12.5c-.47-.63-1.21-1-2.01-1H7.46c-.8 0-1.54.37-2.01 1L2.5 16H5v6h15z"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                Pedestrian Accidents
              </h3>
              <p className="text-sm text-gray-600 text-center mb-6 flex-grow">
               Exclusive leads from victims struck by vehicles while walking or cycling.
              </p>
              <div className="text-center">
                <a href="#" className="inline-flex items-center text-gray-800 font-semibold hover:text-gray-600 transition-colors duration-200">
                 Learn More <span className="ml-1">▸</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* School & Teacher Sexual Abuse Card */}
          <Card className="bg-white text-gray-800 h-full shadow-lg">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="w-16 h-16 bg-[#c3f53c] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  <path d="M12 6l-3 3v4h6V9l-3-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
               Rideshare (Uber/Lyft) Accidents
              </h3>
              <p className="text-sm text-gray-600 text-center mb-6 flex-grow">
               Accident leads involving Uber and Lyft drivers—fast-growing and competitive niche.
              </p>
              <div className="text-center">
                <a href="#" className="inline-flex items-center text-gray-800 font-semibold hover:text-gray-600 transition-colors duration-200">
                Get Rideshare Leads<span className="ml-1">▸</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Doctor & Medical Sexual Abuse Card */}
          <Card className="bg-white text-gray-800 h-full shadow-lg">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="w-16 h-16 bg-[#c3f53c] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
               Commercial Vehicle Accidents
              </h3>
              <p className="text-sm text-gray-600 text-center mb-6 flex-grow">
                Bus, van, and fleet vehicle accident claims connected directly to your firm.
              </p>
              <div className="text-center">
                <a href="#" className="inline-flex items-center text-gray-800 font-semibold hover:text-gray-600 transition-colors duration-200">
                  Start Now <span className="ml-1">▸</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
