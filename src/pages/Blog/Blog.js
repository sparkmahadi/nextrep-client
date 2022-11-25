import React from 'react';

const Blog = () => {
    const articles = [
        {
            id: 1,
            question: 'What are the different ways to manage a state in a React application?',
            answer: 'There are four main types of state you need to properly manage in your React apps: Local state, Global state, Server state and URL state.'
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
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Blog;