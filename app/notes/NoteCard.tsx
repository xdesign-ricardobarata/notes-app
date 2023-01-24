"use client";

import { Note } from "@/typings";
import { useRouter } from "next/navigation";
import { format, parseISO } from "date-fns";

type NoteCardProps = {
  note: Note;
};

export default function NoteCard({
  note: { id, title, content, created },
}: NoteCardProps) {
  const router = useRouter();
  const deleteNote = async () => {
    await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${id}`, {
      method: "Delete",
    });

    router.refresh();
  };

  return (
    <li className="bg-yellow-200 m-2 p-2 flex flex-col justify-between items-start">
      <h2 className="text-2xl pb-2 ">{title ? title : "No title"}</h2>
      <h5>{content ? content : "No content"}</h5>

      <p className="text-sm text-gray-400">
        {format(parseISO(created), "yyyy-MM-dd HH:mm:ss")}
      </p>
      <button
        className="mt-2 p-1 text-sm text-white bg-red-500 rounded hover:bg-red-400"
        onClick={deleteNote}
      >
        Delete
      </button>
    </li>
  );
}
