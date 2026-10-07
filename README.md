### `dcl-bugtest-alpha-visibility`

# Bug: TextShapes disappear over alpha materials

In-world `TextShape` labels disappear when they sit in front of a model whose material uses alpha.

## Repro

`src/index.ts` spawns one alpha-blended plane and parents a dozen `TextShape` labels in front of it:

| Piece | Source | Setup |
| ----- | ------ | ----- |
| Plane | `assets/models/plane.gltf` | `alphaMode: BLEND`, alpha texture |
| Labels | `src/textShapeUi.ts` | 12 TextShapes, parented in front of the plane |

The labels vanish while they overlap the plane.

---

## Example

