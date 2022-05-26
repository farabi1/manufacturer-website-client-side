import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <div className="flex justify-center">
                <div className="grid content-center	 grid-cols-1 gap-4 mx-12 ">
                    <div class="card w-96 bg-base-100 shadow-xl card-bordered border-white">
                        <div class="card-body">
                            <h2 class="card-title">Question : How will you improve the performance of a React Application?</h2>
                            <p>Answer : <br></br>We can optimize react application by following some simple steps:<br></br>

                                1.We Need to keep the component state locally when necessary<br></br>

                                2.Format the react components to avoid unnecessary re-renders<br></br>

                                3.We can Split the Code using dynamic import() method<br></br>

                                4.we Can check whether we ccan see Windowing or list virtualization in React<br></br>

                                5. We can optimize image to load faster</p><br></br>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl card-bordered border-white">
                        <div class="card-body">
                            <h2 class="card-title">Question : What are the different ways to manage a state in a React application?</h2>
                            <p>Answer : <br></br>There are four main types of statethat need toproperly manage in React apps:<br></br>

                                1.Local state- Local state is data we manage in one or another component.<br></br>

                                2.Global state- Global state is data we manage across multiple components.<br></br>
                                Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.<br></br>

                                3.Server state- Data that comes from an external server that must be integrated with our UI state.<br></br>

                                4.URL state-Data that exists on our URLs, including the pathname and query parameters.</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl card-bordered border-white">
                        <div class="card-body">
                            <h2 class="card-title">Question : How does prototypical inheritance work?</h2>
                            <p>Answer :<br></br>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.In order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.<br></br>
                                It is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes.</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl card-bordered border-white">
                        <div class="card-body">
                            <h2 class="card-title">Question : Why you do not set the state directly in React.</h2>
                            <p>Answer ::<br></br> If a dog chews shoes whose shoes does he choose?We do not update the state directly because of the following reasons:<br></br>

                                If we update it directly, calling the setState() afterward may just replace the update We made.<br></br>
                                When We directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.<br></br>
                                We might lose control of the state across all components.</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl card-bordered border-white">
                        <div class="card-body">
                            <h2 class="card-title">Question : You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                            <p>Answer :<br></br>
                                If we want to find the product of elements of an array.These are the simple steps to follow:<br></br>

                                1. First we create an empty variable for storing product<br></br>
                                2. Initialize variable with 1.<br></br>
                                3. With  a loop traverse through each element multiply each element to product.<br></br>
                                4.Finally Print the product.</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl card-bordered border-white">
                        <div class="card-body">
                            <h2 class="card-title">Question : What is a unit test? Why should write unit tests?</h2>
                            <p>Answer : <br></br>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application meets its design and requirements also if it behaves as intended.<br></br>
                                The goal of unit testing is to isolate each part of the program and show that the individual parts are correct.A unit test provides a strict, written contract that the piece of code must satisfy. As a result, it affords several benefits.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;