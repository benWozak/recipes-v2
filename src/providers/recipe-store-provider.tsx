'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { type StoreApi, useStore } from 'zustand'

import { type RecipeStore, createRecipeStore } from '@/stores/recipe-store'

export const RecipeStoreContext = createContext<StoreApi<RecipeStore> | null>(
  null,
)

export interface RecipeStoreProviderProps {
  children: ReactNode
}

export const RecipeStoreProvider = ({
  children,
}: RecipeStoreProviderProps) => {
  const storeRef = useRef<StoreApi<RecipeStore>>()
  if (!storeRef.current) {
    storeRef.current = createRecipeStore()
  }

  return (
    <RecipeStoreContext.Provider value={storeRef.current}>
      {children}
    </RecipeStoreContext.Provider>
  )
}

export const useRecipeStore = <T,>(
  selector: (store: RecipeStore) => T,
): T => {
  const recipeStoreContext = useContext(RecipeStoreContext)

  if (!recipeStoreContext) {
    throw new Error(`useRecipeStore must be use within RecipeStoreProvider`)
  }

  return useStore(recipeStoreContext, selector)
}