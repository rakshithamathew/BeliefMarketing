import { Card, CardContent } from "../ui/Card"
import one from "../../asset/one.png"
import two from "../../asset/two.png"
import three from "../../asset/three.png"
import four from "../../asset/four.png"
import five from "../../asset/five.png"
import six from "../../asset/six.png"

export default function Home4() {
  return (
    <div className="min-h-screen bg-[#0B2D59] text-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-[60px] font-bold mb-6 leading-[80px] text-white" style={{ fontFamily: 'Futura Bold, sans-serif', fontWeight: 700 }}>
            Leads We Generate for Your Firm<br />
          </h1>
          <p className="text-[21px] text-white max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Avenir Book, sans-serif' }}>
            No matter your practice focus, we deliver exclusive accident leads tailored to your firm’s goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white text-gray-800 h-full shadow-lg">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="w-16 h-16 bg-[#c3f53c] rounded-full flex items-center justify-center mb-4 mx-auto">
                <img src={one} alt="" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                Car Accidents
              </h3>
              <p className="text-sm text-gray-600 text-center mb-6 flex-grow">
                Leads from victims of passenger vehicle crashes ready to pursue compensation.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white text-gray-800 h-full shadow-lg">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="w-16 h-16 bg-[#c3f53c] rounded-full flex items-center justify-center mb-4 mx-auto">
                <img src={two} alt="" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                Truck & 18-Wheeler Accidents
              </h3>
              <p className="text-sm text-gray-600 text-center mb-6 flex-grow">
                High-value big rig and semi-truck accident claims for law firms nationwide.
              </p>
             
            </CardContent>
          </Card>

          <Card className="bg-white text-gray-800 h-full shadow-lg">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="w-16 h-16 bg-[#c3f53c] rounded-full flex items-center justify-center mb-4 mx-auto">
                <img src={three} alt="" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                Motorcycle Accidents
              </h3>
              <p className="text-sm text-gray-600 text-center mb-6 flex-grow">
                Serious motorcycle crash cases delivered directly to your intake team.
              </p>
              
            </CardContent>
          </Card>

          <Card className="bg-white text-gray-800 h-full shadow-lg">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="w-16 h-16 bg-[#c3f53c] rounded-full flex items-center justify-center mb-4 mx-auto">
                <img src={four} alt="" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                Pedestrian Accidents
              </h3>
              <p className="text-sm text-gray-600 text-center mb-6 flex-grow">
                Exclusive leads from victims struck by vehicles while walking or cycling.
              </p>
              
            </CardContent>
          </Card>

          <Card className="bg-white text-gray-800 h-full shadow-lg">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="w-16 h-16 bg-[#c3f53c] rounded-full flex items-center justify-center mb-4 mx-auto">
                <img src={five} alt="" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                Rideshare (Uber/Lyft) Accidents
              </h3>
              <p className="text-sm text-gray-600 text-center mb-6 flex-grow">
                Accident leads involving Uber and Lyft drivers—fast-growing and competitive niche.
              </p>
              <div className="text-center">
               
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white text-gray-800 h-full shadow-lg">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="w-16 h-16 bg-[#c3f53c] rounded-full flex items-center justify-center mb-4 mx-auto">
                <img src={six} alt="" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                Commercial Vehicle Accidents
              </h3>
              <p className="text-sm text-gray-600 text-center mb-6 flex-grow">
                Bus, van, and fleet vehicle accident claims connected directly to your firm.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
