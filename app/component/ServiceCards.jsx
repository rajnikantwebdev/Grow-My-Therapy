import Image from "next/image";

export default function ServiceCard({ title, description, imageSrc }) {
  return (
    <div className="bg-main p-4 rounded-lg shadow-md flex flex-col items-center text-center">
      <div className="w-full mb-4">
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={200}
          className="rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 transition">
        Learn More
      </button>
    </div>
  );
}
