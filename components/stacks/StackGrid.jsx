"use client";

import { stacks } from "./stacks";
import StackCard from "./StackCard";

export default function StackGrid() {
  return (
    <div className="justify-items-center gap-4 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 max-md:mx-3 px-3 sm:px-8 py-5">
      {stacks.map((stack) => (
        <StackCard
          key={stack.id}
          stack={stack}
        />
      ))}
    </div>
  );
}
