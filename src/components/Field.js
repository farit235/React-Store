import React from "react";
import { createField, FieldType } from "@altiore/form";
import { FieldCheckbox } from './FieldCheckbox';

function Field({ fieldProps: {isInvalid, error}, inputProps, label }) {
  return (
    <label htmlFor={inputProps.name + '-id'}>
      <span className="input-hint">{label}</span>
      <input id={inputProps.name + '-id'} {...inputProps} required />
      {isInvalid && <span className="input-error">{error}</span>}
    </label>
  );
}

export default {
  Bool: createField(FieldType.BOOLEAN, FieldCheckbox),
  Email: createField(FieldType.EMAIL, Field),
  Text: createField(FieldType.TEXT, Field),
};
