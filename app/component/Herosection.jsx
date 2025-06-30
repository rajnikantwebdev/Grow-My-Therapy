export default function ChristianCounselingHero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 hero-section bg-amber-400">
      <div className="max-w-4xl mx-auto text-center text-white">
        <p className="text-sm sm:text-base md:text-lg font-light mb-4 sm:mb-6 opacity-90">
          Christian Counseling Services in Richmond & Central Virginia
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8">
          Professional Counseling for Christian Healing and Growth
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
          Begin your journey today towards spiritual growth, deeper
          relationships, and lasting inner peace.
        </p>

        <p className="text-base sm:text-lg md:text-xl font-medium mb-6 sm:mb-8">
          I want to work with you for...
        </p>

        <div className="flex items-center justify-center mb-8 sm:mb-12">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-white mr-3 flex-shrink-0"></div>
          <p className="text-lg sm:text-xl md:text-2xl font-light">
            Greater Purpose in Your Life Direction
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mb-8 sm:mb-12 text-sm sm:text-base">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span>Top Rated</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <span className="underline cursor-pointer hover:no-underline transition-all">
            40+ Years Experience
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="underline cursor-pointer hover:no-underline transition-all">
            Testimonials
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="underline cursor-pointer hover:no-underline transition-all">
            Media Mentions
          </span>
        </div>

        <button className="inline-flex items-center justify-center bg-white text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          Start Healing Today
        </button>
      </div>
    </div>
  );
}
