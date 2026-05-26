import React from "react";

const FormField = ({
  label,
  type = "input",
  register,
  name,
  options = [],
  errors="",
  placeholder = "",
}) => {
    console.log("errors",errors)
  return (
    <div className="form-group">
      <label>{label}</label>
      {/* SELECT */}

      {type === "select" && (
        <select
          {...register(name)}
        >
          <option value="">
            Select
          </option>

          {options.map(
            (option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            )
          )}
        </select>
      )}
      {errors?.[name] && (
        <p className="error">
          {
            errors[name]
              ?.message
          }
        </p>
      )}
    </div>
  );
};

export default React.memo(FormField);