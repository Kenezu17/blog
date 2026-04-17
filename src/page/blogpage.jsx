import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import v1 from "../assets/video/Video1.mp4";
import v2 from "../assets/video/Video2.mp4";
import v3 from "../assets/video/Video3.mp4";
import v4 from "../assets/video/Video4.mp4";
import v5 from "../assets/video/Video5.mp4";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  { id: 1, video: v1, title: "Political Dynasty", desc: "Breaking the Cycle — how Political Dynasties Fuel Poverty and Corruption.", author: "Klaus Posting", date: "Sept 24" },
  { id: 2, video: v2, title: "Protect Natural Resources", desc: "Protect our natural resources from businessmen and politicians who only want to enrich themselves.", author: "k_0bayan", date: "Nov 08" },
  { id: 3, video: v3, title: "Story Of Edza", desc: "Forty years have passed since the nation rose up to break free from a dictatorship that took thousands of lives. But today, history is still being debated in the present.", author: "Jeca", date: "Feb 02" },
  { id: 4, video: v4, title: "High Fuel Price", desc: "The feelings of drivers affected by high fuel prices are mixed with exhaustion, worry, and frustration — their income is no longer enough compared to the increasing cost of fuel.", author: "itxx.don", date: "Apr 17" },
  { id: 5, video: v5, title: "Flood Control, Corruption Must Stop", desc: "₱545 billion poured into flood control — yet every rainy season, Filipinos still find themselves wading through floodwaters.", author: "Sereia", date: "Aug 30" },
];

function Card({ post, active, cardRef, onClick }) {
  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className="group flex gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200"
      style={{
        background: active ? "rgba(220,38,38,0.15)" : "transparent",
        border: active ? "1px solid rgba(220,38,38,0.5)" : "1px solid transparent",
        opacity: 0,
        transform: "translateX(-20px)",
      }}
    >
      <div className="relative shrink-0 w-24 h-16 rounded-lg overflow-hidden bg-black">
        <video
          src={post.video}
          muted
          loop
          playsInline
          autoPlay
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span
          className="absolute bottom-1 left-1 text-[9px] font-bold tracking-widest uppercase px-1 py-0.5 rounded"
          style={{ background: "rgba(220,38,38,0.85)", color: "#fff" }}
        >
          {post.date}
        </span>
      </div>
      <div className="flex flex-col justify-center min-w-0">
        <p
          className="text-sm font-bold line-clamp-2 leading-snug"
          style={{ color: active ? "#f87171" : "#e5e5e5" }}
        >
          {post.title}
        </p>
        <span className="text-xs mt-1 truncate" style={{ color: "#6b7280" }}>
          @{post.author}
        </span>
      </div>
    </div>
  );
}

function Detail({ post }) {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const metaRef = useRef(null);
  const videoRef = useRef(null);
  const stripeRef = useRef(null);

  useEffect(() => {
    if (!post) return;

    const tl = gsap.timeline();

    tl.fromTo(videoRef.current,
      { opacity: 0, scale: 0.97 },
      { opacity: 1, scale: 1, duration: 0.45, ease: "power2.out" }
    )
    .fromTo(stripeRef.current,
      { scaleX: 0, transformOrigin: "left" },
      { scaleX: 1, duration: 0.4, ease: "power3.out" },
      "-=0.2"
    )
    .fromTo(titleRef.current,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      "-=0.2"
    )
    .fromTo(descRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
      "-=0.2"
    )
    .fromTo(metaRef.current,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.3 },
      "-=0.15"
    );
  }, [post?.id]);

  if (!post) return null;

  return (
    <div className="flex flex-col h-full">
      <div ref={videoRef} className="w-full rounded-2xl overflow-hidden mb-5" style={{ aspectRatio: "16/9", background: "#000" }}>
        <video src={post.video} controls autoPlay muted loop className="w-full h-full object-cover" />
      </div>

      <div ref={stripeRef} className="flex h-[3px] rounded-full overflow-hidden mb-4 w-16">
        <div className="flex-1 bg-blue-600" />
        <div className="flex-1 bg-red-600" />
        <div className="flex-1 bg-yellow-400" />
      </div>

      <h2
        ref={titleRef}
        className="font-black leading-tight mb-3"
        style={{ fontSize: "clamp(1.1rem, 3vw, 1.5rem)", color: "#f1f1f1", letterSpacing: "-0.02em" }}
      >
        {post.title}
      </h2>

      <p ref={descRef} className="text-sm leading-relaxed mb-5" style={{ color: "#9ca3af" }}>
        {post.desc}
      </p>

      <div
        ref={metaRef}
        className="mt-auto pt-4 flex items-center justify-between"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ background: "rgba(220,38,38,0.2)", color: "#f87171" }}
          >
            {post.author[0].toUpperCase()}
          </div>
          <div>
            <p className="text-xs font-semibold" style={{ color: "#d1d5db" }}>@{post.author}</p>
            <p className="text-[10px]" style={{ color: "#6b7280" }}>{post.date}</p>
          </div>
        </div>
        <p className="text-[10px]" style={{ color: "#4b5563" }}>© 2026 {post.author}</p>
      </div>
    </div>
  );
}

export default function Blog() {
  const [selected, setSelected] = useState(posts[0]);

  const sectionRef = useRef(null);
  const headerLabelRef = useRef(null);
  const headerTitleRef = useRef(null);
  const headerStripeRef = useRef(null);
  const layoutRef = useRef(null);
  const cardRefs = useRef([]);

  // ── Page-load animation ──────────────────────────────────────
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(headerLabelRef.current,
      { opacity: 0, y: -12 },
      { opacity: 1, y: 0, duration: 0.5 }
    )
    .fromTo(headerTitleRef.current,
      { opacity: 0, y: 20, skewY: 2 },
      { opacity: 1, y: 0, skewY: 0, duration: 0.6 },
      "-=0.3"
    )
    .fromTo(headerStripeRef.current,
      { scaleX: 0, transformOrigin: "left" },
      { scaleX: 1, duration: 0.5 },
      "-=0.3"
    )
    .fromTo(layoutRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.2"
    )
    // stagger sidebar cards
    .to(cardRefs.current, {
      opacity: 1,
      x: 0,
      duration: 0.4,
      stagger: 0.08,
      ease: "power2.out",
    }, "-=0.3");
  }, []);

  // ── Scroll-triggered animation ───────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header parallax as user scrolls down
      gsap.to(headerTitleRef.current, {
        y: -40,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "30% top",
          scrub: true,
        },
      });

      // Layout panel rises up when scrolled into view (if section is below fold)
      gsap.fromTo(layoutRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: layoutRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cards stagger in on scroll
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.45,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
            delay: i * 0.06,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="min-h-screen px-3 md:px-8 py-10"
      style={{ background: "#0a0a0a" }}
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-6">
        <p
          ref={headerLabelRef}
          className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
          style={{ color: "#ef4444" }}
        >
          Pilipinas · Video Files
        </p>
        <h1
          ref={headerTitleRef}
          className="font-black"
          style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "#f1f1f1", letterSpacing: "-0.03em" }}
        >
          Stories That Matter
        </h1>
        <div ref={headerStripeRef} className="flex h-[3px] rounded-full overflow-hidden mt-3 w-32">
          <div className="flex-1 bg-blue-600" />
          <div className="flex-1 bg-red-600" />
          <div className="flex-1 bg-yellow-400" />
        </div>
      </div>

      {/* Layout */}
      <div
        ref={layoutRef}
        className="max-w-6xl mx-auto flex flex-col md:flex-row rounded-2xl overflow-hidden"
        style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        {/* Sidebar */}
        <div className="w-full md:w-72 shrink-0 p-3" style={{ borderRight: "1px solid rgba(255,255,255,0.07)" }}>
          <p className="text-[10px] font-bold tracking-[0.15em] uppercase px-1 mb-3" style={{ color: "#4b5563" }}>
            All Videos
          </p>
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:max-h-[72vh] pb-2 md:pb-0">
            {posts.map((p, i) => (
              <div key={p.id} className="min-w-[260px] md:min-w-0">
                <Card
                  post={p}
                  active={selected.id === p.id}
                  cardRef={(el) => (cardRefs.current[i] = el)}
                  onClick={() => setSelected(p)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Detail */}
        <div className="flex-1 p-4 md:p-7 overflow-y-auto md:max-h-[75vh]">
          <Detail post={selected} />
        </div>
      </div>
    </section>
  );
}