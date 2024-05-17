import { RecipeSearch } from "@/components/recipe/recipe-search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-8 lg:p-16 ">
      <RecipeSearch />
    </main>
  );
}
