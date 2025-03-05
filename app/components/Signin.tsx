"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Signin() {
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <Button onClick={() => signOut()}>Signout</Button>
      ) : (
        <Button onClick={() => signIn("google")}>Signin</Button>
      )}
    </div>
  );
}
