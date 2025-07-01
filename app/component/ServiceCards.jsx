import Image from "next/image";

export default function ServiceCard({ title, description, imageSrc }) {
  return (
    <div className="bg-main p-4 rounded-lg shadow-md flex flex-col items-center min-h-[26rem]">
      <div className="w-full mb-4 h-1/2">
        <Image
          src={imageSrc}
          alt={title}
          width={250}
          height={200}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
      <div className="h-1/2 ">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-700 text-sm mb-4">{description}</p>
        </div>
        <div className="h-3/12 w-full flex items-center justify-center">
          <button className="border text-base border-black w-full text-gray-700 py-1 px-4 rounded hover:bg-gray-300 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
