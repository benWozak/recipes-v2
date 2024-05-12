"use client"
import { useRouter } from 'next/navigation'

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

import { useRecipeStore } from '@/providers/recipe-store-provider'

const FormSchema = z.object({
  value: z.string().min(2, {
    message: "Recipe must be a URL from a website.",
  }),
})


export function RecipeSearch() {
  const router = useRouter()
  const { createRecipe } = useRecipeStore(
    (state) => state,
  )

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      value: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const response = await parseRecipeData(data.value)

    if(!!response) {
      void createRecipe(response)

      router.push('/recipe')
    } else {
      // handle error
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="value"
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
