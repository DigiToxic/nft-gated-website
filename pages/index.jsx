import React, { useEffect } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useLogout, useUser } from "@thirdweb-dev/react";
import { getUser } from "../auth.config";
import checkBalance from "../util/checkBalance";
import { useRouter } from "next/router";
import BlurredText from "../components/BlurredText";
import ThirdwebGuideHeader from "../components/ThirdwebGuideHeader";

export default function Home() {
  const { logout } = useLogout();
  const { isLoggedIn, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoading, isLoggedIn, router]);

  return (
    <div>
      <ThirdwebGuideHeader />

      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-xl mb-2">
            <BlurredText text="You have entered the gated page by holding a nft." />
          </div>
          <div className="font-bold">
            <BlurredText text="Welcome!" />
          </div>

          <div className="mt-6">
            <button
              onClick={logout}
              className="text-white border-2 px-10 py-2 rounded-lg bg-purple-900 shadow-md shadow-[rgb(123,204,255)] hover:bg-purple-800 hover:translate-y-2 hover:shadow-none active:bg-purple-400"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  const user = await getUser(context.req);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // Ensure we are able to generate an auth token using our private key instantiated SDK
  const PRIVATE_KEY = process.env.THIRDWEB_AUTH_PRIVATE_KEY;
  if (!PRIVATE_KEY) {
    throw new Error("You need to add an PRIVATE_KEY environment variable.");
  }

  // Instantiate our SDK
  const sdk = ThirdwebSDK.fromPrivateKey(
    process.env.THIRDWEB_AUTH_PRIVATE_KEY,
    "goerli"
  );

  // Check to see if the user has an NFT
  const hasNft = await checkBalance(sdk, user.address);

  // If they don't have an NFT, redirect them to the login page
  if (!hasNft) {
    console.log("User", user.address, "doesn't have an NFT! Redirecting...");
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // Finally, return the props
  return {
    props: {},
  };
}
