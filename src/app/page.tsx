import Image from "next/image";
import background from "../assets/background-image.jpg";

export default function Home() {
  return (
    <div>
      <Image
        src={background}
        alt="background image"
        width={100}
        height={0}
        layout="responsive"
      />
    </div>
  );
}
