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
                {/* fix the text sizing and positioning, add shadowing? */}
                <h1 className="text-red-700 z-20 max-w-lg text-shadow-2xl
                    text-xl top-4 left-4
                    md:text-4xl md:top-14 md:left-14
                    lg:text-5xl lg:top-20 lg:left-20
                    xl:text-6xl xl:top-24 xl:left-24
                    tracking-tighter font-bold absolute font-headFont">
                    Achieve your goals, <br /> while feeling full
                </h1>
            </div>
        </section>
    );
}

export default HomeBody;