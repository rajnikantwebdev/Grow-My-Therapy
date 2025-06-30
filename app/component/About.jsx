import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-main py-16 px-4 sm:px-6 lg:px-42">
      <div className="max-w-7xl mx-auto">
        <div className="flex  flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-16">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="min-w-xs min-h-96 bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className=" bg-white">
                  <Image src={"/therapist.jpg"} fill alt="Dr. Serena Blake" className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-4xl">
            <div className="inline-block bg-yellow-100 rounded-2xl text-gray-800 px-4 py-2 text-sm font-medium mb-6">
              About Ellie Shumaker, LCSW - Experienced Christian Therapist in
              Richmond, VA
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-8 leading-tight">
              Hi I'm Ellie Shumaker
            </h2>

            <div className="space-y-6 text-2xl noto-sans-300 text-gray-700 leading-relaxed">
              <p>
                Dr. Serena Blake is a licensed clinical psychologist (PsyD)
                based in Los Angeles, CA, with eight years of experience and
                over 500 client sessions.
              </p>

              <p>
                She blends evidence-based approaches—like cognitive-behavioral
                therapy and mindfulness—with compassionate, personalized care to
                help you overcome anxiety, strengthen relationships, and heal
                from trauma. Whether you meet in her Maplewood Drive office or
                connect virtually via Zoom, Dr. Blake is committed to creating a
                safe, supportive space for you to thrive.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}