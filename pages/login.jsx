import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Link from "next/link";
import BlurredText from "../components/BlurredText";
import ThirdwebGuideHeader from "../components/ThirdwebGuideHeader";
import { motion } from "framer-motion";

export default function Login() {
  const address = useAddress();

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex justify-between items-center py-4 px-6 bg-black bg-opacity-0 border-purple-500 hover:bg-opacity-40 hover:border-b-2 hover:shadow-sm hover:shadow-purple-500 ease-in-out duration-200"
      >
        <ThirdwebGuideHeader />
        <div className="flex justify-between items-center w-72 ml-24 max-[675px]:w-0">
          <p className="text-[rgb(215,183,250)] text-lg hover:text-purple-500 underline ease-in-out duration-200 cursor-pointer">
            <Link href="/">Gated</Link>
          </p>
          <p className="text-white text-lg hover:text-purple-500 underline ease-in-out duration-200 cursor-pointer max-[675px]:hidden">
            Lorem
          </p>
          <p className="text-white text-lg hover:text-purple-500 underline ease-in-out duration-200 cursor-pointer max-[675px]:hidden">
            Ipsum
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          {address ? (
            <p className="text-white max-[500px]:hidden">
              Welcome, {address?.slice(0, 6)}...{address?.slice(-4)}
            </p>
          ) : (
            <p className="text-white max-[500px]:hidden">
              Please connect your wallet.
            </p>
          )}

          <ConnectWallet
            accentColor="#F213A4"
            className="hover:bg-purple-300 active:bg-purple-500 ease-in-out duration-500"
          />
        </div>
      </motion.div>

      <div>
        <div className="flex items-center justify-evenly h-screen max-[675px]:flex-col">
          <div className="w-[30%] text-center mb-44 max-[900px]:w-[40%] max-[900px]:mt-6 max-[675px]:mb-5 max-[675px]:w-5/6">
            <motion.div
              initial={{ opacity: 0, y: "-20%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-6"
            >
              <BlurredText text="This is a small showcase of a token gated website. Please feel free to try it out!" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "-20%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-10"
            >
              <BlurredText text="Also don't forget to follow me on twitter and checking my developer agency where we take your ideas to the next level!" />
            </motion.div>
          </div>

          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, x: "20%" }}
              whileInView={{ opacity: 1, x: "0%" }}
              transition={{ delay: 1.4, duration: 1 }}
            >
              <img
                className="rounded-3xl w-96 shadow-lg shadow-[rgb(147,51,234)] hover:shadow-xl hover:shadow-[rgb(147,51,234)] ease-in-out duration-200 max-[900px]:w-72 max-[675px]:w-64"
                src="/logo.png"
                alt=""
              />
            </motion.div>
            <div className="flex justify-around mt-8">
              <motion.div
                initial={{ opacity: 0, x: "-40%" }}
                whileInView={{ opacity: 1, x: "0%" }}
                transition={{ delay: 2.1, duration: 1 }}
              >
                <Link href="https://twitter.com/" className="underline">
                  <BlurredText text="Twitter" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: "40%" }}
                whileInView={{ opacity: 1, x: "0%" }}
                transition={{ delay: 2.1, duration: 1 }}
              >
                <Link href="https://devinci.vercel.app/" className="underline">
                  <BlurredText text="DeVinci" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
