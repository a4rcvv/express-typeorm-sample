import { add } from "@/func";
import { describe } from "node:test";

describe("add", () => {
  it("works well", () => {
    expect(add(3, 4)).toBe(7);
  });
});
