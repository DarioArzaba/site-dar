<!-- 
To Add Back To the Top Links
<a name="readme-top"></a>  <p align="right">(<a href="#readme-top">back to top</a>)</p>

If a site or webapp add (Explore the site link)
<p align="center">
    Site description
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
</p>


For foldable content like a TOC use 
<details>
    <summary> Table of Contents </summary>
    <ol>
        <li> <a href="#about">About</a>
        <ul>
            <li><a href="#built">Built</a></li>
        </ul>
    </ol>
</details>

To add built with after first div add:
<div align="center">
    <a href="https://nextjs.org/">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt="Logo" width="80" height="80">
    </a>
</div>
-->

<br />
<div align="center">
    <a href="https://github.com/DarioArzaba/blog">
        <img src="images/logo.png" alt="Logo" width="100">
    </a>
    <h3 align="center">The Heart of Dev - My Personal Blog</h3>
    <p align="center">
        A personal knowledge base and blog built with Astro.
        <br />
        <a href="https://darioarzaba.com"><strong>Visit the site »</strong></a>
        <br />
    </p>
</div>


## About

The Heart of Dev is a personal blog and digital garden that organizes notes, ideas, and references across programming, engineering, languages, history, media, and more. It is built with [Astro](https://astro.build/) as a fully static site deployed to Cloudflare Workers, using MDX for content, React islands for interactive components, KaTeX for math rendering, and Open Sans as the primary typeface. The design uses a custom light/dark theme with a warm off-white background (`#efefe7`), colored headings per level (blue, green, purple, pink, red, gold), and per-category accent colors that carry through navigation tiles and note lists.

* [Site](https://darioarzaba.com)

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/DarioArzaba/blog
   cd blog
   ```
2. Install and rebuild NPM packages
   ```sh
   npm install
   npm rebuild
   ```
3. Deploy either in build mode or dev
   ```sh
   npm run dev
   npm run build
   ```

## Usage

The site is organized into top-level categories (Programming, Engineering, Languages, Biology, History, Media, Philosophy, Others), each with subcategories that link to individual notes or list pages. Notes are written in MDX and support math expressions, syntax-highlighted code blocks, interactive React islands, and standard Markdown formatting.

**Design details:**
- **Font**: Open Sans Variable (`@fontsource-variable/open-sans`)
- **Colors (light)**: background `#efefe7`, ink `#282828`, accent `#007ab3`, headings h1–h6 in blue → green → purple → pink → red → gold
- **Colors (dark)**: background `#050606`, ink `#e1e1eb`, accent `#72c6ea`
- **Category accent colors**: Programming `#2b69b1`, Engineering `#01818f`, Personal `#c64539`, Media `#6655c9`, Languages `#845b02`, Biology `#349b60`, History `#a44f8a`, Philosophy `#4e1d5f`, Others `#5e6978`

## Roadmap

- [x] Static site with Astro + MDX
- [x] Light/dark theme
- [x] KaTeX math support
- [x] React interactive islands
- [ ] Search
    - [ ] Full-text search across notes

## License

Distributed under the [MIT License](https://mit-license.org/).

## Contact

Dario Arzaba - dario.arzaba@gmail.com
