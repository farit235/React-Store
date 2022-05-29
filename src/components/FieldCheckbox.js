import React from "react";

export function FieldCheckbox({ fieldProps: {isInvalid, error}, inputProps, label }) {
  return (
    <label htmlFor={inputProps.name + '-id'} className="checkbox">
      <input id={inputProps.name + '-id'} {...inputProps} required />
      {label}
      {isInvalid && (<span className="input-error">{error}</span>)}
    </label>
  );
}
