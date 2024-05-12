"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return (
    <main className="app-main">
      <h1>Recipe</h1>
      <Button onClick={() =>  router.push('/')}>Go Back</Button>
    </main>
  );
}