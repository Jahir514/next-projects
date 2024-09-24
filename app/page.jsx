import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <main className="flex flex-col items-center xl:justify-between xl:flex-row">
          {/* About Myself Text */}
          <div className="order-2 text-center xl:text-left xl:order-none">
            <span className="text-xl">Full Stack Web Developer</span>
            <h1 className="mb-6 h1">
              Hello I am <br /> <span className="text-accent">Jahir Hasan</span>
            </h1>
            <p className="max-w-[500px] text-white/80 mb-9">
              I am good at creating Web Applications and proficient in HTML,
              CSS, JS, React, NEXT, Bootstrap, Tailwind
            </p>
            {/* Download button and socials */}
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 uppercase"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-4 xl:mb-0">
                <Social
                  containerStyles="flex gap-8"
                  iconStyles="h-9 w-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all hover:duration-500"
                />
              </div>
            </div>
          </div>
          {/* MY Photo */}
          <div className="mb-4 xl:mb-0 order-1 xl:order-none">
            <Photo />
          </div>
        </main>
      </div>
    </section>
  );
}
