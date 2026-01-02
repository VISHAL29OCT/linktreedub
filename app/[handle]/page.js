import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";


export default async function Page({ params }) {
  const {handle} = await params
       const client = await clientPromise;
    const db = client.db("bitree")
    const collection = db.collection("links")


    const item  = await collection.findOne({handle : handle})
    if( !item) {
      return notFound ()
    }


 const item2= {
  "_id": {
    "$oid": "69566d1b84e5e727fb0e0c28"
  },
  "links": [
    {
      "link": "https://www.facebook.com/",
      "linktext": "facebook"
    },
    {
      "link": "https://www.instagram.com/",
      "linktext": "instagram"
    }
  ],
  "handle":"vishal",
  "pic": "https://avatars.githubusercontent.com/u/77202320?v=4&size=88"
}

  
  return <div className=" flex min-h-screen bg-pink-200 justify-center items-start py-40 ">
   {item &&  <div className="photo  flex justify-center items-center flex-col  gap-4">
    <img src={item.pic} alt="" />
    <span className="font-bold text-xl">@{item.handle}</span>
    <span className="desc w-80 text-center ">{item.desc}
    </span>
    <div className="links">
        {item.links.map((item ,index)=>{
            return <Link key={index} href = {item.link}> <div className="py-4 px-2 bg-white min-w-xl flex justify-center rounded-md my-3 " >
               {item.linktext}
            </div></Link>
        })}
    </div>
   
    </div>}
  </div>
}