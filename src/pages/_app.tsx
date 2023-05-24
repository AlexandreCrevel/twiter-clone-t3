import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import SideNav from "~/components/SideNav";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Twitter Clone by Alx" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto flex">
        <SideNav />
        <div className="align-items min-h-screen flex-grow border-x sm:pr-4">
          <Component {...pageProps} />
        </div>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
