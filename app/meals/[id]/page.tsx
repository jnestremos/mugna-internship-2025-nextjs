import { Meal } from "@/lib/interfaces";
import { fetchMeal } from "@/lib/services/meals";
import Image from "next/image";
import React from "react";
import SampleImg from "@/assets/sample.jpg";

const MealPage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const id = (await params).id;
	const meal: Meal = await fetchMeal(id);
	return (
		<>
			<Image src={meal.strMealThumb} width={300} height={300} alt="" />
			<p className="font-tertiary">{meal.strMeal}</p>
			<p>{meal.strInstructions}</p>
			<p>{meal.strArea}</p>
			<Image src={SampleImg} alt="" />
		</>
	);
};

export default MealPage;
