import Image from "next/image";

export default function SplashScreen() {
  return (
    <main className="h-screen bg-[#FF6321] flex justify-center items-center">
      <div className="w-32 h-32 relative">
        <Image src={"/assets/loader.svg"} fill={true} alt="Loading" priority />
      </div>
    </main>
  );
}
