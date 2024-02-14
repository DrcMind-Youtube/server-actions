"use client";

import React from "react";
import { deleteTodo } from "../actions/addTodo";

type Props = {
  id: string;
};

export default function BoutonDelete({ id }: Props) {
  return (
    <button
      className="bg-red-400 text-white p-1 rounded-md"
      onClick={() => deleteTodo(id)}
    >
      Supprimer
    </button>
  );
}
