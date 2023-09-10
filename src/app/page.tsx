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

  const HandleToggle = (id: string) => {
    const newList = tasks.map((task) =>
      task.id == id ? { ...task, finished: !task.finished } : task
    );
    setTask(newList);
  };

  return (
    <div className="w-full h-full flex justify-center">
      <div className="flex justify-evenly w-[36.125rem] h-14 mt-10">
        <input
          id="input"
          onChange={(e) => setInput(e.currentTarget.value)}
          type="text"
          className="pl-9 w-[36.125rem] outline-none h-14 bg-slate-700 shadow-3xl rounded-[16px]"
          placeholder="O que tenho que fazer..."
        />
        <button onClick={addNewTask} className="cursor-pointer flex items-center relative right-8">
          <Image src="/images/arrow.png" height={17} width={17} alt="" unoptimized />
        </button>
        
      </div>
      <div className="flex flex-col items-center justify-center px-5 mt-7 gap-3">
        {tasks.map((task) => (
          <div
            className="flex items-center flex-row justify-between w-[28.063rem] h-14 px-6 bg-slate-700 shadow-4xl rounded-[16px] drop-shadow-filter"
            style={{ background: task.finished ? "#f6ffd2" : "rgb(51 65 85)", fill: '#38404B'}}
            key={task.id}
          >
            <Image
              onClick={() => HandleToggle(task.id)}
              src="/images/concluded.png"
              height={12}
              width={15}
              alt="finished"
              className="cursor-pointer"
              unoptimized
            />
            <p className="flex flex-rap">{task.task}</p>
            <Image
              onClick={() => deleteTask(task.id)}
              src="/images/trash.png"
              height={11}
              width={15}
              alt="trash"
              className="cursor-pointer"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
