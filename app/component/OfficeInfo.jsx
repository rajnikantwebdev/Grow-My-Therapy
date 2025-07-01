export default function OfficeInfo() {
  return (
    <div className="text-teal-800 text-center md:text-start ">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6">Our Office</h2>
        <div className="text-lg leading-relaxed space-y-1">
          <div>4913 Fitzhugh Avenue</div>
          <div>Suite 102</div>
          <div>Richmond</div>
          <div>VA 23230</div>
          <div>Richmond, VA</div>
        </div>
        <button className="mt-4 bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800 transition-colors">
          Google Maps
        </button>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6">Hours</h2>
        <div className="text-lg leading-relaxed space-y-1">
          <div>Monday: 12:00 PM - 8:00 PM</div>
          <div>Tuesday: 12:00 PM - 8:00 PM</div>
          <div>Wednesday: 9:00 AM - 6:00 PM</div>
        </div>
      </div>

      <div >
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <div className="text-lg flex items-center justify-center md:justify-start">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          (757) 474-5262
        </div>
      </div>
    </div>
  );
}