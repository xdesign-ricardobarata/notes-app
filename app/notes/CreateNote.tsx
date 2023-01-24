"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "path";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const createNote = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    setContent("");
    setTitle("");

    router.refresh();
  };

  return (
    <div className="block m-2 bg-white max-w-sm">
      <form onSubmit={createNote}>
        <h3>Create a new Note</h3>
        <div className="form-group mb-6">
          <label
            htmlFor="inputTitle"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="inputTitle"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group mb-6 flex flex-col">
          <label
            htmlFor="inputContent"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Content
          </label>
          <textarea
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="inputContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Create note
        </button>
      </form>
    </div>
  );
}
