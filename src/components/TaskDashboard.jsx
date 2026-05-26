// Main Dashboard Component
// TODO: Implement the main container component

import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskForm from './taskForm/TaskForm';
import TaskList from './TaskList';
import FilterBar from './FilterBar';

// TODO: Import selectors and actions
// import { 
//   selectAllTasks,
//   selectFilteredTasks,
//   selectTaskFormState,
//   selectUsers,
//   selectProjects,
//   selectFilters,
//   selectLoading,
//   selectErrors
// } from '../store/selectors';

// import {
//   fetchTasksRequest,
//   createTaskRequest,
//   updateTaskRequest,
//   deleteTaskRequest,
//   openTaskForm,
//   closeTaskForm,
//   setFilters
// } from '../store/actions';
import { closeTaskForm, openTaskForm } from "../store/actions/uiActions";
import { createTask, deleteTask, fetchTasks, updateTask } from '../store/actions/taskActions';

import TaskCard from './TaskCard';
import { fetchProjectsRequest } from '../store/actions/projectAction';

const TaskDashboard = () => {
  const dispatch = useDispatch();

  // TODO: Connect to Redux state using useSelector
  const taskForm = useSelector((state) => state.ui.taskForm);

const loading = useSelector((state) =>state.ui.loading.tasks);

// console.log("loading123",loading)
const error = useSelector((state) =>state.ui.errors.tasks);

const projects =
  useSelector((state) => {

    const projectState =
      state.entities.projects;

    return projectState.allIds.map(
      (id) =>
        projectState.byId[id]
    );
  });

  const tasks = useSelector(
  (state) =>
    state.entities.tasks.allIds.map(
      (id) =>
        state.entities.tasks.byId[
          id
        ]
    )
);
  const selectedTask =
  taskForm.taskId
    ? tasks.find(
        (task) =>
          task.id ===
          taskForm.taskId
      )
    : null;

  // TODO: Fetch initial data on component mount
  useEffect(() => {
  dispatch(fetchTasks());
  dispatch(
    fetchProjectsRequest()
  );
}, [dispatch]);


  // TODO: Refetch tasks when filters change

  // TODO: Implement event handlers

  const handleCreateTask =
   // TODO: Dispatch open form action for create mode
  useCallback(() => {
    dispatch(
      openTaskForm(
        "create"
      )
    );
  }, [dispatch]);

  const handleEditTask =
  useCallback(
    (taskId) => {
      dispatch(
        openTaskForm(
          "edit",
          taskId
        )
      );
    },
    [dispatch]
  );

  const handleDeleteTask =
  useCallback(
    (taskId) => {
      dispatch(
        deleteTask(taskId)
      );
    },
    [dispatch]
  );

const handleFormSubmit =
  useCallback(
  
    (data) => {
      console.log("data11",data)
      // EDIT
      if (
        taskForm.mode ===
        "edit"
      ) {
        dispatch(
          updateTask(
            taskForm.taskId,
            data
          )
        );
      }

      // CREATE
      else {
        dispatch(
          createTask(data)
        );
      }
    },

    [dispatch, taskForm]
  );

  const handleFormClose =
  //TODO: Dispatch close form action and clear localStorage
  useCallback(() => {
    dispatch(
      closeTaskForm()
    );
  }, [dispatch]);

  const handleFiltersChange = useCallback((newFilters) => {
      dispatch(
        fetchTasks(
          newFilters
        )
      );

    },
    [dispatch]
  );
  

// console.log("err55",error)

  return (
    <div className="task-dashboard">
      <header className="dashboard-header">
        <h1>Task Management Dashboard</h1>
        <button 
          className="create-task-btn"
          onClick={handleCreateTask}
        >
          + Create Task
        </button>
      </header>

      {/* TODO: Show error messages */}
      {error && (
        <div className="error-banner">
          Error: {error}
        </div>
      )}

      <FilterBar
        // filters={filters}
        projects={projects}
        // users={users}
        onFiltersChange={handleFiltersChange}
      />

      <TaskList
        tasks={tasks}
        loading={loading}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />

      <TaskForm
         isOpen={taskForm.isOpen}
        mode={taskForm.mode}
         initialData={selectedTask}
        // users={users}
        projects={projects}
        loading={loading}
        onSubmit={handleFormSubmit}
        onClose={handleFormClose}
      />

     <div className="task-grid">

</div>
    </div>
    
  );
};

export default TaskDashboard;