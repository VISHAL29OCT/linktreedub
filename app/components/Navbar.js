import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-white w-[90vw] flex justify-between fixed top-10 right-[5vw] rounded-full p-5 px-7   '>
            <div className='logo flex gap-20 items-center'>
               <Link href={"/"}><img className='h-7 ' src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="" ></img>
</Link>
                <ul className='flex gap-10'>
                    <Link href = "/"><li>products</li></Link>
                    <Link href = "/"><li>Templates</li></Link>
                    <Link href = "/"><li>Marketplace</li></Link>
                    <Link href = "/"><li>Learn</li></Link>
                    <Link href = "/"><li>Pricing</li></Link>
                </ul>
            </div>


            <div className='flex gap-2'>
            <Link href="login" >  <button className="login bg-gray-400 text-white p-4 rounded-lg hover:bg-slate-600">login</button></Link> 
             <Link href="signup"><button className="signup bg-gray-950 text-white  p-4 rounded-full  hover:bg-slate-600">Sighup for free</button></Link>
            </div>


        </nav>
    )
}

export default Navbar