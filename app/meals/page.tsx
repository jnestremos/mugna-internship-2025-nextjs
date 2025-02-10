import MealsList from "@/components/Meals/MealsList";
import { Meal } from "@/lib/interfaces";
import { fetchMeals } from "@/lib/services/meals";
import React from "react";

const MealsPage = async () => {
	const meals: Meal[] = await fetchMeals();
	return <MealsList meals={meals} />;
};

export default MealsPage;
