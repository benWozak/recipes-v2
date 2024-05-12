import { createStore } from 'zustand/vanilla'

export type RecipeState = {
  recipe: any | undefined // TODO: define
}

export type RecipeActions = {
  createRecipe: (T: any) => void
  // updateRecipe: (T: any) => void
  // saveRecipe: (T: any) => void
  // deleteRecipe: (T: any) => void
}

export type RecipeStore = RecipeState & RecipeActions

export const defaultInitState: RecipeState = {
  recipe: undefined
}

export const createRecipeStore = (
  initState: RecipeState = defaultInitState,
) => {
  return createStore<RecipeStore>()((set) => ({
    ...initState,
    createRecipe: (res) => set(() => ({ recipe: res }))
  }))
}
