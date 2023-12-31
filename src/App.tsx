import {Routes, Route} from 'react-router-dom'
import './global.css'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import Home from './_root/pages/Home';

const App = () => {
    return (
        <main className='flex h-screen'>
            <Routes>
                <Route  element={<AuthLayout />}>
                    <Route path='/login' element={<SigninForm/>} />
                    <Route path='/register' element={<SignupForm />} />
                </Route>

                <Route path='/' index element={<Home/>} />
                
                <Route path='about' element={<h1>About</h1>} />
            </Routes>
        </main>
    )
}

export default App