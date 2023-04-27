import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";


const Home: NextPage = () => {

const user = useUser()

console.log(user)
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      {!user.isSignedIn && (<SignInButton />)}
      {!!user.isSignedIn && (<SignOutButton />)}

      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />

      </main>
    </>
  );
};

export default Home;
