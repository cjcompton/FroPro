import React from "react";

function MealPlan() {
    return(
        <section>
            {/** need different bg coloring, wanted dark but it aint working */}
            <div className="bg-BGLightCream border-t-2 border-gray-200 relative z-20 grid md:grid-cols-2 gap-2">
                <div className="md:p-4">
                    <img 
                        src="./meal plan.png" 
                        alt="double container"
                        className="z-10" 
                    />
                </div>
                <div className="my-4 mx-2">
                    <h1 className="font-headFont tracking-tighter font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl pb-6">Whats in each box?</h1>
                    <ol>
                        <li>Frozen foods with easy instructions on reheating</li>
                        <li>High quality ingredients sourced from local producers</li>
                        <li>Convenient and delicous meals that help meet your goals</li>
                        <li>An easy cooking experience</li>
                        <li>Sustainable packaging</li>
                    </ol>
                    <div className="flex justify-center mt-6">
                        <a className="" href="google.com">View Plans</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MealPlan;