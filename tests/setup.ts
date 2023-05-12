import { expect } from "vitest";
import fetch from "node-fetch";
import matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.fetch = fetch;
