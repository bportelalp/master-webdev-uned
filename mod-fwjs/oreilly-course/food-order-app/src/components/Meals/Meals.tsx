import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals: React.FC = () => {
  return (
    <>
      <MealsSummary/>
      <AvailableMeals/>
    </>
  );
}

export default Meals;