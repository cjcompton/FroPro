import React from "react";

//make a popup thatd be funny
//have the img shrink vertically at md, and just have the sides get cut when shrunk
//use single container on sm
function HomeBody() {
    return(
        <section className="h-auto">
            <div className="relative overflow-hidden">
                <img 
                    src="./double container healthy new.png" 
                    alt="double container"
                    className="sm:min-h-full min-h-3/4 xs:min-h-screen object-cover" 
                />
                {/* fix the text sizing and positioning, add shadowing? */}
                <h1 className="text-FroProRed z-20 max-w-lg text-shadow-2xl
                    text-3xl top-6 left-6
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