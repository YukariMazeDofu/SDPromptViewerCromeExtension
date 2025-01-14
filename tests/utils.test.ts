import { assertEquals } from "@std/assert";
import { greet } from "../src/utils.ts";

Deno.test("greet function", () => {
  const result = greet("Deno");
  assertEquals(result, "Hello, Deno!");
});
