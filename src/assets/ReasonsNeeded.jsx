import React from "react";

function ReasonsNeeded() {
    return(
        <section  className="bg-reasonBG border-t-2 border-gray-200">
            {/* better background (maybe gradient?), NEEEED better colors */}
            <div className="flex justify-center my-6">
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
                        <h1 className="mx-auto p-0 m-0 font-bold text-lg">Large Variety</h1>
                        <p>
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
                        <h1 className="mx-auto p-0 m-0 font-bold text-lg">High Protein</h1>
                        <p>
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
                        <h1 className="mx-auto p-0 m-0 font-bold text-lg">Affordable Price</h1>
                        <p>
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
                        <h1 className="mx-auto p-0 m-0 font-bold text-lg">Highly Rated</h1>
                        <p>
                            More 5 star reviews than other leading brands, we keep
                            our customers satisfied 
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-6">
                <a className="" href="google.com">Get Started</a>
            </div>
        </section>
    );
}

export default ReasonsNeeded;