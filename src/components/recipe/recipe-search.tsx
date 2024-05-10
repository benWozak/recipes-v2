"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { parseRecipeData } from '@/app/actions';

const FormSchema = z.object({
  recipe: z.string().min(2, {
    message: "Recipe must be a URL from a website.",
  }),
})


export function RecipeSearch() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      recipe: "",
    },
  })

  async function handleParseURLData(value: string) {
    const response = await parseRecipeData(value)

    console.log(response)

  }
  

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
    handleParseURLData(data.recipe)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="recipe"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Recipe</FormLabel>
              <FormControl>
                <Input placeholder="Enter a Recipe URL" {...field} />
              </FormControl>
              <FormDescription>
                Enter a Recipe website URL to parse recipe. Instagram coming soon...
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
