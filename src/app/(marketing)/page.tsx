import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
     <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
      <Image src={'/hero.svg'} fill alt='hero'/>
     </div>
     <div className="flex flex-col items-center gap-y-8">
      <h1 className="text-xl lg:text3xl font-bold text-neutral-600 max-w-[480px] text-center">Learn, practice, and masster new languages with Lingo</h1>
      <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
        <ClerkLoading>
          <Loader className="animate-spin h-5 w-5 text-muted-foreground"/>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <Button size={'lg'} variant={'secondary'} className="w-full" asChild>
              <Link href={'/learn'}>Continue Learning</Link>
            </Button>
          </SignedIn>
          <SignedOut>
            <SignUpButton mode="modal" signInFallbackRedirectUrl={'/learn'}
            fallbackRedirectUrl={'/'}
            >
              <Button size={'lg'} variant={'secondary'} className="w-full">
                Get Started
              </Button>
            </SignUpButton>
            <SignInButton mode="modal" 
            fallbackRedirectUrl={'/learn'}
            >
              <Button size={'lg'}  className="w-full" variant={'ghost'} >
              I already have an account
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
     </div>
    </main>
  );
}
