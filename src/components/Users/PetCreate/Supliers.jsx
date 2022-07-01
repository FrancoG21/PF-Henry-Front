import React, { useState } from "react";
import Creatable from "react-select/creatable";
import {
  useFormikContext,
  useField,
} from "formik";

export default function Supliers({ breeds, ...props }) {

  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);


  return (
    <div>
      <Creatable
        {...field}
        {...props}
        isClearable
        defaultValue={{ label: "Raza de la mascota" }}
        options={breeds.map((br) => ({ label: br, value: br }))}
        onChange={(val)=>{setFieldValue(field.name, val)}}
      />
    </div>
  );
}


// Documentacion de como se hace pero esta en componente de clase --> https://react-select.com/creatable