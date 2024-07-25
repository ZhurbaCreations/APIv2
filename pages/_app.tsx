import type { AppProps } from "next/app";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  // This is the chain your dApp will work on.
  const activeChain = "mumbai";

  return (
    <ThirdwebProvider

    supportedWallets={[
      metamaskWallet(),
    ]}

      authConfig={{
        domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN  || "yoola-auth-api.firebaseapp.com" as string,
      }}
      activeChain={activeChain}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
