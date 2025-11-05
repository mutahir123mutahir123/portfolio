
import { rotate } from "three/tsl"
import Card from "../components/Card"

// My edited code 
import { useRef, useEffect, useState } from "react";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
// My edited code 


// import { useRef } from "react"

// My edited code 
const About = () => {
    // my edited code
    const grid2Container = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Re-trigger animation
          setIsVisible(false);
          setTimeout(() => setIsVisible(true), 100);
        }
      },
      { threshold: 0.3 } // 30% visible triggers animation
    );

    if (grid2Container.current) observer.observe(grid2Container.current);
    return () => observer.disconnect();
  }, []);
// My edited code 

    // const grid2Container=useRef();

  return (
    <section id="about" className="c-space section-spacing">
        <h2 className="text-heading">About ME</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6
        md:auto-rows-[18rem] mt-12">
        {/*  My edited code  */}
            {/* GRID 1 */}
            <div className="flex items-end grid-default-color grid-1">
                <div
                    ref={grid2Container}
                    className="flex items-center justify-center w-full h-full relative overflow-hidden"
                >
                    {/* Centered main text */}
                    <p className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl text-gray-500">
                    PLAY WITH ME
                    </p>

                    {isVisible && (
                    <>
                        {/* Text Cards */}
                        <Card style={{ rotate: "75deg", bottom: "10%", left: "20%" }} text="GRASP" containerRef={grid2Container} delay={0.1} />
                        <Card style={{ rotate: "-30deg", bottom: "20%", left: "45%" }} text="SOLID" containerRef={grid2Container} delay={0.2} />
                        <Card style={{ rotate: "90deg", bottom: "15%", left: "70%" }} text="DESIGN PATTERNS" containerRef={grid2Container} delay={0.3} />
                        <Card style={{ rotate: "-45deg", bottom: "18%", left: "0%" }} text="DESIGN PRINCIPLES" containerRef={grid2Container} delay={0.4} />
                        <Card style={{ rotate: "20deg", bottom: "12%", left: "38%" }} text="SRP" containerRef={grid2Container} delay={0.5} />

                        {/* Image Cards */}
                        <Card style={{ rotate: "30deg", bottom: "10%", left: "70%" }} containerRef={grid2Container} image="assets/logos/csharp-pink.png" delay={0.6} />
                        <Card style={{ rotate: "-45deg", bottom: "12%", left: "25%" }} containerRef={grid2Container} image="assets/logos/dotnet-pink.png" delay={0.7} />
                        <Card style={{ rotate: "30deg", bottom: "15%", left: "10%" }} containerRef={grid2Container} image="assets/logos/blazor-pink.png" delay={0.8} />
                    </>
                    )}
                </div>
            </div>
            {/*  My edited code  */}
            {/* Grid 2 */}
            <div className="flex items-end grid-default-color grid-2">
                <img
                src="assets/coding-pov.png"
                className="absolute scale-[1.75] -right-[5rem] -top-[1rem]
                md:scale-[3] md:left-50 md:inset-y-10 lg:scale-
                [2.5]"
                />
                <div className="z-10">
                    <p className="headtext">Hi,I am Mutahir</p>
                    <p className="subtext">Over the last 2 years,I developedmy frontend and 
                    backend dev
                    skills to deliver dynamic and responsive software and web appliactions</p>
                </div>
                <div className="absolute inset-x-0 pointer-events-none
                -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"/>
            </div>

            {/* Grid 3 */}
            <div className="grid-black-color grid-3">
                <div className="z-10 w-[50%]">
                    <p className="headtext">Time Zone</p>
                    <p className="subtext">I'm based in Pakistan, and open to remote work worldwide</p>
                </div>
                <figure className="absolute left-[30%] top-[10%]">
                    <Globe/>
                </figure>
            </div>
            {/* grid 4 */}
            <div className="grid-special-color grid-4">
                <div className="flex flex-col items-center justify-center gap-4 size-full">
                    <p className="text-center headtext">Do you want to start a project together?
                    </p>
                    <CopyEmailButton/>
                </div>
            </div>
            {/* Grid 5 */}
            <div className="grid-default-color grid-5">
            <div className="z-10 w-[50%]">
                <p className="headtext">Tech Stack</p>
                <p className="subtext">
                    I am specialize in different languages, Frameworks,
                    tools and softwares that allow me to build beautiful and scalable 
                    appliactions.
                </p>
            </div>
                <div className="absolute inset-y-0 md:inset-y-9 
                w-full h-full start-[50%] md:scale-125">
                <Frameworks/>
                </div>
            </div>
        </div>

    </section>
  )
}

export default About








            {/* Grid 1 */}
            {/* <div className="flex items-end grid-default-color grid-1">
                <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                    <p className="flex items-end text-5xl text-gray-500">CODE IS CRAFT</p>
                    <Card style={{rotate:"75deg",top:"30%",left:"20%"}}
                    text="GRASP"
                    containerRef={grid2Container}
                    />
                    <Card style={{rotate:"-30deg",top:"60%",left:"45%"}}
                    text="SOLID"
                    containerRef={grid2Container}
                    />
                    <Card style={{rotate:"90deg",bottom:"30%",left:"70%"}}
                    text="DESIGN PATTERNS"
                    containerRef={grid2Container}
                    />
                    <Card style={{rotate:"-45deg",top:"55%",left:"0%"}}
                    text="DESIGN PRINCIPLES"
                    containerRef={grid2Container}
                    />
                    <Card style={{rotate:"20deg",top:"10%",left:"38%"}}
                    text="SRP"
                    containerRef={grid2Container}
                    />
                    <Card style={{rotate:"30deg",top:"70%",left:"70%"}}
                    containerRef={grid2Container}
                    image="assets/logos/csharp-pink.png"/>
                    <Card style={{rotate:"-45deg",top:"70%",left:"25%"}}
                    containerRef={grid2Container}
                    image="assets/logos/dotnet-pink.png"/>
                    <Card style={{rotate:"30deg",top:"5%",left:"10%"}}
                    containerRef={grid2Container}
                    image="assets/logos/blazor-pink.png"/>
                    
                </div>
               
            </div> */}