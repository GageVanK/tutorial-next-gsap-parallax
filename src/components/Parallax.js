import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Center, Text, Container, useMatches } from "@mantine/core";

function Parallax() {
  const [background, setBackground] = useState(20);
  const fontSize = useMatches({
    base: 39, // Default for extra small screens (below theme.breakpoints.sm)
    sm: 44, // For small screens (theme.breakpoints.sm and above)
    lg: 55, // For large screens (theme.breakpoints.lg and above)
  });

  const parallaxRef = useRef(null);
  const mountain3 = useRef(null);
  const mountain2 = useRef(null);
  const mountain1 = useRef(null);
  const cloudsBottom = useRef(null);
  const cloudsLeft = useRef(null);
  const cloudsRight = useRef(null);
  const stars = useRef(null);
  const sun = useRef(null);
  const copy = useRef(null);
  const btn = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      // Create a new timeline with scroll-triggered animations
      var tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "2000 bottom",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            setBackground(Math.ceil(self.progress * 100 + 20));
          },
        },
      });

      // Initial position and opacity of the copy section
      gsap.set(copy.current, { y: "-200%", opacity: 1 });

      // Sun animation - moves downwards as you scroll
      tl.to(
        sun.current,
        {
          y: "+=500", // Moves down
        },
        0
      );

      // Copy animation - moves up and fades out
      tl.to(
        copy.current,
        {
          y: "-=100", // Moves upwards
          opacity: 0, // Fades out
        },
        0
      );

      // Animations for other elements
      tl.to(mountain3.current, { y: "-=80" }, 0);
      tl.to(mountain2.current, { y: "-=30" }, 0);
      tl.to(mountain1.current, { y: "+=50" }, 0);
      tl.to(stars.current, { top: 0 }, 0.5);
      tl.to(cloudsBottom.current, { opacity: 0, duration: 0.5 }, 0);
      tl.to(cloudsLeft.current, { x: "-20%", opacity: 0 }, 0);
      tl.to(cloudsRight.current, { x: "20%", opacity: 0 }, 0);
    });

    return () => ctx.revert();
  }, []);

  const handleButtonClick = () => {
    alert("Button clicked!"); // Replace this with your desired action
  };

  return (
    <div className="parallax-outer">
      <div
        ref={parallaxRef}
        style={{
          background: `linear-gradient(#B22222, #FF8C00 ${background}%, #FF8C00, #FFA500)`,
        }}
        className="parallax"
      >
        <img
          ref={mountain3}
          className="mountain-3"
          src="/parallax/mountain-3.svg"
        />
        <img
          ref={mountain2}
          className="mountain-2"
          src="/parallax/mountain-2.svg"
        />
        <img
          ref={mountain1}
          className="mountain-1"
          src="/parallax/mountain-1.svg"
        />
        <img ref={sun} className="sun" src="/parallax/sun.svg" />

        <img
          ref={cloudsLeft}
          className="clouds-left"
          src="/parallax/clouds-left.svg"
        />
        <img
          ref={cloudsRight}
          className="clouds-right"
          src="/parallax/clouds-right.svg"
        />

        <Container pt={170}>
          <Text fz={fontSize} fw={500} ta="center">
            Journey with Us
          </Text>

          <Center>
            <button className="button" onClick={handleButtonClick}>
              Contact Now
            </button>
          </Center>
        </Container>
      </div>
    </div>
  );
}

export default Parallax;
