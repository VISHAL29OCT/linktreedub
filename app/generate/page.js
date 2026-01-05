// "use client"
// import React, { useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import { useSearchParams } from 'next/navigation';

// import 'react-toastify/dist/ReactToastify.css'

// const Generate = () => {
//   const searchParams = useSearchParams()


//   const [links, setLinks] = useState([{ link: "", linktext: "" }])

//   // const [link, setlink] = useState("")
//   // const [linktext, setlinktext] = useState("")

//   const [handle, sethandle] = useState(searchParams.get('handle'))
//   const [pic, setpic] = useState("")
//   const [desc, setdesc] = useState("")
//   const handleChange = (index, link, linktext) => {
//     setLinks((initialLinks) => {
//       return initialLinks.map((item, i) => {
//         if (i == index) {
//           return { link, linktext }
//         }
//         else {
//           return item
//         }
//       })
//     })
//   }

//   const addLink = () => {
//     setLinks(links.concat([{ link: "", linktext: "" }]))
//   }

//   const submitLinks = async () => {

//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     const raw = JSON.stringify({
//       links: links,
//       handle: handle,
//       pic: pic ,
//       desc:desc

//     });
//     console.log(raw)
//     const requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//       // redirect: "follow"
//     };
//     const r = await fetch("http://localhost:3000/api/add", requestOptions)
//     const result = await r.json()

//     if (result.success) {
//       toast.success(result.message)
//       setLinks([{ link: "", linktext: "" }])
//       sethandle("")
//       setpic("")

//     }
//     else {
//       toast.error(result.message)

//     }
//   }

//   return (
//     <div className='bg-[#E9C0E9] min-h-screen grid grid-cols-2 '>
//       {/* <button onClick={notify}>Notify !</button> */}
//       <ToastContainer />
//       <div className='col-1 flex justify-center items-start  flex-col my-40 pl-20 '>
//         <div className="flex flex-col gap-5 my-8">
//           <h1 className='font-bold text-5xl '>Create your Linktree</h1>

//           <div className="item flex flex-col gap-4">

//             <h2 className='font-semibold text-xl'>Step 1 : Claim your handle</h2>
//             <div className="mx-4">
//               <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} className='bg-white px-4 py-1 focus:outline-pink-300 rounded-full' type="text" placeholder='Enter Handle' />
//             </div>
//           </div>
//           <div className="item flex flex-col gap-4">
//             <h2 className='font-semibold text-xl'>Step2 :Add your Links</h2>
//             {links && links.map((item, index) => {
//               return <div key={index} className="mx-4 flex gap-4 ">

//                 <input value={item.link || ""} onChange={e => { handleChange(index, e.target.value, item.linktext) }} className='bg-white px-4 py-2  focus:outline-pink-300 rounded-full' type="text" placeholder='Enter Link ' />

//                 <input value={item.linktext || ""} onChange={e => { handleChange(index, item.link, e.target.value) }} className='bg-white px-4 py-2 focus:outline-pink-300 rounded-full' type="text" placeholder='Enter Link Text' />

//               </div>
//             })}
//             <button onClick={() => addLink()} className='py-2 p-5 mx-2 self-start w-auto  bg-pink-300 text-white font-bold rounded-4xl'>+ Add Links</button>

//           </div>
//           <div className="item flex flex-col gap-4">
//             <h2 className='font-semibold text-xl'>Step3 :Add Picture And Desription</h2>
//             <div className="flex gap-4">
//             <input value={pic || ""} onChange={e => { setpic(e.target.value) }} className='bg-white px-4 py-1 focus:outline-pink-300 rounded-full  w-72' type="text" placeholder='Enter Link to Picture' />
//             <input value={desc || ""} onChange={e => { setdesc(e.target.value) }} className='bg-white px-4 py-1 focus:outline-pink-300 rounded-full  w-72' type="text" placeholder='Enter description' />
//             </div>
//             <button disabled={pic == '' || handle == '' || links[0].linktext == ''} onClick={() => { submitLinks() }} className=' disabled:bg-slate-200  disabled:cursor-not-allowed cursor-pointer py-2 p-5 mx-2 self-start w-auto  bg-pink-300 text-white font-bold rounded-4xl'>create your Linktree</button>
//           </div>
//         </div>
//       </div>




//       <div className='col-2 w-full h-screen bg-[#E9C0E9]'>
//         <img className='h-full object-contain' src="./generate.png" alt="" />
//       </div>
//     </div>
//   )
// }

// export default Generate


import { Suspense } from "react";
import GenerateClient from "./GenerateClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GenerateClient />
    </Suspense>
  );
}
