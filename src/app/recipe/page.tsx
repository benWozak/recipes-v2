"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'
import { useRecipeStore } from '@/providers/recipe-store-provider'

export default function Page() {
  const router = useRouter()
  const { recipe } = useRecipeStore(
    (state) => state,
  )

  console.log(recipe)

  return (
    <main className="app-main">
      <h1>Recipe</h1>
      <Button onClick={() =>  router.push('/')}>Go Back</Button>
    </main>
  );
}