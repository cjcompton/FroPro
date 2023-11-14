import React from "react";

//make a popup thatd be funny
function HomeBody() {
    return(
        <section className="h-auto">
            <div className="max-w-screen-2xl mx-auto relative">
                <img 
                    src="./double container healthy.png" 
                    alt="double container"
                    className="w-full h-auto relative z-10" 
                />
                {/* fix the text sizing and positioning */}
                <h1 className="text-red-700 z-20 max-w-md
                    text-sm top-4 left-4 
                    md:text-2xl md:top-10 md:left-10
                    lg:text-3xl lg:top-20 lg:left-20
                    xl:text-5xl 
                    tracking-widest font-bold absolute font-headFont">
                    Achieve your goals, <br /> while feeling full
                </h1>
            </div>
        </section>
    );
}

export default HomeBody;