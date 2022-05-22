import React from 'react';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        console.log(user);
    }

    return (
        <div>
            <Header></Header>

            {/* -------------- */}

            <div className="flex h-screen justify-center items-center">
                <div className="card w-96 bg-slate-50 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold text-black">Login</h2>

                        <div className="divider text-black font-bold text-sm">OR</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-outline btn-success text-lg"
                        >Continue With Google</button>
                    </div>
                </div>
            </div>


            {/* ------------------ */}

            <Footer></Footer>
        </div>
    );
};

export default Login;