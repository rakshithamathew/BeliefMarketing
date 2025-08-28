export default function Home8() {
  const newsArticles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop&crop=center",
      title: "Uber Faces Lawsuit After Alleged Assault of CEO Over Service Dog",
      content:
        "A violent altercation between an Uber driver and passenger in Charleston, S.C., left CEO Bryan Kobal hospitalized with a severe concussion. The incident occurred on April 24, 2024, when...",
      link: "Read More",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=300&fit=crop&crop=center",
      title: "Oklahoma Man Receives Life Sentence for Kidnapping and Rape of Lyft Driver",
      content:
        "A 21-year-old man, Andre Hunter, has been sentenced to life in prison after pleading guilty to kidnapping and raping a Lyft driver in April 2020. The conviction follows a...",
      link: "Read More",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop&crop=center",
      title: "Wanted Man Posed as Uber Driver, Raising Concerns Over Rideshare Safety",
      content:
        "Carl Allan, a man with a lengthy criminal history, is wanted by Memphis police after allegedly posing as an Uber driver while committing stalking and sexual assault. His case...",
      link: "Read More",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 
            className="mb-4 leading-tight relative"
            style={{
              fontFamily: '"Futura Bold", Sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              lineHeight: '1.2',
              color: '#1e3a8a'
            }}
          >
            Uber Sexual Assault
            <br />
            <span className="relative">
              Lawsuits in the News
              <div 
                className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400"
                style={{ transform: 'translateY(8px)' }}
              ></div>
            </span>
          </h1>
          <p 
            className="max-w-4xl mx-auto leading-relaxed mt-6"
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
              fontFamily: '"Avenir Book", sans-serif',
              fontWeight: 400,
              color: '#000000'
            }}
          >
            Over the last few years, individuals who have been sexually assaulted, kidnapped, or abused during Uber rides have filed hundreds of lawsuits against Uber and other rideshare companies. Many of these have made headlines for the egregious allegations within the suits.
          </p>
        </div>

        {/* News Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {newsArticles.map((article) => (
            <div key={article.id} className="bg-white shadow-sm hover:shadow-md transition-shadow rounded-lg overflow-hidden">
              <div className="p-0">
                <div className="relative w-full h-48 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="p-4">
                <h3 
                  className="mb-3 leading-tight"
                  style={{
                    fontFamily: '"Futura Bold", Sans-serif',
                    fontSize: '18px',
                    fontWeight: 700,
                    lineHeight: '1.3',
                    color: '#1e3a8a'
                  }}
                >
                  {article.title}
                </h3>
                <p 
                  className="mb-4 leading-relaxed"
                  style={{
                    fontSize: '14px',
                    lineHeight: '1.5',
                    fontFamily: '"Avenir Book", sans-serif',
                    fontWeight: 400,
                    color: '#000000'
                  }}
                >
                  {article.content}
                </p>
                <a 
                  href="#" 
                  className="hover:text-blue-800 transition-colors underline text-blue-600"
                  style={{
                    fontSize: '14px',
                    fontFamily: '"Avenir Book", sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {article.link}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* More News Button */}
        <div className="text-center">
          <button 
            className="px-8 py-3 rounded-md transition-colors"
            style={{
              backgroundColor: '#1e3a8a',
              color: '#FFFFFF',
              fontFamily: '"Inter", sans-serif',
              fontSize: '18px',
              fontWeight: 700
            }}
          >
            More News
          </button>
        </div>
      </div>
    </div>
  )
}
