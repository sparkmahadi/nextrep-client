import React from 'react';

const Blog = () => {
    const articles = [
        {
            id: 1,
            question: 'What are the different ways to manage a state in a React application?',
            answer: 'There are four main types of state you need to properly manage in your React apps: Local state, Global state, Server state and URL state. Local (UI) state – Local state is data we manage in one or another component.',
            points: ['Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.useState is the first tool you should reach for to manage state in your components. It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback). Global (UI) state – Global state is data we manage across multiple components. Server state – Data that comes from an external server that must be integrated with our UI state. URL state – Data that exists on our URLs, including the pathname and query parameters.',
            
            'What do you do if you want to update a component’s state from basically anywhere in your app? You turn it into global state. To manage it, however, you should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.',

            'What happens when there is a network error? Do I really need to hit my server every time my user visits the home page if the data hasn’t changed? Do I need to add useState and useEffect in every component I want to fetch my data? To fix this, there are a couple of great libraries that make data fetching in React a breeze: SWR and React Query.',

            'URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname. If you are using React Router, you can get all the information you need using useHistory or useLocation.'
        ]
        },
        {
            id: 2,
            question: 'How does prototypical inheritance work?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error perspiciatis at unde est natus, nisi ab! Atque error odio consequatur, doloremque veritatis quibusdam consequuntur illo impedit illum nostrum ab.'
        },
        {
            id: 3,
            question: 'What is a unit test? Why should we write unit tests?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error perspiciatis at unde est natus, nisi ab! Atque error odio consequatur, doloremque veritatis quibusdam consequuntur illo impedit illum nostrum ab.'
        },
        {
            id: 4,
            question: 'React vs. Angular vs. Vue?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error perspiciatis at unde est natus, nisi ab! Atque error odio consequatur, doloremque veritatis quibusdam consequuntur illo impedit illum nostrum ab.'
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