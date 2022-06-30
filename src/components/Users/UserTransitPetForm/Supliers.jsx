import React, { useState } from "react";
import Creatable from "react-select/creatable";
import {
  useFormikContext,
  useField,
} from "formik";

export default function Supliers({ options, ...props }) {

  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

 

  return (
    <div>
      <Creatable
        {...field}
        {...props}
        isClearable
        defaultValue={{ label: "Selecciona tu respuesta" }}
        options={options.map((br) => ({ label: br, value: br }))}
        onChange={(val)=>{setFieldValue(field.name, val)}}
      />
    </div>
  );
}


