# Image Provenance

## Publication Figures

The SVG illustrations used in the Research & Publications section are
**schematic diagrams** that visually summarize each paper's core idea. They
were generated with the help of **GitHub Copilot** (Claude model) and then
committed as static `.svg` files. They are **not** auto-generated from
experimental data or plotting libraries.

Each file lives under `src/images/` and uses standard SVG markup:

| File | Publication |
|---|---|
| `pub-deal-zne.svg` | [4] DEAL with ZNE — IEEE QCE 2025 |
| `pub-quantum-circuit.svg` | [3] Q-GEAR — ICPP '25: 54th International Conference on Parallel Processing |
| `pub-quantum-encoding.svg` | [2] Vectorized Attention — AAAI Symposium Series 7 |
| `pub-qpie.svg` | [1] QPIE Hybrid Network — QST 10(3), 035054 |

### How images are generated

The SVGs were produced by prompting **GitHub Copilot** (backed by the
**Claude** model) to generate inline SVG markup. No external design tool or
plotting library is needed. The general workflow is:

1. **Describe the diagram** — provide the LLM with the paper title, core idea,
   and what elements to visualise (e.g. circuit gates, data-flow arrows,
   architecture blocks).
2. **Prompt for SVG output** — ask the model to produce a self-contained `.svg`
   file using basic SVG primitives (`<rect>`, `<circle>`, `<line>`, `<text>`,
   etc.).
3. **Preview & iterate** — open the generated file in a browser
   (`open src/images/pub-<name>.svg`) and refine coordinates, colours, or
   labels by prompting again or editing manually.

#### Example prompt

Below is a representative prompt you can use with any Claude-based (or
similar) LLM to reproduce figures in the same style:

```
Create a self-contained SVG file (no external dependencies) that
illustrates the core idea of the paper "<PAPER TITLE>".

Constraints:
- viewBox="0 0 400 220", width 400, height 220
- Use monospace font for all text
- Use only basic SVG elements: rect, circle, line, text, polygon, g
- Colour palette: backgrounds #f0f4ff / #f4f0ff / #f0f8f4,
  gate fills #4E567E (blue-grey), #27ae60 (green), #e74c3c (red),
  #8e44ad (purple), #e67e22 (orange), measure #95a5a6
- Include a bold title at the top and a one-line caption at the bottom
- Show the paper's pipeline from left to right with labelled arrows

The diagram should be a schematic summary, not a data plot.
```

Adjust the paper title, pipeline stages, and colour accents as needed.

### Reproducing or editing a figure

1. Create or edit the `.svg` file in `src/images/`.
2. Import it in `src/Components/Research.jsx` and add an entry to the
   `publications` array with a descriptive `imageAlt` value.
3. Run `npm start` (or `npx parcel src/index.html`) to preview the site
   locally and confirm the image renders correctly inside its publication card.
4. Run `npx parcel build` to verify the asset is bundled correctly.
