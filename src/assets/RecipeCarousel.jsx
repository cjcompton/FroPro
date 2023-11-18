import React from "react";

function RecipeCarousel() {
    return(
        <section className="bg-BGLightCream border-t-2 py-14 border-gray-200">
            <div className="overflow-hidden bg-gray-200">
                <div className="flex space-x-4 transition-transform duration-300 ease-in-out">
                    <div className="w-full">
                    <img
                        className="w-full h-64 object-cover"
                        src="./foods/gyoza.jpg"
                        alt="Image: Gyoza"
                    />
                    </div>
                    <div className="w-full">
                    <img
                        className="w-full h-64 object-cover"
                        src="./foods/steak.jpg"
                        alt="Image: Steak"
                    />
                    </div>
                    <div className="w-full">
                    <img
                        className="w-full h-64 object-cover"
                        src="./foods/tacos.jpg"
                        alt="Image: Tacos"
                    />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RecipeCarousel;