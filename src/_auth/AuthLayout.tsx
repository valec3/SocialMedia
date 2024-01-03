import { Outlet,Navigate } from "react-router-dom"

const AuthLayout = () => {
    const isAuth = false
    return (
        <>
            {
                isAuth
                ? <Navigate to='/' />
                : <section className="flex w-full">
                    <div className="flex flex-1 justify-center items-center flex-col py-10">
                        <Outlet />
                    </div>
                    <img
                        // src="./assets/images/side-img.svg"
                        src="https://images8.alphacoders.com/890/890840.png"
                        alt="Imagen logo preview"
                        className="hidden lg:block h-screen w-1/2 object-cover bg-no-repeat"
                    />        
                </section> 
            }
        </>
    )
}

export default AuthLayout