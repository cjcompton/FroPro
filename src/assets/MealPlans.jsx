import React from "react";
import Button from "./Button";

function MealPlan() {
    return(
        <section>
            {/** need different bg coloring, wanted dark but it aint working */}
            <div className="bg-BGLightCream py-10 text-lg relative z-20 grid md:grid-cols-2 gap-2">
                <div className="md:p-2 my-auto">
                    <img 
                        src="./meal plan.png" 
                        alt="double container"
                        className="z-10" 
                    />
                </div>
                <div className="my-4 mx-6">
                    <h1 className="font-headFont tracking-tighter font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl pb-2">Whats in each box?</h1>
                    <ol className="list-disc text-xl font-semibold">
                        <li className="pt-1">Frozen foods with easy instructions on reheating</li>
                        <li className="pt-1">High quality ingredients sourced from local producers</li>
                        <li className="pt-1">Convenient and delicous meals that help meet your goals</li>
                        <li className="pt-1">An easy cooking experience</li>
                        <li className="pt-1">Sustainable packaging</li>
                    </ol>
                    <div className="flex justify-center mt-6">
                        <Button>View Plans</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MealPlan;