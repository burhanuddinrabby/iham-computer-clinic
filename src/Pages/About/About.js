import React from 'react';

const About = () => {
    return (
        <div>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/wSPtRVD/IMG-20220516-WA0008-01.jpg" class="lg:max-w-md rounded-lg shadow-2xl" alt='' />
                    <div className='bg-base-300 text-black p-10 rounded-xl'>
                        <h1 className='text-4xl font-bold mb-2'>I'm Burhan Uddin</h1>
                        <p className='text-md '>I'm a student. I passed Higher Secondary level in 2021. <br />
                            I'm preparing myself for university admission. <br />
                            My goal is to become CEO of Google or Microsoft. -_- <br />
                            I love to learn new things and I'm always curious about unknown things <br />
                        </p>
                        <h2 className='text-xl font-bold'>Technologies that I know are :</h2>
                        <p className='font-bold'>HTML, CSS, JS, Bootstrap, Tailwind, React, Firebase, Node, Mongo, Rest API, Express, Python etc.</p>
                        <p className='text-lg'>Here are few of my works: </p>
                        <ul className='text-sm'>
                            <li className='ml-2'>
                                <span className="font-bold">Iham-Bike-Bazar :</span>
                                <a href='https://iham-bike-bazar.web.app/' className='text-blue-700 hover:text-blue-500'> Live Site</a> |
                                <a href="https://github.com/burhanuddinrabby/iham-bike-bazar" className='text-blue-700 hover:text-blue-500'> Github Client</a> |
                                <a href="https://github.com/burhanuddinrabby/iham-bike-bazar-server" className='text-blue-700 hover:text-blue-500'> Github Server</a>
                                <p>
                                    <span className='font-bold'>Overview:</span>
                                    <ul className='list-disc ml-5'>
                                        <li>It is a full stack web project, including user authentication.</li>
                                        <li>A site for buying bikes. User can increase or decrease quantity</li>
                                        <li>User can delete an item or can add an item to his/her account</li>
                                    </ul>
                                    <span className="font-bold">Tools: React.js, Node.js, Express.js, MongoDB, Firebase, Bootstrap, HTML, CSS and others.</span>
                                </p>
                            </li>
                            <li className='ml-2 mt-5'>
                                <span className="font-bold">Iham-Photography :</span>
                                <a href='https://iham-photography.web.app/' className='text-blue-700 hover:text-blue-500'> Live Site</a> |
                                <a href="https://github.com/burhanuddinrabby/iham-photography" className='text-blue-700 hover:text-blue-500'> Github Client</a> |
                                <p>
                                    <span className='font-bold'>Overview:</span>
                                    <ul className='list-disc ml-5'>
                                        <li>About an independent photographer and his services</li>
                                        <li>User must have to log in to visit checkout page</li>
                                        <li>Implemented user authentication.</li>
                                    </ul>
                                    <span className="font-bold">Tools: React.js, React Router, Firebase, React Firebase Hooks, React Bootstrap, HTML, CSS</span>
                                </p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;