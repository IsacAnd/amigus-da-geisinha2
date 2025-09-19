"use client"

import type React from "react"
import { createContext, useContext, useReducer, type ReactNode } from "react"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
}

interface FavoritesState {
  items: Product[]
  itemCount: number
}

type FavoritesAction =
  | { type: "ADD_FAVORITE"; payload: Product }
  | { type: "REMOVE_FAVORITE"; payload: number }
  | { type: "CLEAR_FAVORITES" }

const FavoritesContext = createContext<{
  state: FavoritesState
  dispatch: React.Dispatch<FavoritesAction>
} | null>(null)

function favoritesReducer(state: FavoritesState, action: FavoritesAction): FavoritesState {
  switch (action.type) {
    case "ADD_FAVORITE": {
      const existingItem = state.items.find((item) => item.id === action.payload.id)

      if (existingItem) {
        return state // Item already in favorites
      }

      const newItems = [...state.items, action.payload]
      return {
        ...state,
        items: newItems,
        itemCount: newItems.length,
      }
    }

    case "REMOVE_FAVORITE": {
      const newItems = state.items.filter((item) => item.id !== action.payload)
      return {
        ...state,
        items: newItems,
        itemCount: newItems.length,
      }
    }

    case "CLEAR_FAVORITES":
      return {
        items: [],
        itemCount: 0,
      }

    default:
      return state
  }
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(favoritesReducer, {
    items: [],
    itemCount: 0,
  })

  return <FavoritesContext.Provider value={{ state, dispatch }}>{children}</FavoritesContext.Provider>
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider")
  }
  return context
}
