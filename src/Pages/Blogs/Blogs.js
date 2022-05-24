import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-1 gap-4 mx-12 justify-center	">
                <div class="card w-96 bg-base-100 shadow-xl card-bordered border-white">
                    <div class="card-body">
                        <h2 class="card-title">Question : How will you improve the performance of a React Application?</h2>
                        <p>Answer : If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl card-bordered border-white">
                    <div class="card-body">
                        <h2 class="card-title">Question : What are the different ways to manage a state in a React application?</h2>
                        <p>Answer : If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl card-bordered border-white">
                    <div class="card-body">
                        <h2 class="card-title">Question : How does prototypical inheritance work?</h2>
                        <p>Answer : If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl card-bordered border-white">
                    <div class="card-body">
                        <h2 class="card-title">Question : Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                        <p>Answer : If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl card-bordered border-white">
                    <div class="card-body">
                        <h2 class="card-title">Question : You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                        <p>Answer : If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl card-bordered border-white">
                    <div class="card-body">
                        <h2 class="card-title">Question : What is a unit test? Why should write unit tests?</h2>
                        <p>Answer : If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;