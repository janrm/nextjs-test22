'use client'
import Image from "next/image";
import {InstallPrompt} from "@/feature/pwa/InstallPrompt";
import {PushNotificationManager} from "@/feature/pwa/PushNotificationManager";

export default function Home() {
  return (
      <div className="flex h-screen">
          <div>
              <button></button>
          </div>
          <div className="flex flex-row w-full items-baseline">
          <PushNotificationManager />
          <InstallPrompt />
          </div>
          <div className="flex flex-row w-full">
          <Image src="/logos/hisys.svg" alt="HiSys Logo" width={100} height={100}/>
          </div>
      </div>
  );
}
