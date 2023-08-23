import { Meal } from "./Meal";

export interface MealOrder extends Meal {
  amount: number
}