import React from "react";
import { prisma } from "../libs/prisma";
import BoutonDelete from "./BoutonDelete";

type Props = {};

export default async function TodoList({}: Props) {
  const todos = await prisma.todo.findMany({
    orderBy: {
      createAt: "desc",
    },
  });
  return (
    <div className="flex flex-col gap-3 mt-5">
      {todos.map((todo) => (
        <div className="flex gap-3 items-center justify-between p-2 border-b border-gray-300">
          <div className="flex gap-3 items-center">
            <input type="checkbox" id={todo.id} name={todo.titre} />
            <label htmlFor={todo.titre}>{todo.titre}</label>
          </div>
          <div>
            <BoutonDelete id={todo.id} />
          </div>
        </div>
      ))}

      {todos.length === 0 && (
        <p className="text-center text-gray-400">Aucune tâche à afficher</p>
      )}
    </div>
  );
}
