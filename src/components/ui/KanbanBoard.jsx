import React , {useMemo, useState} from 'react';

import {
    DndContext,
    DragOverlay,
    PointerSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";

import {SortableContext, arrayMove} from "@dnd-kit/sortable"

const KanbanBoard = ({state}) => {

    const defaultCols = 
    state?.state?.columns?.map((col) => ({
        id: col?.id,
        title: col?.title,
    })) || [];

    const deafultTasks = state?.state?.tasks?.map((task)=>({
        id: task?.id,
        columnId: task?.columnId,
        content: task?.content,
    })) || [];

    const [columns, setColumns] = useState(defaultCols);
    const [tasks, setTasks] = useState(deafultTasks);
    const columnId = useMemo(()=> columns.map((col)=> col.id),[columns]);
    const [activeColumn, setActiveColumn] = useState(null);
    const [activeTask, setActiveTask] = useState(null);

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: {distance : 10}}),
    );

    return (
        <div className="mt-5 min-h-screen w-72 text-white">
          <DndContext
            sensors={sensors}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDragOver={onDragOver}
          >
            <div className="m-auto flex gap-4">
              <div className="flex gap-4">
                <SortableContext items={columnsId}>
                  {columns.map((col) => (
                    <ColumnContainer
                      key={col.id}
                      column={col}
                      deleteColumn={deleteColumn}
                      updateColumn={updateColumn}
                      createTask={createTask}
                      deleteTask={deleteTask}
                      updateTask={updateTask}
                      tasks={tasks.filter((task) => task.columnId === col.id)}
                    />
                  ))}
                </SortableContext>
              </div>
              <button
                onClick={() => createNewColumn()}
                className="flex h-[60px] w-[350px] min-w-[350px] cursor-pointer gap-2 rounded-lg border-2 border-columnBackgroundColor bg-mainBackgroundColor p-4 ring-green-500 hover:ring-2"
              >
                <IconPlus />
                Add Column
              </button>
            </div>
            {createPortal(
              <DragOverlay>
                {activeColumn && (
                  <ColumnContainer
                    column={activeColumn}
                    deleteColumn={deleteColumn}
                    updateColumn={updateColumn}
                    createTask={createTask}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                    tasks={tasks.filter(
                      (task) => task.columnId === activeColumn.id,
                    )}
                  />
                )}
                {activeTask && (
                  <TaskCard
                    task={activeTask}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                  />
                )}
              </DragOverlay>,
              document.body,
            )}
          </DndContext>
        </div>
      );
}

export default KanbanBoard;
