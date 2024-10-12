import Image from "next/image";
import BgImg from "./bg-img.jpeg";
export default function Home() {
  return (
    <div>
      <Image src={BgImg} width={400} alt="bg-image" />
      <p className="text-xl">Hello from the app</p>
    </div>
  );
}
