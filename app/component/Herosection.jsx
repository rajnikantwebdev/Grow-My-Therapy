export default function ChristianCounselingHero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 hero-section">
      <div className="max-w-5xl  mx-auto text-center text-white">
        <p className="text-sm font-light opacity-90">
          Christian Counseling Services in Richmond & Central Virginia
        </p>

        <h1 className="text-4xl font-bold leading-tight mb-4">
          Professional Counseling for Christian Healing and Growth
        </h1>

        <p className="text-lg font-semibold mb-3 max-w-2xl mx-auto">
          Begin your journey today towards spiritual growth, deeper
          relationships, and lasting inner peace.
        </p>

        <p className="text-base sm:text-lg md:text-xl font-bold mb-6 sm:mb-8">
          I want to work with you for...
        </p>

        <div className="flex items-center justify-center mb-4">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-white mr-3 flex-shrink-0"></div>
          <p className="text-lg sm:text-xl md:text-2xl font-light">
            Greater Purpose in Your Life Direction
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-8 text-xs font-semibold">
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

        <button className="inline-flex items-center justify-center bg-white text-blue-900 px-5 py-2 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
          Start Healing Today
        </button>
      </div>
    </div>
  );
}
