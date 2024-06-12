import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";


const Navber = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)

    }, [theme])

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('synthwave')
        } else {
            setTheme('light')
        }
    }
    // console.log(theme);

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }


    const links = <>
        <li className="text-xl font-bold transition-colors text-black rounded-lg  duration-200 ease-in-out hover:text-secondary lg:ml-20 "><NavLink className={({ isActive }) =>
            isActive ? 'text-primary font-bold ' : 'font-bold'} to="/">Home</NavLink></li>
        <li className="text-xl font-bold transition-colors text-black rounded-lg  ease-in-out  hover:bg-bg-error hover:text-secondary "><NavLink to="/petlisting">PetListing</NavLink></li>

        <li className="text-xl font-bold transition-colors text-black rounded-lg  duration-200 ease-in-out  hover:bg-bg-error hover:text-secondary "><NavLink to="/donationcampaign">DonationCampaigns</NavLink></li>

        <li className="text-xl font-bold transition-colors text-black rounded-lg duration-200 ease-in-out  hover:bg-bg-error hover:text-secondary lg:ml-20"><NavLink to="/gallary">Gallary</NavLink></li>

    </>

    return (
        <div className="container mx-auto">
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-slate-200 mt-2 hover:bg-white text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu-sm gap-3 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
                        <Link to='/'>
                            <div className=" lg:flex items-center gap-1">
                                <img className="w-12 h-12 rounded-full" src="https://i.ibb.co/JvgY3xh/Pet-Adoption.jpg" alt="" />
                                <a className="text-3xl font-extrabold text-primary p-1 rounded-lg">Pet <span className="text-secondary">Care</span></a>
                            </div>
                        </Link>
                    </span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal gap-3 px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end gap-1">
                    <div className='dropdown dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div title={user?.displayName} className='w-10 rounded-full'>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src={user?.photoURL}
                                />

                            </div>

                        </div>
                        <ul

                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 text-black rounded-box w-[110px]'
                        >
                            <li className="text-xl font-bold transition-colors text-black rounded-lg  duration-200 ease-in-out hover:bg-bg-error hover:text-secondary">
                                <NavLink to="/dashboard/cart">
                                    Dashboard
                                </NavLink></li>
                        </ul>
                    </div>
                    <label className='cursor-pointer grid place-items-center'>
                        <input
                            onChange={handleToggle}
                            type='checkbox'
                            className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
                        />
                        <svg
                            className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
                            xmlns='http://www.w3.org/2000/svg'
                            width='14'
                            height='14'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <circle cx='12' cy='12' r='5' />
                            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
                        </svg>
                        <svg
                            className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
                            xmlns='http://www.w3.org/2000/svg'
                            width='14'
                            height='14'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
                        </svg>
                    </label>

                    {
                        user ?
                            <button onClick={handleLogOut} href="#_" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-purple-500 absolute"></span>
                                <span className="relative p-2 transition-all ease-out bg-white text-black rounded-md group-hover:bg-opacity-0 duration-400">
                                    <span className="relative text-black">LogOut</span>
                                </span>
                            </button>
                            :
                            <Link to="/login">
                                <button href="#_" className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-orange-500 text-black rounded-lg hover:bg-error group">
                                    <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-black text-white rounded-full"></span>
                                    <span className="relative w-full text-left transition-colors text-white duration-200 ease-in-out group-hover:text-white">Login</span>
                                </button>
                            </Link>

                    }

                </div>

            </div>
        </div >
    );
};

export default Navber;