import Image from "next/image";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets:['latin']
})

export default function AboutSection() {
  return (
    <section className={`bg-main py-16 px-4 sm:px-6 lg:px-42 ${notoSans.className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex  flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-16">
          <div className="flex-shrink-0 border-12 border-gray-200/50 rounded-xl">
            <div className="relative">
              <div className="min-w-xs min-h-[28rem] bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className=" bg-white">
                  <Image
                    src={"/therapist.jpg"}
                    fill
                    alt="Dr. Serena Blake"
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-sm absolute bottom-0 left-0 bg-gray-200/60 px-3 py-1">
                  <b>Dr. Serena Blake</b>
                  <span>8 years of practice, 500+ session</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-4xl">
            <div className="inline-block bg-yellow-100 rounded-xl text-gray-800 px-4 py-1 text-sm font-medium mb-4">
              About Dr. Serena Blake, PsyD (Clinical Psychologist), CA
            </div>

            <h2 className="md:text-5xl text-4xl font-bold text-gray-800 mb-8 leading-tight">
              Hi I'm Dr. Serena Blake
            </h2>

            <div className="space-y-6  text-xl md:text-2xl text-gray-700 leading-relaxed">
              <p>
                <b>Dr. Serena Blake</b> is a licensed clinical psychologist
                (PsyD) based in Los Angeles, CA, with eight years of experience
                and over 500 client sessions.
              </p>

              <p>
                She blends evidence-based approaches—like{" "}
                <b>
                  cognitive-behavioral therapy and mindfulness—with
                  compassionate, personalized care
                </b>{" "}
                to help you overcome{" "}
                <b>anxiety, strengthen relationships, and heal from trauma</b>.
                Whether you meet in her Maplewood Drive office or connect
                virtually via Zoom, Dr. Blake is committed to creating a safe,
                supportive space for you to thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}