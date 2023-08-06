import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Link from "next/link";
import BlurredText from "../components/BlurredText";
import ThirdwebGuideHeader from "../components/ThirdwebGuideHeader";

export default function Login() {
  const address = useAddress();

  return (
    <div>
      <div className="flex justify-between items-center py-4 px-6 bg-black bg-opacity-0 border-purple-500 hover:bg-opacity-40 hover:border-b-2 hover:shadow-sm hover:shadow-purple-500 ease-in-out duration-200">
        <ThirdwebGuideHeader />
        <div className="flex justify-between items-center w-72 ml-24">
          <p className="text-[rgb(215,183,250)] text-lg hover:text-purple-500 underline ease-in-out duration-200 cursor-pointer">
            <Link href="/">Gated</Link>
          </p>
          <p className="text-white text-lg hover:text-purple-500 underline ease-in-out duration-200 cursor-pointer">
            Lorem
          </p>
          <p className="text-white text-lg hover:text-purple-500 underline ease-in-out duration-200 cursor-pointer">
            Ipsum
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          {address ? (
            <p className="text-white">
              Welcome, {address?.slice(0, 6)}...{address?.slice(-4)}
            </p>
          ) : (
            <p className="text-white">Please connect your wallet.</p>
          )}

          <ConnectWallet
            accentColor="#F213A4"
            className="hover:bg-purple-300 active:bg-purple-500 ease-in-out duration-500"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-evenly h-screen">
          <div className="w-1/4 text-center mb-44">
            <BlurredText text="This is a small showcase of a token gated website. Please feel free to try it out!" />
            <div className="mt-10">
              <BlurredText text="Also don't forget to follow me on twitter and checking my developer agency where we take your ideas to the next level!" />
            </div>
          </div>

          <div className="mb-32">
            <img
              className="rounded-3xl w-96 shadow-lg shadow-[rgb(147,51,234)] hover:shadow-xl hover:shadow-[rgb(147,51,234)] ease-in-out duration-200"
              src="/logo.png"
              alt=""
            />
            <div className="flex justify-around mt-8">
              <Link href="https://twitter.com/" className="underline">
                <BlurredText text="Twitter" />
              </Link>
              <Link href="https://devinci.vercel.app/" className="underline">
                <BlurredText text="DeVinci" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
