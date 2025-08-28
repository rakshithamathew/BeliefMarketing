import icon1 from "../../icon1.png"
import icon2 from "../../icons2.png"
import icon3 from "../../icons3.png"

export default function HomeMain2() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-[60px] font-[700] text-[#151052] mb-6" style={{ fontFamily: '"Futura Bold"' }}>How We Can Help</h1>
          <p className="text-[21px] text-[#0A2427] max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: '"Avenir Book"' }}>
            At Belief Marketing Enterprise, we specialize in helping law firms grow by connecting them with high-quality, exclusive motor vehicle accident leads. Whether you are a solo attorney or a large law firm, we create a tailored marketing strategy that combines SEO, ads, and conversion funnels to ensure a steady flow of clients. Our goal is simple: help you focus on winning cases while we take care of getting you qualified leads.
          </p>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Legal Help */}
          <div className="text-center flex flex-col h-full bg-white rounded-l-lg md:rounded-l-lg md:rounded-r-none p-8 transition-shadow duration-300">
            <div className="w-24 h-24 mx-auto mb-8 bg-[#f5f5dc] rounded-full flex items-center justify-center">
              <img src={icon1} alt="icon" />
            </div>
            <h2 className="text-[35px] font-[400] mb-4" style={{ fontFamily: '"Futura Book"' }}>SEO & Organic Growth</h2>
            <p className="text-[21px] font-[400] mb-8 leading-relaxed px-2 flex-grow" style={{ fontFamily: '"Avenir Book"' }}>
              We design and optimize legal websites, blogs, and landing pages that rank for accident-related keywords. This ensures your firm attracts clients who are actively searching for legal help.
            </p>
            <button className="bg-[#FC821F] hover:bg-[#FC821F] text-[#1e1b4b] font-semibold px-8 py-3 rounded-md text-lg transition-colors duration-200">
              Get Help
            </button>
          </div>

          {/* Introductions */}
          <div className="text-center flex flex-col h-full bg-white p-8 transition-shadow duration-300 border-l border-r border-[#F4F0E3]">
            <div className="w-24 h-24 mx-auto mb-8 bg-[#f5f5dc] rounded-full flex items-center justify-center">
              <img src={icon2} alt="icon" />
            </div>
            <h2 className="text-[35px] font-[400] mb-4" style={{ fontFamily: '"Futura Book"' }}>Performance Marketing (Paid Ads)</h2>
            <p className="text-[21px] font-[400] mb-8 leading-relaxed px-2 flex-grow" style={{ fontFamily: '"Avenir Book"' }}>
              We manage high-performing ad campaigns across Google, Facebook, and YouTube to target accident victims right when they need legal support, delivering fast and qualified leads.
            </p>
            <button className="bg-[#FC821F] hover:bg-[#FC821F] text-[#1e1b4b] font-semibold px-8 py-3 rounded-md text-lg transition-colors duration-200">
              Get Support
            </button>
          </div>

          {/* Information */}
          <div className="text-center flex flex-col h-full bg-white rounded-r-lg md:rounded-r-lg md:rounded-l-none p-8 transition-shadow duration-300">
            <div className="w-24 h-24 mx-auto mb-8 bg-[#f5f5dc] rounded-full flex items-center justify-center">
              <img src={icon3} alt="icon" />

            </div>
            <h2 className="text-[35px] font-[400] mb-4" style={{ fontFamily: '"Futura Book"' }}>Lead Funnels & Conversion Systems</h2>
            <p className="text-[21px] font-[400] mb-8 leading-relaxed px-2 flex-grow" style={{ fontFamily: '"Avenir Book"' }}>
              We build custom multi-step forms, quiz funnels, and call tracking systems that convert website visitors into signed cases, ensuring you maximize ROI from every marketing dollar.
            </p>
            <button className="bg-[#FC821F] hover:bg-[#FC821F] text-[#1e1b4b] font-semibold px-8 py-3 rounded-md text-lg transition-colors duration-200">
              Get Informed
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
