'use client'
import Image from "next/image";

export default function Home() {
  return (
      <div className="flex h-screen">
          <div>
              <button onClick={(e) => {e.preventDefault(); alert('Alert')}}>Alert</button>
          </div>
          <div className="flex flex-row w-full items-baseline">
          </div>
          <div className="flex flex-row w-full">
          <Image src="/logos/hisys.svg" alt="HiSys Logo" width={100} height={100}/>
          </div>
      </div>
  );
}
