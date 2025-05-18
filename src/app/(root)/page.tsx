import Image from "next/image";

export default function Home() {
  return (
      <div className="flex justify-center items-center h-screen">
    <Image src="/logos/hisys.svg" alt="HiSys Logo" width={100} height={100}/>
      </div>
  );
}
