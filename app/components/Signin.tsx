/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Signin() {
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <Button
          variant={"ghost"}
          className="hover:cursor-pointer"
          onClick={() => signOut()}
        >
          <img
            src={session.user?.image || ""}
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
        </Button>
      ) : (
        <Button
          className="hover:cursor-pointer"
          onClick={() => signIn("google")}
        >
          Signin
        </Button>
      )}
    </div>
  );
}
