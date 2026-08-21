import { describe, it, expect } from "vitest";
import { add, subtract } from "./math.js";

describe("math", () => {
  it("adds", () => expect(add(2, 3)).toBe(5));
  it("subtracts", () => expect(subtract(5, 3)).toBe(2));
});