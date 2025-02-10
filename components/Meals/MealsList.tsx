"use client";

import React, { useMemo, useState } from "react";
import MealCard from "./MealCard";
import { Meal } from "@/lib/interfaces";
import { redirect } from "next/navigation";
import { ROUTES } from "@/lib/constants";

const MealsList = ({ meals }: { meals: Meal[] }) => {
	const [searchString, setSearchString] = useState<string>("");
	const filteredMeals = useMemo(() => {
		if (searchString)
			return meals.filter((meal) =>
				meal.strMeal.toLowerCase().includes(searchString.toLowerCase())
			);
		return meals;
	}, [searchString]);

	const selectRandomMeal = () => {
		const randomIndex = Math.floor(Math.random() * filteredMeals.length);
		redirect(`${ROUTES.MEALS}/${filteredMeals[randomIndex].idMeal}`);
	};

	return (
		<>
			<div className="flex gap-x-2">
				<input
					type="text"
					className="text-black"
					value={searchString}
					onChange={(e) => setSearchString(e.target.value)}
				/>
				<button onClick={selectRandomMeal}>Random</button>
			</div>
			<div className="grid grid-cols-3">
				{filteredMeals.map((meal) => (
					<MealCard key={meal.idMeal} {...meal} />
				))}
			</div>
		</>
	);
};

export default MealsList;
