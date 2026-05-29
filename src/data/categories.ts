export interface Sub {
  name: string;
  slug: string;
}

export interface Category {
  name: string;
  slug: string;
  color: string;
  colorDark?: string;  /* override for dark mode if light color lacks contrast */
  subs: Sub[];
}

export const categories: Category[] = [
  {
    name: "Programming",
    slug: "programming",
    color: "#2b69b1",
    subs: [
      { name: "Languages",  slug: "languages"  },
      { name: "Theory",     slug: "theory"     },
      { name: "Sites",      slug: "sites"      },
      { name: "Testing",    slug: "testing"    },
      { name: "UI",         slug: "ui"         },
      { name: "Videogames", slug: "videogames" },
      { name: "Tools",      slug: "tools"      },
      { name: "AI",         slug: "ai"         },
      { name: "Others",     slug: "others"     },
    ],
  },
  {
    name: "Engineering",
    slug: "engineering",
    color: "#01818f",
    subs: [
      { name: "Chemistry",   slug: "chemistry"   },
      { name: "Electronics", slug: "electronics" },
      { name: "Maths",       slug: "maths"       },
      { name: "Astronomy",   slug: "astronomy"   },
    ],
  },
  {
    name: "Personal",
    slug: "personal",
    color: "#c64539",
    subs: [
      { name: "Travel Reviews", slug: "travel-reviews" },
      { name: "Thoughts",       slug: "thoughts"       },
      { name: "Cooking",        slug: "cooking"        },
      { name: "Exercise",       slug: "exercise"       },
      { name: "Health",         slug: "health"         },
      { name: "Composition",    slug: "composition"    },
      { name: "Bakery",         slug: "bakery"         },
    ],
  },
  {
    name: "Media",
    slug: "media",
    color: "#6655c9",
    subs: [
      { name: "Writing",    slug: "writing"    },
      { name: "Fiction",    slug: "fiction"    },
      { name: "Videogames", slug: "videogames" },
      { name: "Movies",     slug: "movies"     },
      { name: "Poems",      slug: "poems"      },
      { name: "Artists",    slug: "artists"    },
      { name: "Music",      slug: "music"      },
    ],
  },
  {
    name: "Languages",
    slug: "languages",
    color: "#845b02",
    subs: [
      { name: "Spanish",  slug: "spanish"  },
      { name: "English",  slug: "english"  },
      { name: "German",   slug: "german"   },
      { name: "French",   slug: "french"   },
      { name: "Italian",  slug: "italian"  },
      { name: "Japanese", slug: "japanese" },
      { name: "Korean",   slug: "korean"   },
    ],
  },
  {
    name: "Biology",
    slug: "biology",
    color: "#349b60",
    subs: [
      { name: "Anatomy",   slug: "anatomy"   },
      { name: "Medicine",  slug: "medicine"  },
      { name: "Nutrition", slug: "nutrition" },
      { name: "Animals",   slug: "animals"   },
    ],
  },
  {
    name: "History",
    slug: "history",
    color: "#a44f8a",
    subs: [
      { name: "Places", slug: "places" },
      { name: "Events", slug: "events" },
      { name: "People", slug: "people" },
    ],
  },
  {
    name: "Philosophy",
    slug: "philosophy",
    color: "#4e1d5f",
    colorDark: "#c285b9",   /* h4-dark: light pink-purple — visible on near-black */
    subs: [
      { name: "Philosophies", slug: "philosophies" },
      { name: "Philosophers", slug: "philosophers" },
    ],
  },
  {
    name: "Others",
    slug: "others",
    color: "#5e6978",
    colorDark: "#8fa8b2",   /* light steel-blue — readable on dark tile bg */
    subs: [
      { name: "Concepts", slug: "concepts" },
    ],
  },
];
