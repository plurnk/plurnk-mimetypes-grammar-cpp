# @plurnk/plurnk-mimetypes-grammar-cpp

Pre-built `tree-sitter-cpp` WASM grammar for the [@plurnk/plurnk-mimetypes](https://github.com/plurnk/plurnk-mimetypes) framework.

## install

```
npm i @plurnk/plurnk-mimetypes-grammar-cpp
```

## what's in here

- **`cpp.wasm`** — pre-built from the pinned upstream [tree-sitter-cpp](https://github.com/tree-sitter/tree-sitter-cpp) commit (SHA in `.grammar-pin`)
- `scripts/build-wasm.mjs` — reproducible rebuild from the pinned source
- `scripts/verify-wasm.mjs` — CI byte-identical reproducibility check

Declares only `web-tree-sitter` as a peer — no native `tree-sitter`, no node-gyp.

## license

MIT. The bundled `cpp.wasm` is built from the upstream tree-sitter-cpp grammar; see the pinned commit for that project's attribution.
