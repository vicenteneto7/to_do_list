"use client";
import Image from "next/image";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Item } from "@/utils";

export default function Home() {
  const [tasks, setTask] = useState<Item[]>([]);
  const [input, setInput] = useState<string>("");

  const addNewTask = () => {
    const newList: Item = { id: uuid(), task: input, finished: false };
    setTask([...tasks, newList]);
  };

  const deleteTask = (id: string) => {
    const newList = tasks.filter((task) => task.id !== id);
    setTask(newList);
  };

  const HandleToggle = ( id : string) => {
    
    const newList = tasks.map(task => (
      task.id == id ? { ...task, finished: !task.finished } : task
    ))
    setTask(newList)
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[33.813rem] h-[31.125rem] rounded-[5px] bg-slate-400">
        <div className="flex justify-evenly py-8">
          <input
            onChange={(e) => setInput(e.currentTarget.value)}
            type="text"
            className="pl-3 w-[21.375rem] h-10 outline-none border-gray-400"
            placeholder="O que tenho que fazer..."
          />
          <button
            onClick={addNewTask}
            className="w-32 h-10 rounded bg-purple-600 text-white text-base cursor-pointer"
          >
            Adicionar
          </button>
        </div>
        <div className="flex flex-col items-center justify-center px-5 mt-7 gap-3">
          {tasks.map((task) => (
            <div
              id="div-bg"
              className="flex flex-row justify-between w-[31rem] h-[3.75rem] py-[1.30rem] px-5"
              style={{background: task.finished ? '#e8ff8b' : '#7e7979'}}
              key={task.id}
            >
              <Image
                onClick={() => HandleToggle(task.id)}
                src="/images/Vector-1.png"
                height={13}
                width={13}
                alt="finished"
                className="cursor-pointer"
              />
              <p>{task.task}</p>
              <Image
                onClick={() => deleteTask(task.id)}
                src="/images/trash-red.png"
                height={13}
                width={13}
                alt="trash"
                className="cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
