export interface Project extends ProjectBase {
    image?: string;
    links?: Record<string, string>;
    more?: Project[];
    role?: string;
    stars?: number;
}

export interface ProjectBase {
    description: string;
    name?: string;
    owner?: string;
    repo?: string;
    url?: string;
}

export interface ProjectCategory {
    description: string;
    projects: Project[];
}

export const projectCategories: Record<string, ProjectCategory> = {
    "Cool Projects": {
        description: "Some of the cool projects I've built that I'm particularly proud of:",
        projects: [
            {
                description: "A Cross-platform Terminal Emulator built using Electron",
                image: "https://github.com/katungi/terminex/raw/main/icons/terminex-dark-square.png",
                name: "Terminex",
                owner: "katungi",
                repo: "terminex",
                role: "Creator",
                stars: 30
            },
            {
                description: "Google Solution Semi-finalist. A machine learning app that detects eye diseases. Made using Tensorflow and Flutter",
                image: "https://eyero.netlify.app/assets/images/Eyero.png",
                name: "Eyero",
                repo: "eyero",
                role: "Creator",
                url: "https://eyero.netlify.app/"
            },
            {
                description: "Pasta is an open source clipboard manager for Mac (currently).",
                image: "https://pasta-clip.vercel.app/icon.png",
                name: "Pasta",
                owner: "katungi",
                repo: "pasta",
                role: "Creator",
                stars: 16
            },

        ]
    },
    "Dev Tooling": {
        description: "I work on assorted projects in the JavaScript/TypeScript ecosystem that make it easier to write high quality applications.",
        projects: [
            {
                description: "A library for uploading files to Azure Blob Storage",
                image: "https://github.com/katungi/expo-azure-blob-storage/blob/main/assets/logo.png?raw=true",
                owner: "katungi",
                repo: "expo-azure-blob-storage",
                role: "Creator",
                stars: 8
            },
        ]
    },
    "Mad Experiments": {
        description: "These projects I do because I think they're fascinating and/or fun, if not particularly useful:",
        projects: [
            {
                description: "A tiny Deno 🦕 Svelte inspired compiler for a similar syntax framework. This is just for practice btw :-)",
                image: "https://www.joshuakgoldberg.com/images/fullscreenmario.png",
                name: "Scale Compiler",
                owner: "katungi",
                repo: "scale-framework",
                role: "Creator",
                stars: 3
            },
            {
                description: "A modern web framework for building web apps, similar to Next.js",
                image: "https://avatars.githubusercontent.com/u/173069034?s=400&u=34fb8a11cade54abbce4f482abd9968055db80cb&v=4",
                name: "Urban JS",
                owner: "katungi",
                repo: "urban-js",
                role: "Creator",
                stars: 1,
                url: "https://github.com/Urban-js/urban.js"
            },
            {
                description: "A simple implementation of a js runtime inspired by Deno and Elsa",
                image: "https://www.joshuakgoldberg.com/images/fullscreenmario.png",
                name: "Halo Runtime",
                owner: "katungi",
                repo: "edon",
                role: "Creator",
                stars: 1,
                url: "https://github.com/katungi/edon"
            }
        ]
    },

    "Random": {
        description: "Random projects I've worked on",
        projects: [
            {
                description: "Built a simple app to track how long it has been since my friend Nato beat me in a game of fifa",
                name: "How many days since",
                owner: "katungi",
                repo: "how-many-days",
                role: "Creator",
                url: "https://how-many-days-gamma.vercel.app"
            },
            {
                description: "A portfolio website for my friend",
                name: "Njeri's Portfolio",
                owner: "katungi",
                role: "Creator",
                url: "https://njeri.vercel.app/"
            }
        ]
    },
    "Work Projects": {
        description: "I have a full time job , I primarily work on the web and mobile sphere, some cool stuff I've worked on",
        projects: [
            {
                description: "Built an app to be a companion for people with OCD (currently in the app store)",
                image: "https://res.cloudinary.com/dankatdennis2758/image/upload/v1752221548/k7yqzcbqqv56lnisjtys.png",
                links: {
                    Site: "https://www.choicefulocd.com/",
                },
                name: "Choiceful",
                owner: "Be Choiceful",
                role: "Creator",
                url: "https://www.choicefulocd.com/"
            },
            {
                description: "I helped build and port the Fashion TV website to a modern stack using Next.js v11",
                links: {
                    Site: "https://fashiontv.com",
                },
                name: "Fashion TV",
                owner: "katungi",
                role: "Contributor",
                url: "https://fashiontv.com"
            },
            {
                description: "Jumba Go - Mobile commerce app",
                image: "https://play-lh.googleusercontent.com/Gt3ZR4lHFAwJdzRR0DjrGtgkGgNev71xN3xy_70AgGixztfHdxkXkvpbvKmJFbnrd-ml=w240-h480-rw",
                links: {
                    "Google Play": "https://play.google.com/store/apps/details?id=com.jumba.gomobile",
                    Site: "https://jumba.com",
                },
                name: "Jumba Go",
                owner: "jumba.com",
                role: "Contributor",
                url: "https://jumba.com"
            },
            {
                description: "Uptrends.ai - AI-powered social media analytics platform",
                image: "https://cdn.prod.website-files.com/652d109ee2cdc35ce4f4d4c4/66953824028e25da32dee624_Uptrends%20Wordmark%20White-p-500.png",
                links: {
                    Site: "https://uptrends.ai",
                },
                name: "Uptrends.ai",
                owner: "Babbl Labs",
                role: "Creator",
                url: "https://uptrends.ai"
            },
            {
                description: "Babbl Labs company website",
                image: "https://cdn.prod.website-files.com/67ae2122069004f6ffae38b6/67deff6c623b0b1d666b35ae_Asset%202%404x-8-p-500.png",
                links: {
                    Site: "https://babbl-labs.com",
                },
                name: "Babbl Labs",
                owner: "Babbl Labs",
                role: "Creator",
                url: "https://babbl-labs.com"
            },
            {
                description: "Checkout my LinkedIn for more work stuff",
                links: {
                    LinkedIn: "https://www.linkedin.com/in/katungi/"
                },
                name: "LinkedIn Profile",
                owner: "katungi",
                role: "Professional Profile",
                url: "https://www.linkedin.com/in/katungi/"
            }
        ]
    },
}; 