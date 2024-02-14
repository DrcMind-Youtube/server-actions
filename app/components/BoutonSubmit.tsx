"use client";

import React from "react";
import { useFormStatus } from "react-dom";

type Props = {};

export default function BoutonSubmit({}: Props) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white rounded p-2 disabled:bg-gray-300 disabled:text-gray-500 disabled:opacity-30"
      disabled={pending}
    >
      {pending ? "En cours..." : "Ajouter"}
    </button>
  );
}
