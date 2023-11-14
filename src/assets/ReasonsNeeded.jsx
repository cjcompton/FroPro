import React from "react";

function ReasonsNeeded() {
    return(
        <section  className="bg-reasonBG border-t-2 border-gray-200">
            {/* make the h1 a real header, better spacing, better background (maybe gradient?)
                then add contents to the boxes, and make sure they stack / space a little better 
                NEEEED better colors */}
            <div>
                <h1 className="mx-auto font-headFont tracking-tighter font-bold text-2xl">Why FroPro?</h1>
            </div>
            <div className="relative z-20">
                <div className="gap-4 md:columns-4 p-3 text-center sm:columns-2">
                    <div className="border-2 border-black rounded-md p-3">
                        <img 
                            src="./icons/ingredients.png"
                            alt="shipping icon" 
                            className="max-h-24 mx-auto"
                        />
                        <h1 className="mx-auto p-0 m-0">small header</h1>
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
                        <h1 className="mx-auto p-0 m-0">small header</h1>
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
                        <h1 className="mx-auto p-0 m-0">small header</h1>
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
                        <h1 className="mx-auto p-0 m-0">small header</h1>
                        <p>
                            More 5 star reviews than other leading brands, we keep
                            our customers satisfied 
                        </p>
                    </div>
                </div>
            </div>
            <a href="google.com">Get Started</a>
        </section>
    );
}

export default ReasonsNeeded;