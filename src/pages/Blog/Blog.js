import React from 'react';

const Blog = () => {
    const articles = [
        {
            id: 1,
            question: 'What are the different ways to manage a state in a React application?',
            answer: 'There are four main types of state we need to properly manage in our  React apps: Local state, Global state, Server state and URL state.',
            points: ['Local (UI) state – Local state is data we manage in one or another component. useState is the first tool we should reach for to manage state in our  components. It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).',

            'Global (UI) state – Global state is data we manage across multiple components. What do we do if we want to update a component’s state from basically anywhere in our  app? we turn it into global state. To manage it, however, we should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.',

            'Server state – Data that comes from an external server that must be integrated with our UI state. What happens when there is a network error? Do I really need to hit my server every time my user visits the home page if the data hasn’t changed? Do I need to add useState and useEffect in every component I want to fetch my data? To fix this, there are a couple of great libraries that make data fetching in React a breeze: SWR and React Query.',

            'URL state – Data that exists on our URLs, including the pathname and query parameters. URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname. If we are use React Router, we can get all the information we need by using useHistory or useLocation.'
        ]
        },
        {
            id: 2,
            question: 'How does prototypical inheritance work?',
            answer: 'Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.',
            points: ["Let’s walk through an example of prototypical inheritance you’re likely familiar with from grade school: all squares are rectangles, but not all rectangles are squares. If we think of this as a JS program, we could say that the rectangle is a prototype to the square: the square inherits all properties of a rectangle (i.e. four-sides and closed), while also adding a new feature (i.e. all sides are the same length)",

            "We could not, however, construct this same concept using the square as a prototype, because there are properties of a square that do not apply to rectangles (i.e. all sides are the same length).",
            
            "We can see how prototypal inheritance works on the basis of specifying categories within a group from least specific to most – from rectangle to square. In code, this concept can sometimes be lost in the syntax. If you find this happens, speak the relations between objects and listen to where you draw distinctions. If you hear, “all ___ are , but…not all ___ are”, that is where a new prototypical relationship should be added.",
            "Prototypal inheritance uses the concept of prototype chaining. Let’s explore that concept. Every object created contains [[Prototype]], which points either to another object or null."
        ]
        },
        {
            id: 3,
            question: 'What is a unit test? Why should we write unit tests?',
            answer: 'A unit test verifies the behavior of a unit of software in the system. It verifies whether a small and isolated piece of the codebase called “unit” behaves as the developer intended. Usually, developers write unit tests first, then write the software code. This approach is known as test-driven development (TDD). In TDD, the requirements are turned into specific test cases, then the software is improved to pass the new tests. In the case of unit tests, it allows for the modification of code without affecting the functionality of other units or the software in its entirety. This makes the job easier for developers as the bugs are easy to locate at this stage, which saves time and money. Now, the benifits of using unit tests are described below -',
            points: [
                "Unit tests help to find and fix bugs quickly and easily.",
                "Unit tests contribute to higher code quality.",
                "Unit tests contribute to better application architecture.",
                "Unit tests act as documentation."
            ]
        },
        {
            id: 4,
            question: 'React vs. Angular vs. Vue?',
            answer: 'It is a very tough question to answer with 100% ensurance.  But a basic comparison among these different technologies is described below-',
            points:[
                "Angular is a front-end framework with lots of components, services, and tools. On Angular’s site, you can see that they define Angular as: The modern web developer’s platform. It is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube.",
                
                "React is considered a UI library. They define themselves as: A JavaScript library for building user interfaces. Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React.",
                
                "Last but not least, Vue.js is, according to its site: A progressive JavaScript framework. Vue.js is developed and led by Evan You, but also it counts on a huge open-source community.",
                
                "These three frameworks have several things in common, such as each follows a component-based architecture and allows creating UI features quickly."
            ]
        }

    ]
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center'>
                {
                    articles.map(article =>
                        <div key={article.id} className="card bg-base-100 shadow-xl mx-auto">
                            <div className="card-body">
                                <h2 className="card-title">Question: {article.question}</h2>
                                <p><span className='font-bold'>Answer:</span> {article.answer}</p>
                                {
                                    article?.points ? 
                                    <ul className='list-disc list-inside'>
                                        {
                                            article.points.map((point, idx)=> <li key={idx}>{point}</li>)
                                        }
                                    </ul>
                                    :
                                    undefined
                                }
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Blog;