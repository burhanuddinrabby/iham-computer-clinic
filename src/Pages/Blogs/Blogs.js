import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='text-[#ece6e6]'>
            <div className='blog-container'>
                <div className='blog  mt-6'>
                    <h2>How will you improve the performance of react Application?</h2>
                    <p>Keeping component state local where necessary.
                        Memoizing React components to prevent unnecessary re-renders.
                        Code-splitting in React using dynamic import().
                        Windowing or list virtualization in React.
                        Lazy loading images in React</p>
                </div>

                <div className="blog">
                    <h2>What are different ways to manage a state in a react application?</h2>
                    <p>There are 4 types of state in a react application. <br />
                        1.  Local state. <br />
                        2.  Global state.<br />
                        3.  Server state.<br />
                        4.  URL state.<br /></p>
                </div>

                <div className='blog'>
                    <h2>How does prototypical inheritance work?</h2>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.
                    </p>
                </div>
                <div className='blog'>
                    <h2>Why you dont state directly in React ?For example, If You have const [products,setProducts]=useState.
                        Why do you not set products =[...] instead , you use the setProducts.?</h2>
                    <p>One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made.When you directly update the state, it does not change this..</p>
                </div>
                <div className='blog'>
                    <h2>You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p>1) If you need the index of the found element in the array, use findIndex() . <br />
                        2) If you need to find the index of a value, use Array.prototype.indexOf() <br />
                        3) If you need to find if a value exists in an array, use Array.prototype.includes().</p>
                </div>
                <div className='blog'>
                    <h2>What is a unit test?Why should write unit tests?</h2>
                    <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended.In procedural programming, a unit could be an entire module , but it is more commonly an individual function or procedure..</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;