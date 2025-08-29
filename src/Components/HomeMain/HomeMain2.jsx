import icon1 from "../../asset/seo.png"
import icon2 from "../../asset/lead.png"
import icon3 from "../../asset/Performance.png"

export default function HomeMain2() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-[60px] font-[700] text-[#151052] mb-6" style={{ fontFamily: '"Futura Bold"' }}>How We Can Help</h1>
          <p className="text-[21px] text-[#0A2427] max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: '"Avenir Book"' }}>
            At Belief Marketing Enterprise, we connect law firms with exclusive motor vehicle accident leads. Whether you're a solo attorney or a large firm, we create tailored strategies using SEO, ads, and conversion funnels, so you can focus on winning cases while we deliver qualified leads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="text-center flex flex-col h-full bg-white rounded-l-lg md:rounded-l-lg md:rounded-r-none p-8 transition-shadow duration-300">
            <div className="w-24 h-24 mx-auto mb-8 bg-[#f5f5dc] rounded-full flex items-center justify-center">
              <img src={icon1} alt="icon" />
            </div>
            <h2 className="text-[35px] font-[400] mb-4" style={{ fontFamily: '"Futura Book"' }}>SEO & Organic Growth</h2>
            <p className="text-[21px] font-[400] mb-8 leading-relaxed px-2 flex-grow" style={{ fontFamily: '"Avenir Book"' }}>
               We optimize legal websites, blogs, and landing pages to rank for accident-related keywords, attracting clients actively searching for legal help. 
            </p>
            <button className="bg-[#FC821F]  hover:bg-[#0B2D59] hover:text-white  text-[#1e1b4b] font-semibold px-8 py-3 rounded-md text-lg transition-colors duration-200">
              Get Help
            </button>
          </div>

          <div className="text-center flex flex-col h-full bg-white p-8 transition-shadow duration-300 border-l border-r border-[#F4F0E3]">
            <div className="w-24 h-24 mx-auto mb-8 bg-[#f5f5dc] rounded-full flex items-center justify-center">
              <img src={icon2} alt="icon" />
            </div>
            <h2 className="text-[35px] font-[400] mb-4" style={{ fontFamily: '"Futura Book"' }}>Performance Marketing (Paid Ads)</h2>
            <p className="text-[21px] font-[400] mb-8 leading-relaxed px-2 flex-grow" style={{ fontFamily: '"Avenir Book"' }}>
             We run high-performing ad campaigns across Google, Facebook, and YouTube to target accident victims and deliver qualified leads. 
            </p>
            <button className="bg-[#FC821F]  hover:bg-[#0B2D59] hover:text-white  text-[#1e1b4b] font-semibold px-8 py-3 rounded-md text-lg transition-colors duration-200">
              Get Support
            </button>
          </div>

          <div className="text-center flex flex-col h-full bg-white rounded-r-lg md:rounded-r-lg md:rounded-l-none p-8 transition-shadow duration-300">
            <div className="w-24 h-24 mx-auto mb-8 bg-[#f5f5dc] rounded-full flex items-center justify-center">
              <img src={icon3} alt="icon" />

            </div>
            <h2 className="text-[35px] font-[400] mb-4" style={{ fontFamily: '"Futura Book"' }}>Lead Funnels & Conversion Systems</h2>
            <p className="text-[21px] font-[400] mb-8 leading-relaxed px-2 flex-grow" style={{ fontFamily: '"Avenir Book"' }}>
               We create custom forms, quiz funnels, and call tracking systems that convert visitors into signed cases, ensuring maximum ROI.
            </p>
            <button className="bg-[#FC821F] text-[#1e1b4b] font-semibold  hover:bg-[#0B2D59] hover:text-white transition-colors duration-200 px-8 py-3 rounded-md text-lg ">
              Get Informed
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
