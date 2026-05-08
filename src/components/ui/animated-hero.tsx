import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["inteligentes", "eficientes", "conectadas", "autónomas", "resilientes"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-bold">
              <span className="text-text-primary">Instituciones</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold gradient-text"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-text-secondary max-w-2xl text-center">
              El sistema operativo que transforma la complejidad institucional en eficiencia operativa real.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <a href="#productos">
              <Button size="lg" className="gap-4 rounded-full" variant="outline">
                Ver productos <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="https://wa.me/5215510635993?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20Human%20Software" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-4 rounded-full">
                Comenzar <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0f1410]/80 border border-accent/20 backdrop-blur-sm mt-2">
            <span className="text-xs font-black text-accent-light">human software corporation</span>
            <span className="text-xs italic text-accent-light/60">ai solutions</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
