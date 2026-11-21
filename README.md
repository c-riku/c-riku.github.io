# caiusribeiro.github.io

Source for my personal website: **https://caiusribeiro.github.io/** (short link: [iki.fi/caius.ribeiro](https://iki.fi/caius.ribeiro)). It's built with [Astro](https://astro.build) and deployed to GitHub Pages by a GitHub Action on every push to `main`.

## Editing

| What | Where |
|---|---|
| Home page sections (what I do, approach, career, education, earlier work) | `src/pages/index.astro` |
| Case studies, one Markdown file each | `src/content/work/*.md` |
| Header, footer and page metadata | `src/layouts/Base.astro` |
| Colours, fonts and layout | `src/styles/global.css` (colour tokens at the top) |
| Photo and favicon | `public/` |

To add a case study, copy an existing file in `src/content/work/`, change the front matter (`title`, `summary`, `area` = `data`/`bi`/`ai`, `context`, `period`, `tools`, `order`) and write the body. It appears on the home page automatically.

## Running locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Publications and their code and data

- Ribeiro-Kumara C, et al. 2022. Short- to medium-term effects of crown and surface fires on soil respiration in a Canadian boreal forest. [doi:10.1139/cjfr-2021-0354](https://doi.org/10.1139/cjfr-2021-0354)
- Ribeiro-Kumara C, et al. 2020. How do forest fires affect soil greenhouse gas emissions in upland boreal forests? A review. [doi:10.1016/j.envres.2020.109328](https://doi.org/10.1016/j.envres.2020.109328) · [JMP scripts](https://github.com/caiusribeiro/datainbrief-repo) · [R notebook](https://caiusribeiro.github.io/datainbrief-1-R-scripts/) · [Dataset](https://data.mendeley.com/datasets/v7gxtvv9z3/1)
- Ribeiro-Kumara C, et al. 2020. Long-term effects of forest fires on soil greenhouse gas emissions and extracellular enzyme activities in a hemiboreal forest. [doi:10.1016/j.scitotenv.2019.135291](https://doi.org/10.1016/j.scitotenv.2019.135291) · [R notebook](https://caiusribeiro.github.io/datainbrief-2-R-scripts/)
