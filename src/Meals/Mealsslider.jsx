import React, { useRef, useState } from "react";
import { image } from "../assets/assests";

const heading = "Omnifood AI chooses from 5,000+ recipes";
const subheading = "MEALS";

const show = " See More Meals →";
const reshow = " See Less Meals ←";


const meals = [
  {
    id: 1,
    title: "Japanese Gyozas",
    image: image.Meal1,
    calories: "650 Calories",
    score: "NutriScore @74",
    rating: "4.9 Rating(544)",
    tags: ["vegetarian"],
  },
  {
    id: 2,
    title: "Avocado Salad",
    image: image.Meal2,
    calories: "650 Calories",
    score: "NutriScore @74",
    rating: "4.9 Rating(544)",
    tags: ["vegan", "paleo"],
  },
  {
    id: 3,
    title: "Avocado Salad",
    image: image.Meal2,
    calories: "650 Calories",
    score: "NutriScore @74",
    rating: "4.9 Rating(544)",
    tags: ["vegan", "paleo"],
  },
  {
    id: 4,
    title: "Avocado Salad",
    image: image.Meal2,
    calories: "650 Calories",
    score: "NutriScore @74",
    rating: "4.9 Rating(544)",
    tags: ["vegan", "paleo"],
  },
  {
    id: 5,
    title: "Avocado Salad",
    image: image.Meal2,
    calories: "650 Calories",
    score: "NutriScore @74",
    rating: "4.9 Rating(544)",
    tags: ["vegan", "paleo"],
  },
  
];
const Mealsslider = () => {

  const [showAll, setShowAll] = useState(false);

  const more = showAll ? meals : meals.slice(0,2);


  return (
    <section id="meals">
      <div className="max-w-4xl mx-auto  py-12">
        <h1 className="text-sm font-semibold text-orange-500 boxside_padding px-7 font-roboto">
          {subheading}
        </h1>
        <h1 className="text-3xl font-semibold text-gray-600 px-7 boxside_padding mb-11 meals_subhead">
          {heading}
        </h1>

        <div className="grid md:grid-cols-3 gridbox_meals">
          {more.map((meal) => (
            <div key={meal.id} className=" flex flex-wrap px-9 boxside_padding py-2">
              <div className="bg-white  shadow-lg rounded-xl cardbox">
                <img
                  src={meal.image}
                  className="w-100 cardbox h-46 object-cover rounded-t-xl"
                  alt=""
                />
                <div className="px-9 cardbox pt-4 pb-8">
                  <div className="flex gap-2 mb-2">
                    {meal.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`${
                          tag === "vegan"
                            ? "bg-green-400 text-green-900"
                            : tag === "paleo"
                            ? "bg-yellow-400 text-green-900"
                            : "bg-green-400 text-green-900"
                        } font-bold flex items-center justify-center px-2 h-5 rounded-full`}
                        style={{ fontSize: "10px" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-gray-600">{meal.title}</h3>
                  <ul
                    className="mt-4 ms-4 text-gray-600 font-semibold space-y-1 leading-5"
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    <li>
                      <i class="bi bi-droplet"></i> {meal.calories}
                    </li>
                    <li>
                      <i class="bi bi-bag-plus"></i> {meal.score}
                    </li>
                    <li>
                      <i class="bi bi-star-half"></i> {meal.rating}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}

        </div>






        <div className="flex flex-col  items-center justify-center md:mt-16 mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-amber-600 cursor-pointer  font-medium  flex items-center justify-center"
            style={{ fontSize: "15px" }}
          >
            {showAll ? reshow : show}
          </button>
          <div
            className=" text-center  bg-amber-500"
            style={{ width: "125px", height: "1px" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Mealsslider;
