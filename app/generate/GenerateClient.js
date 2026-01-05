"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSearchParams } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

export default function GenerateClient() {
  const searchParams = useSearchParams();

  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [handle, sethandle] = useState(searchParams.get("handle"));
  const [pic, setpic] = useState("");
  const [desc, setdesc] = useState("");

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks) =>
      initialLinks.map((item, i) =>
        i === index ? { link, linktext } : item
      )
    );
  };

  const addLink = () => {
    setLinks([...links, { link: "", linktext: "" }]);
  };

  const submitLinks = async () => {
    const r = await fetch("/api/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        links,
        handle,
        pic,
        desc,
      }),
    });

    const result = await r.json();

    if (result.success) {
      toast.success(result.message);
      setLinks([{ link: "", linktext: "" }]);
      sethandle("");
      setpic("");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="bg-[#E9C0E9] min-h-screen grid grid-cols-2">
      <ToastContainer />

      <div className="col-1 flex justify-center items-start flex-col my-40 pl-20">
        <div className="flex flex-col gap-5 my-8">
          <h1 className="font-bold text-5xl">Create your Linktree</h1>

          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-xl">Step 1 : Claim your handle</h2>
            <input
              value={handle || ""}
              onChange={(e) => sethandle(e.target.value)}
              className="bg-white px-4 py-1 rounded-full"
              placeholder="Enter Handle"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-xl">Step2 : Add your Links</h2>

            {links.map((item, index) => (
              <div key={index} className="flex gap-4">
                <input
                  value={item.link}
                  onChange={(e) =>
                    handleChange(index, e.target.value, item.linktext)
                  }
                  className="bg-white px-4 py-2 rounded-full"
                  placeholder="Enter Link"
                />
                <input
                  value={item.linktext}
                  onChange={(e) =>
                    handleChange(index, item.link, e.target.value)
                  }
                  className="bg-white px-4 py-2 rounded-full"
                  placeholder="Enter Link Text"
                />
              </div>
            ))}

            <button onClick={addLink} className="bg-pink-300 px-5 py-2 rounded">
              + Add Links
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-xl">
              Step3 : Add Picture And Description
            </h2>

            <div className="flex gap-4">
              <input
                value={pic}
                onChange={(e) => setpic(e.target.value)}
                className="bg-white px-4 py-1 rounded-full"
                placeholder="Image URL"
              />
              <input
                value={desc}
                onChange={(e) => setdesc(e.target.value)}
                className="bg-white px-4 py-1 rounded-full"
                placeholder="Description"
              />
            </div>

            <button
              disabled={!pic || !handle || !links[0].linktext}
              onClick={submitLinks}
              className="bg-pink-300 px-5 py-2 rounded disabled:opacity-50"
            >
              Create your Linktree
            </button>
          </div>
        </div>
      </div>

      <div className="col-2">
        <img className="h-full object-contain" src="/generate.png" alt="" />
      </div>
    </div>
  );
}
