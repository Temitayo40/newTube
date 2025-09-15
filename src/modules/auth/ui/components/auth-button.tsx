"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { ClapperboardIcon, UserCircleIcon } from "lucide-react";

export const AuthButton = () => {
  //  TODO: add diff auth states
  return (
    <>
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            label="Studio"
            href="/studio"
            labelIcon={<ClapperboardIcon className="size-4" />}
          />
        </UserButton.MenuItems>
      </UserButton>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="px-4 py-2 test-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500 rounded-full shadow-none"
          >
            <UserCircleIcon />
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
