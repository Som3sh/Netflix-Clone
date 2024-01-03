import Image from "next/image";
import { Inter } from "next/font/google";
import { getSession, signOut } from "next-auth/react";
import { NextPage, NextPageContext } from "next";
import useCurrentUser from "@/hooks/useCurrentuser";
const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();
  return (
    <main className="text-2xl text-red-500 font-bold">
      <h1>Netflix Clone</h1>
      <p>Logged in as {user?.name}</p>
      <button
        className="h-10 w-full bg-white "
        onClick={() => signOut()}
      ></button>
    </main>
  );
}
