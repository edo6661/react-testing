import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    // ! run before each test
    setupFiles: "tests/setup.ts",
  },
});
