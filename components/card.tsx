import Image from "next/image";

type CardProps = {
  photo: string;
  name: string;
  description: string;
};

export default function Card({ photo, name, description }: CardProps) {
  return (
    <div className="w-full h-full border rounded-xl shadow-md overflow-hidden flex flex-col">
      <div className="relative w-full h-48">
        <Image src={photo} alt={name} fill className="object-cover" />
      </div>

      <div className="p-6 flex-1 flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-gray-500 mb-4">{description}</p>
        <button className="mt-auto bg-black text-white px-4 py-2 rounded">View More</button>
      </div>
    </div>
  );
}