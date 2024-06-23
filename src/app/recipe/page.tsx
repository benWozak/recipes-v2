"use client"
import { Button } from "@/components/ui/button";
import { useRecipeStore } from '@/providers/recipe-store-provider'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import  NutritionInfo from "@/components/recipe/nutrition-info"

import { durationFormatter } from "@/lib/utils";

import { testDatabaseConnection } from '../actions'

type RecipeInstruction = {
  "@type": "HowToStep",
  text: string,
  name: string,
  url: string,
}

export default function Page() {
  const { recipe } = useRecipeStore(
    (state) => state,
  )

  console.log(recipe)
  return (
    <main className="app-main">
      <div className="container mx-auto px-8 py-4">
        <div className="flex flex-col justify-center mb-8">
          <Card className="mb-2 relative">
            <CardHeader >
              <CardTitle>{recipe?.name}</CardTitle>
            </CardHeader>
              <div className="flex justify-between flex-row max-lg:flex-col"> 
                {!!recipe?.image[0] && 
                  <CardContent className="space-y-2">
                    <img src={recipe?.image[0]} width="300" height="300" alt="Recipe Image" className="rounded" /> 
                  </CardContent>
                }

                {!! recipe?.nutrition && 
                  <CardContent className="space-y-2">
                    <NutritionInfo data={recipe.nutrition} />
                  </CardContent>
                }
                
                <CardContent>
                  <Separator className="my-4" />
                  {!!recipe?.prepTime &&
                   <div className="flex h-5 items-center space-x-4 text-sm">
                      <div>Prep: {durationFormatter(recipe?.prepTime)}</div>
                      <Separator orientation="vertical" />
                      <div>Cook: {durationFormatter(recipe?.cookTime)}</div>
                      <Separator orientation="vertical" />
                      <div>Total: {durationFormatter(recipe?.totalTime)}</div>
                    </div>
                  }
                  <Separator className="my-4" />
                  <div className="flex flex-wrap items-center space-x-2 space-y-2 text-sm">
                    {!!recipe?.recipeCategory && recipe?.recipeCategory.map((item: string, index: number) => {
                      return <Badge key={index}>{item}</Badge>
                    })}
                  </div>
                </CardContent>
              </div>
              <CardFooter>
                <Button onClick={() => testDatabaseConnection()}>Save This Recipe</Button>
              </CardFooter>
          </Card>
          <Tabs defaultValue="ingredients">
            <TabsContent value="ingredients">
              <Card>
                <CardHeader>
                  <CardTitle>Ingredients</CardTitle>
                  <CardDescription>
                    View & make changes to your ingredients here. Click save when you&apos;re done.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <ul>
                      {recipe?.recipeIngredient.map((ingredient: string, index: number) => {
                        return <li key={index}>{ingredient}</li>
                      })}
                    </ul>
                  </div>
                </CardContent>
                {/* <CardFooter>
                  // TODO: add ability to modify ingredients
                  <Button>Save changes</Button>
                </CardFooter> */}
              </Card>
            </TabsContent>

            <TabsContent value="instructions">
              <Card>
                <CardHeader>
                  <CardTitle>Instructions</CardTitle>
                  <CardDescription>
                    View & your instructions here. After saving, you'll be logged out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                <div className="space-y-1">
                    <ol>
                      {recipe?.recipeInstructions.map((instruction: RecipeInstruction, index: number) => {
                        return <li className="mb-8" key={index}>{instruction?.text}</li>
                      })}
                    </ol>
                  </div>
                </CardContent>
                {/* <CardFooter>
                  // TODO: add ability to modify instructions
                  <Button>Save instructions</Button>
                </CardFooter> */}
              </Card>
            </TabsContent>
            <TabsList className="fixed bottom-0 left-0 grid w-full grid-cols-2 mt-2">
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="instructions">Instructions</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </main>
  );
}