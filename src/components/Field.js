import React from "react";
import { createField, FieldType } from "@altiore/form";

function Field({ name, error, type, isInvalid }) {
  return (
    <>
      <input name={name} type={type} required />
      {isInvalid && <span>{error}</span>}
    </>
  );
}

export default {
  String: createField(FieldType.EMAIL, Field),
  String: createField(FieldType.TEXT, Field),
};
