# SearchPilot technical challenge — Bartosz Dębicki

Solution was prepared using ReactJS, TypeScript, TailwindCss. Communication with api is handled with react-query.
Some component has been build with Radix UI primitives. For building Vite has been used.

## Motivation
Initially, the client part was prepared with using create-react-app with RactJS, prop-types, and without typescript.
I decided to move to some more modern technologies like TypeScript, and Tailwind because I would like to show some skills in the tech stack that is used in the SearchPilot codebase on day-to-day basis.

### Commands
`npm run dev` - run dev server with hot reload <br>
`npm run test` - run tests <br>
`npm run test:ui` - run ui interface for tests <br>
`npm run lint` - run linter <br>
`npm run typecheck` - run type checks <br>

### What can be added or improved:
- unit tests for components and hooks
- integration tests for basic paths (for example get data from api and show items, adding new product, edit product)
- adding / editing product properties style, colour, materials, neckline — i follow task description and ignore them
- storybook for presentation of components/ui
