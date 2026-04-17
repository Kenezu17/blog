import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-10 bg-white"
    >
      {/* IMAGE */}
      <img
        src="/assets/issues.jpg"
        alt="Philippines Issues"
        className="w-full md:w-1/2 rounded-xl shadow-lg"
      />

      {/* TEXT */}
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
          About Pilipinas · Video Files
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Pilipinas · Video Files is a platform that tells real stories about
          the current issues in the Philippines—from corruption and rising fuel
          prices to injustice and the everyday struggles of Filipinos.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          This blog aims to raise awareness, spark critical thinking, and give
          voice to the people through powerful video storytelling.
        </p>
      </div>
    </section>
  )
}

export default About