// Dynamic Task Form Component
// TODO: Implement complex form with React Hook Form

import React from 'react';
import * as yup from "yup";
import { TASK_TYPES, PRIORITIES, BUG_SEVERITIES } from '../../api/mockApi';
import { assignee, priority } from "../../../constants";
import { useForm, useFieldArray, useWatch } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import FormField from './FormField';

// TODO: Implement TaskForm component
// Requirements:
// 1. Dynamic fields based on task type
// 2. Form validation with custom rules
// 3. Field arrays for subtasks and acceptance criteria
// 4. Integration with Redux for data and state
// 5. Auto-save functionality
// 6. File attachment simulation
const schema = yup.object({
  title: yup
    .string()
    .required("Title is required")
    .min(
      3,
      "Minimum 3 characters"
    ),

  description: yup
    .string()
    .max(
      500,
      "Maximum 500 characters"
    ),

  taskType: yup
    .string()
    .required(),

  priority: yup
    .string()
    .required(),
});
const defaultValues = {
  title: "",
  description: "",
  taskType: "Bug",
  priority: "Medium",
  dueDate: "",

  projectId: "",
  assigneeId: "",

  severity: "",
  stepsToReproduce: "",

  businessValue: "",

  currentBehavior: "",
  proposedBehavior: "",

  expectedOutcomes: "",

  subtasks: [],

  acceptanceCriteria: [],
  researchQuestions: [],
};


const TaskForm = ({
  isOpen,
  mode, // 'create' or 'edit'
  initialData = null,
  onSubmit,
  onClose,
  users = [],
  projects = [],
  loading = false
}) => {

  // TODO: Setup React Hook Form with useForm hook
  // ==========================
  // React Hook Form
  // ==========================

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,

    formState: {
      errors,
      isValid,
    },
  } = useForm({
    defaultValues: initialData || {},
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  // TODO: Configure defaultValues, validation mode, and form options

  // TODO: Setup useFieldArray for subtasks and acceptance criteria
  const {
    fields: subtaskFields,
    append: appendSubtask,
    remove: removeSubtask,
  } = useFieldArray({
    control,
    name: "subtasks",
  });

  const {
    fields:
    acceptanceCriteriaFields,

    append:
    appendAcceptanceCriteria,

    remove:
    removeAcceptanceCriteria,
  } = useFieldArray({
    control,
    name: "acceptanceCriteria",
  });

  const {
    fields:
    researchQuestionFields,

    append:
    appendResearchQuestion,

    remove:
    removeResearchQuestion,
  } = useFieldArray({
    control,
    name: "researchQuestions",
  });

  // ==========================
  // Watch Fields
  // ==========================

  const taskType = useWatch({
    control,
    name: "taskType",
  });



  // TODO: Watch task type and project changes for dynamic behavior

  // TODO: Filter available users based on selected project

  // TODO: Implement auto-save functionality to localStorage

  // TODO: Restore form data from localStorage on mount



  // TODO: Render dynamic fields based on task type
  const renderDynamicFields = () => {
    // Switch based on task type to show different fields
    // Bug: severity, stepsToReproduce
    // Feature: businessValue, acceptanceCriteria (array)
    // Enhancement: currentBehavior, proposedBehavior
    // Research: researchQuestions (array), expectedOutcomes

    return <div>TODO: Implement dynamic fields</div>;
  };

  if (!isOpen) return null;

  return (
    <div className="task-form-overlay">
      <div className="task-form">
        <div className="task-form-header">
          <h2>{mode === 'create' ? 'Create New Task' : 'Edit Task'}</h2>
          <button onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* TODO: Implement form fields */}

          {/* Basic Fields */}
          <div className="form-group">
            {/* <label>Title *</label> */}
            <label>Title *</label>
            <input
              {...register("title")}
            />
            <p className="error">
              {errors.title?.message}
            </p>
            {/* TODO: Add title input with validation */}
          </div>

          <div className="form-group">
            {/* <label>Task Type *</label> */}
            {/* TODO: Add task type dropdown */}
            <label>Task Type *</label>
            {/* TODO: Add task type dropdown */}
            <select
              {...register(
                "taskType"
              )}
            >
              <option value="Bug">
                Bug
              </option>

              <option value="Feature">
                Feature
              </option>

              <option value="Enhancement">
                Enhancement
              </option>

              <option value="Research">
                Research
              </option>
            </select>

          </div>

          <div className="form-group">
            {/* <label>Priority *</label> */}
            {/* TODO: Add priority dropdown */}
            <FormField
              label="Priority *"
              name="priority"
              type="select"
              // options={[
              //   "Low",
              //   "Medium",
              //   "High",
              //   "Critical",
              // ]}
              options={priority.map(
                (priority) => ({
                  label: priority.label,
                  value: priority.value,
                })
              )}
              register={register}
              errors={errors}
            />
          </div>

          <div className="form-group">
            {/* <label>Project</label> */}
            {/* TODO: Add project dropdown */}
            <FormField
              label="Project"
              name="projectId"
              type="select"
              options={projects.map(
                (project) => ({
                  label: project.name,
                  value: project.id,
                })
              )}
              register={register}
              errors={errors}
            />

          </div>

          <div className="form-group">
            {/* <label>Assignee</label> */}
            {/* TODO: Add assignee dropdown (filtered by project) */}
            <FormField
              label="Assignee"
              name="assigneeId"
              type="select"
              // options={[
              //   "John Doe",
              //   "Jane Smith",
              //   "Mike Johnson",
              //   "Sarah wilson",
              // ]}
              options={assignee.map(
                (user) => ({
                  label: user.name,
                  value: user.id,
                })
              )}
              register={register}
              errors={errors}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            {/* TODO: Add description textarea */}
            <textarea
              {...register(
                "description"
              )}
            />
            <p className="error">
              {
                errors
                  .description
                  ?.message
              }
            </p>
          </div>

          <div className="form-group">
            {/* <label>Due Date</label> */}
            {/* TODO: Add date input */}
            <input
              type="date"
              {...register(
                "dueDate"
              )}
            />
          </div>

          {/* Dynamic Fields */}
          {/* here we can do the renderDynaicField as swicth case like case1 :bug,... rathere we can go with common  component better approach */}
          {renderDynamicFields()}


          {/* Subtasks */}
          <div className="form-group">
            {/* <label>Subtasks</label> */}
            {/* TODO: Implement field array for subtasks */}
            <div className="form-group">

              <label>
                Subtasks
              </label>

              {subtaskFields.map(
                (
                  field,
                  index
                ) => (
                  <div
                    key={field.id}
                    className="array-field-row"
                  >
                    <input
                      placeholder="Subtask"

                      {...register(
                        `subtasks.${index}.title`
                      )}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        removeSubtask(
                          index
                        )
                      }
                    >
                      Remove
                    </button>
                  </div>
                )
              )}

              <button
                type="button"
                onClick={() =>
                  appendSubtask(
                    {
                      title: "",
                      completed: false,
                    }
                  )
                }
              >
                + Add Subtask
              </button>
            </div>

          </div>

          {/* Form Actions */}
          <div className="form-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" disabled={loading}>
              {loading ? (<><span className="spinner" />Saving...</>) : (
                mode === "create"
                  ? "Create Task"
                  : "Update Task"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;