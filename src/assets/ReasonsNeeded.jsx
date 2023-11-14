import React from "react";

function ReasonsNeeded() {
    return(
        <section>
            {/* make the h1 a real header, better spacing, better background (maybe gradient?)
                then add contents to the boxes, and make sure they stack / space a little better */}
            <div>
                <h1 className="mx-auto">Why FroPro?</h1>
            </div>
            <div className="relative z-20">
                <div className="gap-4 md:columns-4 p-3 text-center sm:columns-2">
                    <div className="border-2 border-black rounded-md p-3">
                        <img 
                            src="./icons/ingredients.png"
                            alt="shipping icon" 
                            className="max-h-24 mx-auto"
                        />
                        <p>4</p>
                    </div>
                    <div className="border-2 border-black rounded-md p-3">
                        <img 
                            src="./icons/muscle.png"
                            alt="shipping icon" 
                            className="max-h-24 mx-auto"
                        />
                        <p>Reasons</p>
                    </div>
                    <div className="border-2 border-black rounded-md p-3">
                        <img 
                            src="./icons/prices.png"
                            alt="shipping icon" 
                            className="max-h-24 mx-auto"
                        />
                        <p>To</p>
                    </div>
                    <div className="border-2 border-black rounded-md p-3">
                        <img 
                            src="./icons/stars.png"
                            alt="shipping icon" 
                            className="max-h-24 mx-auto"
                        />
                        <p>Buy</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReasonsNeeded;