
import reactimg from "../../public/React-icon.svg.png"
import pyhtonimg from "../../public/pythonlogo2.png"
import typescriptimg from '../../public/typescriptlogo2.png'
import nextlogo from "../../public/nextlogo.png"
interface Blogtype{
    img: string
    title:string;
    slug:string;
    description:string;

}


    // make an array of object having type blogtypes
    export  const blogdata:Blogtype[]=[
        {
            img:nextlogo.src,
            title:"Nextjs",
            slug:"Nextjs",
            description:"Next.js is a popular framework for building server-side rendered React applications. It provides a seamless development experience with built-in features like automatic routing, server-side rendering, and static site generation. With Next.js, developers can easily create fast, scalable, and SEO-friendly web applications."
        },
        {
            img:reactimg.src,
            title:"React",
            slug:"React",
            description:"React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the user interface in response to changes in data. React's virtual DOM and component-based architecture make it a powerful tool for building interactive and dynamic web applications."
        },
        {
            img:pyhtonimg.src,
            title:"Python",
            slug:"Python",
            description:"Python is a popular high-level programming language known for its simplicity and readability. It has a large and active community, making it easy to find support and resources. Python is widely used for web development, data analysis, machine learning, and automation tasks."
        },
        {
            img:typescriptimg.src,
            title:"Typescript",
            slug:"Typescript",
            description:"TypeScript is a strongly typed superset of JavaScript that adds static typing to the language. It provides better tooling, error detection, and code organization, making it easier to build and maintain large-scale applications. TypeScript is widely adopted in the JavaScript ecosystem and is supported by popular frameworks like Angular and React."
}
    ]
    