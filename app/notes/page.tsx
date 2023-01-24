import CreateNote from "./CreateNote";
import NoteCard from "./NoteCard";
import { Note } from "@/typings";

import "../globals.css";

async function getNotes() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as Note[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div className="m-2">
      <ul className="flex flex-row flex-wrap">
        {notes?.map((note) => {
          if (!note.id) return;
          return <NoteCard key={note.id} note={note} />;
        })}
      </ul>

      <CreateNote />
    </div>
  );
}
