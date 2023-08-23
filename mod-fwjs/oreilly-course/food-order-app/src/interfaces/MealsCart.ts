import { Meal } from "./Meal";
import { MealOrder } from "./MealOrder";

export interface MealsCart {
  mealOrders: MealOrder[],
  totalAmount: number,
  addItem(meal: Meal, amount: number): void
  removeItem(meal: Meal, amount: number): void
}