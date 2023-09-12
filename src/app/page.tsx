"use client";
import Image from "next/image";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Item } from "@/utils";
import "animate.css";
import Swal from "sweetalert2";

export default function Home() {
  const [tasks, setTask] = useState<Item[]>([
    { id: uuid(), task: "Crie a sua tarefa!", finished: true },
  ]);
  const [input, setInput] = useState<string>("");
  const [isOpen, setOpen] = useState<boolean>(false);

  const addNewTask = () => {
    const newList: Item = { id: uuid(), task: input, finished: false };
    setTask([...tasks, newList]);
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: "success",
      title: "Tarefa adicionada!",
    });
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
      <div className="hidden sm:flex justify-center items-center gap-5  w-full h-auto mt-10 sm:pb-4 pb-4">
        <input
          onChange={(e) => setInput(e.currentTarget.value)}
          type="text"
          className="sm:pl-6 px-5 min-w-[90%] sm:min-w-[20%] hidden sm:inline-block sm:max-w-[100%] max-w-[95%] sm:w-96 outline-none mx-auto sm:mx-0 h-14 bg-slate-700 shadow-3xl rounded-[16px]"
          style={{ color: "rgba(148, 173, 207, 1)" }}
          autoComplete="off"
          placeholder="O que tenho que fazer..."
        />
        <button
          onClick={addNewTask}
          className="cursor-pointer hidden sm:flex mx-auto sm:mx-0 bg-slate-700 shadow-4xl transition-colors hover:bg-slate-600 active:bg-slate-500 rounded-[16px] drop-shadow-lg text-white h-14 w-32 justify-center items-center"
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
      <p
        className="flex sm:hidden text-2xl font-semibold mt-8"
        style={{ color: "#94ADCF", display: isOpen ? "none" : "" }}
      >
        Lista de Tarefas
      </p>
      <div
        className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(440px,1fr))] w-full h-auto py-11 sm:py-24 px-0 sm:px-4 gap-7"
        style={{ display: isOpen ? "none" : "grid" }}
      >
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

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-slate-700 cursor-pointer rounded-full flex sm:hidden fixed right-8 bottom-14"
      >
        {!isOpen ? (
          <Image
            src="/images/add.png"
            height={60}
            width={60}
            alt="add-icon"
            className="cursor-pointer flex rounded-full shadow-4xl drop-shadow-lg sm:hidden fixed right-8 bottom-14"
            style={{ backgroundColor: "#38404B" }}
            unoptimized
          />
        ) : (
          <Image
            src="/images/exit.png"
            height={60}
            width={60}
            alt="add-icon"
            className="cursor-pointer flex rounded-full shadow-4xl drop-shadow-lg sm:hidden fixed right-8 bottom-14"
            style={{ backgroundColor: "#38404B" }}
            unoptimized
          />
        )}
      </button>
      {isOpen && (
        <div className="w-[100%] h-[100%] flex sm:hidden justify-center items-center">
          <div className="bg-slate-700 transition-all fixed top-[32%] items-center drop-shadow-lg w-[93%] h-56 flex flex-col justify-evenly sm:hidden rounded-[16px] shadow-4xl">
            <input
              onChange={(e) => setInput(e.currentTarget.value)}
              type="text"
              className="pl-6 px-3 min-w-[90%] max-w-[95%] block w-96 outline-none mx-auto h-14 bg-slate-700 shadow-3xl rounded-[16px]"
              style={{ color: "#94ADCF" }}
              autoComplete="off"
              placeholder="O que tenho que fazer..."
            />
            <button
              onClick={addNewTask}
              className="cursor-pointer sm:hidden flex outline-none bg-slate-700 active:bg-slate-600 shadow-4xl rounded-[16px] drop-shadow-lg h-14 w-[95%] justify-center items-center"
              style={{ color: "#94ADCF" }}
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
        </div>
      )}
    </div>
  );
}
