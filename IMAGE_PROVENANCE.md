# Image Provenance

## Publication Figures

The SVG illustrations used in the Research & Publications section are
**hand-crafted schematic diagrams** that visually summarize each paper's core
idea. They are **not** auto-generated from experimental data or plotting
libraries.

Each file lives under `src/images/` and uses standard SVG markup:

| File | Publication |
|---|---|
| `pub-deal-zne.svg` | [4] DEAL with ZNE — IEEE QCE 2025 |
| `pub-quantum-circuit.svg` | [3] Q-GEAR — ACM 2025 |
| `pub-quantum-encoding.svg` | [2] Vectorized Attention — AAAI Symposium Series 7 |
| `pub-qpie.svg` | [1] QPIE Hybrid Network — QST 10(3), 035054 |

### Editing or adding a figure

1. Create or edit the `.svg` file in `src/images/`.
2. Import it in `src/Components/Research.jsx` and add an entry to the
   `publications` array with a descriptive `imageAlt` value.
3. Run `npx parcel build` to verify the asset is bundled correctly.
