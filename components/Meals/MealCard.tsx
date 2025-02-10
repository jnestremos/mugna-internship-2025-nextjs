import { ROUTES } from "@/lib/constants";
import { Meal } from "@/lib/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MealCard = ({ idMeal, strMeal, strMealThumb }: Meal) => {
	return (
		<Link href={`${ROUTES.MEALS}/${idMeal}`}>
			<Image src={strMealThumb} width={300} height={300} alt="" />
			<p>{strMeal}</p>
		</Link>
	);
};

export default MealCard;
