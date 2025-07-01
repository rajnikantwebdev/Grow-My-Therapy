"use client"
export default function OfficeInfo() {
  return (
    <div className="text-main-text text-center md:text-start ">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6">Our Office</h2>
        <div className="text-lg leading-relaxed space-y-1">
          <span>1287 Maplewood Drive,<br/>Los Angeles, CA 90026</span>
        </div>
        <button onClick={() => alert("Google map: Los Angeles")} className="mt-4 bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800 transition-colors">
          Google Maps
        </button>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6">Hours</h2>
        <div className="text-lg leading-relaxed space-y-1">
          <div>Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</div>
          <div>In-person: Tue & Thu, 10 AM–6 PM</div>
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <div className="text-lg flex items-center justify-center md:justify-start">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          (323) 555-0192
        </div>
        <div className="text-lg flex items-center justify-center md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          serena@blakepsychology.com
        </div>
      </div>
    </div>
  );
}