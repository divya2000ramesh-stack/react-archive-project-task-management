// Main Dashboard Component
// TODO: Implement the main container component

import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskForm from '../components/taskForm/TaskForm';
import TaskList from './TaskList';
import FilterBar from './FilterBar';
import { closeTaskForm, openTaskForm } from "../store/actions/uiActions";

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

const TaskDashboard = () => {
  const dispatch = useDispatch();

  // TODO: Connect to Redux state using useSelector
    const taskForm = useSelector((state) =>state.ui.taskForm);
  
  // TODO: Fetch initial data on component mount
  
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

  const handleEditTask = (taskId) => {
    // TODO: Dispatch open form action for edit mode
  };

  const handleDeleteTask = (taskId) => {
    // TODO: Show confirmation and dispatch delete action
  };

  const handleFormSubmit = (formData) => {
    // TODO: Dispatch create or update action based on form mode
  };

  const handleFormClose =
  //TODO: Dispatch close form action and clear localStorage
  useCallback(() => {
    dispatch(
      closeTaskForm()
    );
  }, [dispatch]);

  const handleFiltersChange = (newFilters) => {
    // TODO: Dispatch filter change action
  };

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
      {/* {errors.tasks && (
        <div className="error-banner">
          Error: {errors.tasks}
        </div>
      )} */}

      <FilterBar
        // filters={filters}
        // projects={projects}
        // users={users}
        onFiltersChange={handleFiltersChange}
      />

      <TaskList
        // tasks={tasks}
        // loading={loading.tasks}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />

      <TaskForm
        isOpen={taskForm.isOpen}
        mode={taskForm.mode}
        // initialData={taskForm.taskId ? tasks.find(t => t.id === taskForm.taskId) : null}
        // users={users}
        // projects={projects}
        // loading={loading.tasks}
        onSubmit={handleFormSubmit}
        onClose={handleFormClose}
      />
    </div>
  );
};

export default TaskDashboard;