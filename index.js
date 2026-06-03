// Pre-built tree-sitter-cpp WASM grammar for @plurnk/plurnk-mimetypes.
//
// This package ships exactly one thing: cpp.wasm at the package root.
// The framework's TreeSitterLanguageHandler resolves it at runtime via
// import.meta.resolve("@plurnk/plurnk-mimetypes-grammar-cpp/cpp.wasm").
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));

/** Absolute filesystem path to the bundled cpp.wasm. */
export const wasmPath = path.join(here, "cpp.wasm");
