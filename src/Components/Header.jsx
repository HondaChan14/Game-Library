
import { useEffect, useContext } from 'react'
import logo from './../assets/Images/logo.png'
import { HiOutlineMagnifyingGlass, HiMoon, HiSun } from 'react-icons/hi2'
import { ThemeContext } from '../Context/ThemeContext'

function Header() {
    const { theme, setTheme } = useContext(ThemeContext)

    useEffect(() => {
        console.log("Theme", theme)
    }, [theme])

    return (
        <div className='flex items-center p-3'>
            <img src={logo} width={60} height={60}/>
            <div className='flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full'>
                <HiOutlineMagnifyingGlass />
                <input type="text" placeholder='Search Games' className='bg-transparent outline-none px-2'/>
            </div>
            <div>
                { theme == 'light' ? 
                    <HiMoon  
                        className='text-[35px] bg-slate-200 text-black p-1 rounded-full'
                        onClick={() => {setTheme('dark'); localStorage.setItem('theme', 'dark')}}
                    /> : 
                    <HiSun 
                        className='text-[35px] bg-slate-200 text-black p-1 rounded-full'
                        onClick={() => {setTheme('light'); localStorage.setItem('theme', 'light')}}
                    /> }
            </div>
        </div>
    )
}

export default Header