export default function Home3() {
  const faqs = [
    {
      question: "Exclusive, never-shared leads",
    },
    {
      question: "100% compliant, ethical marketing",
    },
    {
      question: "Target clients in your chosen states",
    },
    {
      question: "Proven results across accident cases",
    }
  ]

  return (
    <div className="bg-stone-100 px-4 py-12 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-[60px] font-[700] leading-[60px] text-[#151052] mb-6" style={{ fontFamily: 'Futura Bold, Futura, sans-serif' }}>
            Why Choose Us
          </h1>
          <p className="text-[21px] text-[#0A2427] max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Avenir Book, Avenir, sans-serif' }}>
            Why Law Firms Trust Belief Marketing Enterprise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {faqs.map((faq, index) => (
            <div key={index} className="flex items-start gap-4 ml-[15%]">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-[#FC821F] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <p
                  className="text-[21px] text-[#0A2427] leading-relaxed"
                  style={{ fontFamily: 'Avenir Book, Avenir, sans-serif' }}
                >
                  {faq.question}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-5">
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#FC821F] text-[#0B2D59] px-8 py-4 text-lg font-semibold 
                     hover:bg-[#0B2D59] hover:text-white transition-colors duration-200"
            >
              Let’s Grow Your Firm
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
