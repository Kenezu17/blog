import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

// ── Philippine Government Building (Malacañang Palace) ──────────────────────
// Public domain via Wikimedia Commons. Swap this URL with any Philippine
// government building photo you prefer.
const BG_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Malaca%C3%B1an_Palace_facade.jpg/1280px-Malaca%C3%B1an_Palace_facade.jpg";

const TAGS = [
  "PORK BARREL",
  "GHOST PROJECTS",
  "OVERPRICING",
  "KICKBACKS",
  "PDAF SCAM",
  "SMUGGLING",
  "PLUNDER",
];

export default function Home() {
  const sectionRef  = useRef(null);
  const curtainRef  = useRef(null);
  const eyebrowRef  = useRef(null);
  const lineRef     = useRef(null);
  const headlineRef = useRef(null);
  const subRef      = useRef(null);
  const tagsRef     = useRef(null);
  const scrollRef   = useRef(null);
  const stampRef    = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      /* 1 ── cinematic curtain wipe off */
      tl.to(curtainRef.current, {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.1,
        ease: "expo.inOut",
      });

      /* 2 ── ghost stamp fades in */
      tl.fromTo(
        stampRef.current,
        { opacity: 0, scale: 1.15 },
        { opacity: 1, scale: 1, duration: 1.0 },
        "-=0.5"
      );

      /* 3 ── eyebrow slides in */
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, x: -28 },
        { opacity: 1, x: 0, duration: 0.6 },
        "-=0.7"
      );

      /* 4 ── red line draws */
      tl.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.65, ease: "power2.inOut" },
        "-=0.3"
      );

      /* 5 ── headline 3-D char flip */
      const split = new SplitText(headlineRef.current, { type: "chars" });
      tl.fromTo(
        split.chars,
        { y: 90, opacity: 0, rotateX: -90, transformOrigin: "0% 50% -30px" },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.85,
          stagger: 0.036,
          ease: "back.out(1.4)",
        },
        "-=0.3"
      );

      /* 6 ── sub-copy */
      tl.fromTo(
        subRef.current,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.35"
      );

      /* 7 ── tags pop in */
      const tags = tagsRef.current?.querySelectorAll(".tag-item");
      tl.fromTo(
        tags,
        { opacity: 0, scale: 0.7, y: 10 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: "back.out(2)",
        },
        "-=0.4"
      );

      /* 8 ── scroll hint */
      tl.fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.2"
      );

      /* ── looping scroll bounce ── */
      gsap.to(scrollRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.1,
        ease: "sine.inOut",
        delay: 3.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Crimson+Pro:ital,wght@0,300;0,400;1,300&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-crimson  { font-family: 'Crimson Pro', serif; }
        .text-outline  {
          color: transparent;
          -webkit-text-stroke: 2px #dc2626;
        }
        .perspective-800 { perspective: 800px; }
        .text-glow {
          text-shadow: 0 0 60px rgba(220,38,38,0.35);
        }
      `}</style>

      <section
        id="home"
        ref={sectionRef}
        className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      >
        {/* ── Background: Philippine Government Building ── */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url('${BG_IMAGE}')` }}
        />

        {/* Dark desaturated overlay — makes photo feel heavy & ominous */}
        <div className="absolute inset-0 bg-black/72" />

        {/* Red tinted bottom glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(185,28,28,0.28) 0%, transparent 70%)",
          }}
        />

        {/* Vignette edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.78) 100%)",
          }}
        />

        {/* Ghost ₱ watermark (top-right) */}
        <div
          ref={stampRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 font-playfair font-black select-none pointer-events-none leading-none"
          style={{
            fontSize: "clamp(160px, 26vw, 380px)",
            color: "rgba(185,28,28,0.07)",
            letterSpacing: "-0.04em",
          }}
        >
          ₱
        </div>

        {/* ── Opening black curtain (z-50, animates away) ── */}
        <div
          ref={curtainRef}
          className="absolute inset-0 bg-black z-50 pointer-events-none"
        />

        {/* ── Main content ── */}
        <div className="relative z-10 w-full max-w-4xl px-6 md:px-14">

          {/* Eyebrow */}
          <p
            ref={eyebrowRef}
            className="font-crimson text-red-600 uppercase tracking-[0.38em] mb-4"
            style={{ fontSize: "clamp(10px, 1.1vw, 13px)", fontWeight: 300 }}
          >
            A Nation's Open Wound
          </p>

          {/* Red accent line */}
          <div
            ref={lineRef}
            className="h-[2px] mb-5 w-full"
            style={{
              background:
                "linear-gradient(90deg, #dc2626 0%, #ef4444 55%, transparent 100%)",
            }}
          />

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-playfair font-black perspective-800 mb-6 leading-[0.88]"
            style={{
              fontSize: "clamp(52px, 9.5vw, 120px)",
              letterSpacing: "-0.025em",
              color: "#f2e9d8",
            }}
          >
            CORRUPT
            <br />
            <span className="text-outline">PILIPINAS</span>
          </h1>

          {/* Sub-copy */}
          <p
            ref={subRef}
            className="font-crimson italic mb-8 max-w-lg leading-relaxed"
            style={{
              fontSize: "clamp(15px, 2vw, 21px)",
              color: "rgba(210,192,168,0.78)",
              fontWeight: 300,
            }}
          >
            Billions stolen. Promises buried. While millions go hungry,
            those in power feast on public trust.
          </p>

          {/* Scandal tags */}
          <div ref={tagsRef} className="flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <span
                key={t}
                className="tag-item font-crimson border border-red-700/55 text-red-400 uppercase px-3 py-1"
                style={{ fontSize: "10.5px", letterSpacing: "0.13em", fontWeight: 400 }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── Scroll hint ── */}
        <div
          ref={scrollRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10
                     flex flex-col items-center gap-2"
        >
          <span
            className="font-crimson uppercase tracking-[0.22em]"
            style={{ fontSize: "10px", color: "rgba(242,233,216,0.32)" }}
          >
            Scroll
          </span>
          <div
            className="w-px h-10"
            style={{
              background: "linear-gradient(to bottom, #dc2626, transparent)",
            }}
          />
        </div>
      </section>
    </>
  );
}