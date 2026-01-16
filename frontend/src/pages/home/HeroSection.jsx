import heroGraphic from "../../assets/bg-hero.jpg";
import { NavLink } from "react-router-dom";

export default function HeroSection() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between w-full px-8 md:px-30 bg-white relative overflow-hidden">
            <div className="w-full md:w-1/2 text-left space-y-6">
                <h1 className="text-4xl md:text-6xl leading-tight">
                    <span className="color font-semibold">We <span className="font-">Build</span> Software</span>
                    <br />
                    <span className="font-extrabold">to Make Your Life & </span><br /><span className=""> Business Easy!</span>
                </h1>

                {/* <button className="mt-6 flex items-center gap-2 text-white font-medium px-8 py-2 rounded-lg transition-all hover:opacity-90 bg-[radial-gradient(ellipse_at_bottom,#FFFFFF_0%,#FB3800_40%)]">
                    Register Now
                    <span className="text-lg">↗</span>
                </button> */}

                <NavLink to="/contact">
                    <button className="mt-6 flex items-center gap-2 text-white font-medium px-8 py-2 rounded-lg transition-all hover:opacity-90 gradient-bg  cursor-pointer">
                        Register Now
                        <span className="text-lg">↗</span>
                    </button>
                </NavLink>

            </div>
            <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
                <div className="relative w-[300px] md:w-[400px] lg:w-[680px]">
                    <img
                        src={heroGraphic}
                        alt="Hero Graphic"
                        className="w-full h-auto rounded-xl"
                        draggable={false}
                    />
                    <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-orange-200 via-white to-purple-200 blur-3xl opacity-70"></div>
                </div>
            </div>
        </section>
    );
}

// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
// import heroGraphic from "../../assets/bg-hero.jpg";

// export default function HeroSection() {

//     const controls = useAnimation();
//     const [ref, inView] = useInView({ triggerOnce: false });

//     useEffect(() => {
//         if (inView) {
//             controls.start("visible");
//         } else {
//             controls.start("hidden");
//         }
//     }, [inView]);

//     return (
//         <section
//             ref={ref}
//             className="flex flex-col md:flex-row items-center justify-between w-full px-8 md:px-30 bg-white relative overflow-hidden"
//         >

//             {/* LEFT SECTION */}
//             <motion.div
//                 variants={{
//                     hidden: { opacity: 0, x: -80 },
//                     visible: { opacity: 1, x: 0 },
//                 }}
//                 initial="hidden"
//                 animate={controls}
//                 transition={{ duration: 0.7 }}
//                 className="w-full md:w-1/2 text-left space-y-6"
//             >
//                 <h1 className="text-4xl md:text-6xl leading-tight">
//                     <span className="text-[#FB3800] font-semibold">
//                         We <span className="font-">Build</span> Software
//                     </span>
//                     <br />
//                     <span className="font-extrabold">to Make Your Life & </span><br />
//                     <span className=""> Business Easy!</span>
//                 </h1>

//                 <motion.button
//                     variants={{
//                         hidden: { scale: 0 },
//                         visible: { scale: 1 },
//                     }}
//                     initial="hidden"
//                     animate={controls}
//                     transition={{ duration: 0.5, type: "spring" }}
//                     className="mt-6 flex items-center gap-2 text-white font-medium px-8 py-2 rounded-lg transition-all hover:opacity-90 bg-[radial-gradient(ellipse_at_bottom,#FFFFFF_0%,#FB3800_40%)]"
//                 >
//                     Register Now
//                     <span className="text-lg">↗</span>
//                 </motion.button>
//             </motion.div>

//             {/* RIGHT IMAGE */}
//             <motion.div
//                 variants={{
//                     hidden: { opacity: 0, x: 80 },
//                     visible: { opacity: 1, x: 0 },
//                 }}
//                 initial="hidden"
//                 animate={controls}
//                 transition={{ duration: 0.7 }}
//                 className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 relative"
//             >
//                 <div className="relative w-[300px] md:w-[400px] lg:w-[680px]">
//                     <motion.img
//                         src={heroGraphic}
//                         alt="Hero Graphic"
//                         draggable={false}
//                         className="w-full h-auto rounded-xl"
//                         variants={{
//                             hidden: { opacity: 0, scale: 0.8 },
//                             visible: { opacity: 1, scale: 1 },
//                         }}
//                         initial="hidden"
//                         animate={controls}
//                         transition={{ duration: 0.7 }}
//                     />

//                     <motion.div
//                         className="absolute -z-10 inset-0 bg-gradient-to-tr from-orange-200 via-white to-purple-200 blur-3xl opacity-70"
//                         variants={{
//                             hidden: { opacity: 0 },
//                             visible: { opacity: 0.7 },
//                         }}
//                         initial="hidden"
//                         animate={controls}
//                         transition={{ duration: 1 }}
//                     ></motion.div>
//                 </div>
//             </motion.div>

//         </section>
//     );
// }
