"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

const DEFAULT_EVENTS = [
  { year: "2000", description: "Lorem, ipsum dolor sit amet" },
  { year: "2005", description: "Lorem, ipsum dolor sit amet" },
  { year: "2010", description: "Lorem, ipsum dolor sit amet" },
  { year: "2015", description: "Lorem, ipsum dolor sit amet" },
  { year: "2020", description: "Lorem, ipsum dolor sit amet" },
];

export function Timeline({ events = DEFAULT_EVENTS }) {
  // Array of booleans tracking active ("done") state per event index
  const [activeIndices, setActiveIndices] = useState(
    new Array(events.length).fill(false),
  );
  // Controls line progress count (0 to events.length)
  const [progressCount, setProgressCount] = useState(0);

  const [isDesktop, setIsDesktop] = useState(false);
  const timelineRef = useRef(null);
  const loopIndexRef = useRef(0);
  const isAnimatedRef = useRef(false);

  // Monitor breakpoint matching original CSS `@media screen and (min-width: 728px)`
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 728px)");
    setIsDesktop(mediaQuery.matches);

    const handleResize = () => setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  // Recursive slow-loop animation sequence
  const runSlowLoop = useCallback(() => {
    if (loopIndexRef.current >= events.length) return;

    const currentIndex = loopIndexRef.current;

    // Activate event at current index
    setActiveIndices((prev) => {
      const next = [...prev];
      next[currentIndex] = true;
      return next;
    });

    // Increment line progress
    setProgressCount(currentIndex + 1);

    loopIndexRef.current += 1;

    setTimeout(() => {
      runSlowLoop();
    }, 800);
  }, [events.length]);

  // Scroll visibility observer trigger
  useEffect(() => {
    const target = timelineRef.current;
    if (!target || isAnimatedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.8 && !isAnimatedRef.current) {
            isAnimatedRef.current = true;
            loopIndexRef.current = 0;
            runSlowLoop();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.8, rootMargin: "0px 0px -50px 0px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [runSlowLoop]);

  // Handle user clicks on specific timeline points
  const handleEventClick = (clickedIndex) => {
    const isCurrentlyActive = activeIndices[clickedIndex];

    if (isCurrentlyActive) {
      // Set line length so it stops short of this point
      setProgressCount(clickedIndex);
      // Hide all events at and after the clicked index
      setActiveIndices((prev) =>
        prev.map((active, idx) => (idx >= clickedIndex ? false : active)),
      );
    } else {
      // Set line length to cover this point
      setProgressCount(clickedIndex + 1);
      // Show all events up to and including the clicked index
      setActiveIndices((prev) =>
        prev.map((_, idx) => (idx <= clickedIndex ? true : false)),
      );
    }
  };

  // Calculate filled progress percentage based on total steps
  const progressPercentage = (progressCount / events.length) * 100;

  return (
    <div
      ref={timelineRef}
      className="md:block flex flex-col justify-center items-center my-9 p-4 select-none"
    >
      <div className="relative flex flex-row md:flex-col justify-center items-center w-full">
        {/* Main Track Background Line */}
        <div className="relative flex-shrink-0 self-end md:self-auto bg-gray-200 rounded-xl w-1 md:w-full h-[300px] md:h-1">
          {/* Active Blue Filling Line */}
          <div
            className="top-0 left-0 absolute bg-blue-600 rounded-full transition-all duration-1000 ease-linear"
            style={{
              height: isDesktop ? "4px" : `${progressPercentage}%`,
              width: isDesktop ? `${progressPercentage}%` : "4px",
            }}
          />
        </div>

        {/* Milestone Events List */}
        <ul className="flex md:flex-row flex-col justify-center items-center m-0 mt-[-300px] md:mt-0 p-0 w-full list-none">
          {events.map((event, index) => {
            const isActive = activeIndices[index];

            return (
              <li
                key={index}
                onClick={() => handleEventClick(index)}
                className="relative flex flex-col items-start md:items-center my-4 md:my-0 p-6 md:p-0 w-full cursor-pointer"
              >
                {/* Milestone Node Dot */}
                <span
                  className={`absolute rounded-full transition-colors duration-700 ease-in-out
                    w-2 h-2 top-[30px] -left-[6px] 
                    md:w-[15px] md:h-[15px] md:-top-[10px] md:left-1/2 md:-translate-x-1/2
                    ${isActive ? "bg-blue-600" : "bg-gray-200"}`}
                />

                {/* Date Label */}
                <span
                  className={`absolute text-xs text-gray-700 font-semibold transition-opacity duration-1000
                    top-[26px] -left-[45px]
                    md:-top-[35px] md:left-1/2 md:-translate-x-1/2
                    ${isActive ? "opacity-100" : "opacity-0"}`}
                >
                  {event.year}
                </span>

                {/* Description Paragraph */}
                <p
                  className={`px-5 text-sm text-gray-600 transition-all duration-1000 transform
                    ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 md:-translate-y-3"
                    }`}
                >
                  {event.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
