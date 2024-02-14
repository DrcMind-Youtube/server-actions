"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../libs/prisma";

export const addTodo = async (formData: FormData) => {
  const todo = formData.get("todoItem");
  await prisma.todo.create({
    data: {
      titre: todo as string,
      status: "A faire",
    },
  });

  revalidatePath("/");
};

export const deleteTodo = async (id: string) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
};
