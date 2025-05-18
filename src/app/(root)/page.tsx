'use client'
import Image from "next/image";
import {InstallPrompt} from "@/feature/pwa/InstallPrompt";
import {PushNotificationManager} from "@/feature/pwa/PushNotificationManager";

export default function Home() {
  return (
      <div className="flex justify-center items-center h-screen">
          <PushNotificationManager />
          <InstallPrompt />
          <Image src="/logos/hisys.svg" alt="HiSys Logo" width={100} height={100}/>
      </div>
  );
}
