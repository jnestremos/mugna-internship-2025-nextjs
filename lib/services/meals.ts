import client from "../axios";
import { Meal } from "../interfaces";

export const fetchMeals = async () => {
	const { data } = await client.get("/filter.php?c=Seafood");
	return data.meals as Meal[];
};

export const fetchMeal = async (id: string) => {
	const { data } = await client.get(`/lookup.php?i=${id}`);
	return data.meals[0] as Meal;
};
