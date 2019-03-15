module.exports = {
  title: "Andre de Vries",
  dest: "./public",
  themeConfig: {
    domain: "https://www.andredevries.tech",
    repo: "https://github.com/andre347/andredevries-tech",
    repoLabel: "Repo",
    docsDir: "src",
    editLinks: true,
    logo: "/logo-andre.svg",
    lastUpdated: "Last Updated",
    editLinkText: "Learn more? Contact me!",
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog/index.html" },
      {
        text: "Learn",
        items: [
          { text: "About", link: "/learn/index.html" },
          {
            text: "Regular Expressions",
            link: "/learn/Regular_Expressions/index.html"
          }
        ]
      },
      // {
      //   text: "Data",
      //   items: [
      //     { text: "Test1", link: "/data/index.html" },
      //     { text: "Test2", link: "/data/test_data/index.html" }
      //   ]
      // },
      {
        text: "About",
        link: "/about/index.html"
      },
      { text: "Contact", link: "/contact/index.html" }
    ],
    user: {
      socialMedia: [
        {
          name: "Twitter",
          href: "https://twitter.com/andre347_",
          icon: "twitter"
        },
        {
          name: "Github",
          href: "https://github.com/andre347",
          icon: "github"
        },
        // {
        //   name: "CodePen",
        //   href: "https://codepen.io/andre347/",
        //   icon: "codepen"
        // },
        {
          name: "Medium",
          href: "https://medium.com/@andre.devries",
          icon: "medium"
        },
        {
          name: "YouTube",
          href: "https://www.youtube.com/channel/UC6oFbYx6YjE596P-Ty8bVyg",
          icon: "youtube"
        }
      ]
    }
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-90804640-2"
      }
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true
      }
    ],
    "vuepress-plugin-janitor"
  ],
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=PT+Serif:400,700|Poppins:500,700"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        sizes: "32x32",
        href: "/favicon - 32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        sizes: "16x16",
        href: "/favicon - 16x16.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-icon-180x180.png"
      }
    ],
    [
      "link",
      {
        rel: "mask-icon",
        color: "#5bbad5",
        href: "/safari-pinned-tab.svg"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/x-icon",
        sizes: "96x96",
        href: "./favicon.ico"
      }
    ],

    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    ["meta", { name: "msapplication-TileColor", content: "#ffffff" }],
    [
      "meta",
      { name: "msapplication-TileImage", content: "/mstile-150x150.png" }
    ],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    [
      "meta",
      {
        name: "Description",
        content:
          "Personal Website of Andre de Vries. Tableau Alteryx Consultant and Trainer. JavaScript, Vue.js and D3.js"
      }
    ],
    [
      "script",
      { async: true, src: "https://static.codepen.io/assets/embed/ei.js" }
    ]
  ]
};
