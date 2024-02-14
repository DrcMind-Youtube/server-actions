"use client";

import React, { useRef } from "react";
import { addTodo } from "../actions/addTodo";
import BoutonSubmit from "./BoutonSubmit";

type Props = {};

export default function FormTodo({}: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      className="flex gap-3 mt-3 items-center justify-between"
      action={async (data) => {
        addTodo(data);
        formRef.current?.reset();
      }}
      ref={formRef}
    >
      <input
        type="text"
        id="todoItem"
        name="todoItem"
        required
        className="border border-gray-300 rounded p-2 w-full"
      />

      <BoutonSubmit />
    </form>
  );
}
