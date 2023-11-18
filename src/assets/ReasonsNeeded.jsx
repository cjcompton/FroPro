import React from "react";
import Button from "./Button";

function ReasonsNeeded() {
    return(
        <section className="bg-BGLightCream border-t-2 py-14 border-gray-200 pb-10">
            {/* everything looks solid, just want BGDarkCream to be working and maybe get rid of border*/}
            <div className="flex justify-center my-8">
                <h1 className="font-headFont tracking-tighter font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl">Why FroPro?</h1>
            </div>
            <div className="relative z-20">
                <div className="grid gap-4 grid-cols-2 md:grid-cols-4 p-3 text-center">
                    <div className="border-2 border-black rounded-md p-3">
                        <img 
                            src="./icons/ingredients.png"
                            alt="shipping icon" 
                            className="max-h-24 mx-auto"
                        />
                        <h1 className="mx-auto p-0 m-0 font-bold text-xl text-FroProRed">Large Variety</h1>
                        <p className="text-lg font-semibold">
                            Choose from over 100 recipes made with the healthiest
                            and freshest ingredients 
                        </p>
                    </div>
                    <div className="border-2 border-black rounded-md p-3">
                        <img 
                            src="./icons/muscle.png"
                            alt="shipping icon" 
                            className="max-h-24 mx-auto"
                        />
                        <h1 className="mx-auto p-0 m-0 font-bold text-xl text-FroProRed">High Protein</h1>
                        <p className="text-lg font-semibold">
                            Each recipe has over 30+ grams of protein, and a healthy 
                            balance of carbs and fat
                        </p>
                    </div>
                    <div className="border-2 border-black rounded-md p-3">
                        <img 
                            src="./icons/prices.png"
                            alt="shipping icon" 
                            className="max-h-24 mx-auto"
                        />
                        <h1 className="mx-auto p-0 m-0 font-bold text-xl text-FroProRed">Affordable Price</h1>
                        <p className="text-lg font-semibold">
                            With different plans to choose from, your kit could be be
                            as little as 5$ a meal
                        </p>
                    </div>
                    <div className="border-2 border-black rounded-md p-3">
                        <img 
                            src="./icons/stars.png"
                            alt="shipping icon" 
                            className="max-h-24 mx-auto"
                        />
                        <h1 className="mx-auto p-0 m-0 font-bold text-xl text-FroProRed">Highly Rated</h1>
                        <p className="text-lg font-semibold">
                            More 5 star reviews than other leading brands, we keep
                            our customers satisfied 
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <Button /*link to page to buy*/>Get Started</Button>
            </div>
        </section>
    );
}

export default ReasonsNeeded;