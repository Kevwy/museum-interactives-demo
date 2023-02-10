# Museum Interactives Demo

This is a demo project of a WIP revamp of the museum's interactive displays. The goal is to create configuration files that populate the interactive displays through a chromeless browser window on touchscreen displays of a specific format.

## Assumptions
1. Homepage = main landing page
2. The orientation of the hotspots' sub pages follow the orientation of the main landing page
    - Decided to include orientations for each hotspot in the end just in case.
3. Dimensions are assumed to be 1080x1920
4. Data can be updated through a CMS to a json format.

## Design considerations
- A hidden index page with credentials for staff use to provide easy access to different interactives?
- Database to provide text and images or fully static webpages?
- Accessibility color scheme and typeset
- Start with English, then add Te reo Maori support
- UI design?

## Testing
- Most tests are done qualitatively so far.
- Don't have a touchscreen device that fits the FHD specs, maybe an emulator?


## Notes
- Difficult to test vertical layout
- UI should be responsive
- Need to test for different screen sizes
- Disable text select and scroll
- Remember to use useContext
- Create path files for interactive image
- Chromeless?

## Should do
- Check all unexpected situations that can happen on a touchscreen device, e.g. pinch-zoom
- Create an index page so that there is no need to type in the links manually

## Progress Diary
Upon receiving the assignment, my first move is to analyze and summarize the project brief to ensure a clear understanding and direction of the problem at hand. I make it a practice to create a hierarchical list of requirements and features before starting a project to act as a checklist as well as the ground zero for my brainstorms. This helps me visualize the workflow and more easily atomize the code structure for better planning of the code's design.

I noticed that the project brief has mentioned a "homepage" which had not been previously defined, therefore I assume that it refers to the "main landing page".

From my understanding of the brief, my main job is to create configuration files that can provide a consistent display format of some given content, orientated either horizontally or vertically. Currently the brief only specifies 2 tiers of pages accessible to the public: the main landing page, and the sub pages that are accessible through the hotspots on the main landing page. Since the display devices are likely fixed, I assume that the sub pages follow the orientation specified for their main landing page. I may create a hidden index page that is only accessible through a URL with credentials for staff use to provide easy access to different interactives, but that is only under consideration for now.

Now to decide on the tech stack that I will be using, I must do some research on Netlify and the desirable skills on the job application description. My experience is primarily in React and the MERN stack, but since the interactives are rather simplistic programs, it may be better off using a more lightweight stack. Looking at the way Netlify works, it provides a serverless integration with AWS lambda, therefore I may be able to use that to my advantage. Since this project requires me to build website templates, I will need a static site generator to make use of them. I decide to explore the Gatsby static site generator as its is quite often used in conjunction with Netlify. It also has a few templates to create a programs using the Netlify headless CMS. While I am not familiar with these technologies, I will need to learn and successfully implement my program with their help. In the end, I chose to start with React as my frontend, Netlify as the serverless backend and Gatsby for the static site generation.

I have stumbled across a lot of unfamiliar technologies along the way, but I have managed to get my head around it, namely the structural difference between ReactJS and Gatsby's static site generation. I will continue writing this progress journal if I manage to make time for it.

