import Image from "next/image";
import TodoList from "./components/TodoList";
import FormTodo from "./components/FormTodo";

export default function Home() {
  return (
    <main className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-96 bg-white p-3 shadow-md rounded-md min-h-80">
        <h1 className="text-2xl font-bold text-center">
          ToDo App avec Server actions
        </h1>

        <FormTodo />

        <TodoList />
      </div>
    </main>
  );
}
