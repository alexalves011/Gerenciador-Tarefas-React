import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "Estudar React Js",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Fazer Compras",
      description: "Fazer compra do mês",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar para prova",
      description: "Assistir vídeos das aulas",
      isCompleted: false,
    },
  ]);

  // Marca ou desmarca uma task como concluída
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(newTasks);
  }

  // Remove uma task
  const onDeleteTaskClick = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  // Adiciona uma nova task
  function onAddTaskSubimit(title, description) {
    const newTask = {
      // Gera um id único com base no maior id existente
      id: tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
      title: title,
      description: description,
      isCompleted: false,
    };

    // Atualiza o estado de forma correta (spread operator)
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciar tarefas
        </h1>

        {/* Componente para adicionar novas tarefas */}
        <AddTasks onAddTaskSubimit={onAddTaskSubimit} />

        {/* Lista de tarefas */}
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
