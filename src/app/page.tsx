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
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex justify-center items-center gap-5  w-full h-auto mt-10 sm:pb-4 pb-4">
        <input
          onChange={(e) => setInput(e.currentTarget.value)}
          type="text"
          className="sm:pl-9 px-5 min-w-[90%] sm:min-w-[20%] sm:max-w-[100%] max-w-[95%] sm:w-96 outline-none mx-auto sm:mx-0 h-14 bg-slate-700 shadow-3xl rounded-[16px]"
          style={{ color: "rgba(148, 173, 207, 1)" }}
          autoComplete="off"
          placeholder="O que tenho que fazer..."
        />
        <button
          onClick={addNewTask}
          className="cursor-pointer hidden sm:flex mx-auto sm:mx-0 bg-slate-700 shadow-4xl rounded-[16px] drop-shadow-lg text-white h-14 w-32 justify-center items-center"
        >
          Adicionar
          <Image
            src="/images/arrow.png"
            height={17}
            width={17}
            alt=""
            unoptimized
          />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(440px,1fr))] w-full h-auto py-11 sm:py-24 px-0 sm:px-4 gap-7">
        {tasks.map((task) => (
          <div
            className="flex items-center flex-row justify-between min-w-[90%] sm:min-w-[20%] sm:max-w-[100%] max-w-[95%] w-80 sm:w-[28.063rem] mx-auto h-14 px-[1.125rem] sm:px-6 bg-slate-700 shadow-4xl rounded-[16px] drop-shadow-lg"
            style={{
              background: task.finished ? "#454b2f" : "rgb(51 65 85)",
              fill: "#38404B",
            }}
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
            <p
              style={{
                textDecoration: task.finished ? "line-through" : "none",
                color: "rgba(148, 173, 207, 1)",
              }}
              className="flex flex-rap"
            >
              {task.task}
            </p>
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
      <Image
        src="/images/add.png"
        height={60}
        width={60}
        alt="add-icon"
        className="cursor-pointer flex sm:hidden fixed right-[8%] bottom-[6%]"
        unoptimized
      />
    </div>
  );
}
