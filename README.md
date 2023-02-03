# Museum Interactives Demo

This is a demo project of a WIP revamp of the museum's interactive displays. The goal is to create configuration files that populate the interactive displays through a chromeless browser window on touchscreen displays of a specific format.

## Assumptions
1. Homepage = main landing page
2. The orientation of the hotspots' sub pages follow the orientation of the main landing page

## Design considerations
- A hidden index page with credentials for staff use to provide easy access to different interactives
- Database to provide text and images or fully static webpages?

## Progress Diary
Upon receiving the assignment, my first move is to analyze and summarize the project brief to ensure a clear understanding and direction of the problem at hand. I make it a practice to create a hierarchical list of requirements and features before starting a project to act as a checklist as well as the ground zero for my brainstorms. This helps me visualize the workflow and more easily atomize the code structure for better planning of the code's design.

I noticed that the project brief has mentioned a "homepage" which had not been previously defined, therefore I assume that it refers to the "main landing page".

From my understanding of the brief, my main job is to create configuration files that can provide a consistent display format of some given content, orientated either horizontally or vertically. Currently the brief only specifies 2 tiers of pages accessible to the public: the main landing page, and the sub pages that are accessible through the hotspots on the main landing page. Since the display devices are likely fixed, I assume that the sub pages follow the orientation specified for their main landing page. I may create a hidden index page that is only accessible through a URL with credentials for staff use to provide easy access to different interactives, but that is only under consideration for now.

Now to decide on the tech stack that I will be using, I must do some research on Netlify and the desirable skills on the job application description. My experience is primarily in React and the MERN stack, but since the interactives are rather simplistic programs, it may be better off using a more lightweight stack. Looking at the way Netlify works, it provides a serverless integration with AWS lambda, therefore I may be able to use that to my advantage. Since this project requires me to build website templates, I will need a static site generator to make use of them. I decide to explore the Gatsby static site generator as its is quite often used in conjunction with Netlify. It also has a few templates to create a programs using the Netlify headless CMS. While I am not familiar with these technologies, I will need to learn and successfully implement my program with their help. In the end, I chose to start with React as my frontend, Netlify as the serverless backend and Gatsby for the static site generation. I will still need to figure out whether I want a database to store the images and texts but I decide to defer that decision for later.

