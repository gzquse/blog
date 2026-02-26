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
| `pub-quantum-circuit.svg` | [3] Q-GEAR — ICPP '25: 54th International Conference on Parallel Processing |
| `pub-quantum-encoding.svg` | [2] Vectorized Attention — AAAI Symposium Series 7 |
| `pub-qpie.svg` | [1] QPIE Hybrid Network — QST 10(3), 035054 |

### How images are generated

Each SVG is written by hand in a plain text editor using standard SVG elements
(`<rect>`, `<circle>`, `<line>`, `<text>`, etc.). No external design tool,
plotting library, or code generator is required. The general workflow is:

1. **Sketch the layout** — decide which elements of the paper to highlight
   (e.g., circuit gates, data-flow arrows, architecture blocks).
2. **Write SVG markup** — open a new `.svg` file in `src/images/` and build the
   diagram with SVG primitives. Use the existing `pub-*.svg` files as
   templates for consistent sizing (`viewBox="0 0 400 220"`), colour palette,
   and font choices (`font-family="monospace"`).
3. **Preview** — open the file directly in a browser
   (`open src/images/pub-<name>.svg`) to iterate on coordinates and styling.

### Reproducing or editing a figure

1. Create or edit the `.svg` file in `src/images/`.
2. Import it in `src/Components/Research.jsx` and add an entry to the
   `publications` array with a descriptive `imageAlt` value.
3. Run `npm start` (or `npx parcel src/index.html`) to preview the site
   locally and confirm the image renders correctly inside its publication card.
4. Run `npx parcel build` to verify the asset is bundled correctly.
