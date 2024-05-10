Welcome to my Investigation application! This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, be sure to clone the repository

```bash
gh repo clone domassaro/prophet

```

Install dependencies

```bash
npm install
```

Then, run the development server:

```bash
cd server
npm run dev
```

You also need to run the client in a separate terminal
```bash
cd client
npm run dev
```

# Design Decisions 

In terms of architectural and design choices, I opted to utilize Next.js alongside React for its server-side rendering capabilities and streamlined development experience. Next.js provides a robust framework for building React applications, offering features like server-side rendering, automatic code splitting, and efficient routing. By leveraging Next.js, I aimed to enhance the application's performance and SEO while simplifying development workflows.

Additionally, I chose to incorporate Next UI as the UI library for the application to further expedite development and ensure consistency in design. Next UI provides a comprehensive set of UI components, including buttons, forms, and navigation elements, that are tailored for Next.js projects. This choice allowed me to accelerate the frontend development process while maintaining a cohesive and visually appealing user interface. Also, it utilizes Tailwind which allowed to me achieve consistent styling across components and ensure responsiveness (mobile, desktop, etc.) without the need for custom CSS.

# Trade-offs

During development, one trade-off I faced was the trade-off between customization and convenience when using Next UI. While Next UI offers pre-styled components that align well with Next.js projects, it may limit the degree of customization compared to building custom components from scratch. To address this trade-off, I carefully evaluated the requirements of each UI component and balanced the need for customization with the convenience of using pre-built components. In cases where extensive customization was required, I supplemented Next UI components with custom styles to achieve the desired look and feel. Ultimately, I believed it was the best decision given the time constraints of the project.

# Challenges

One challenge was designing a user-friendly interface for sorting and filtering investigations based on various parameters. Balancing usability with functionality required careful consideration of layout, visual cues, and interaction design. To overcome this challenge, I conducted user testing and gathered feedback to iterate on the interface design, refining the sorting and filtering mechanisms for improved clarity and ease of use.

To run tests, you need to:
```bash
cd client
npm run test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
