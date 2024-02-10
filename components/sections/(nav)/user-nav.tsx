import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();
  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <UserButton />;
  }

  return (
    <>
      <Button
        onClick={() => router.push("/login")}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Sign in
      </Button>
      <Button
        onClick={() => router.push("/signup")}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Sign up
      </Button>
    </>
  );
}

