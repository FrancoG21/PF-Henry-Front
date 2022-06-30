import React, { useState } from "react";

import Creatable from "react-select/creatable";

export default function Supliers({ options }) {
  const [selectedSupplier, setSelectedSupplier] = useState();

  const handleSelectChange = ({ value }) => {
    console.log(value);
    setSelectedSupplier(value);
    callbackBreeds(value);
  };

  return (
    <div>
      <Creatable
        isClearable
        defaultValue={{ label: "Selecciona tu respuesta" }}
        options={options.map((br) => ({ label: br, value: br }))}
        onChange={handleSelectChange}
        onInputChange={console.log("onInputChange")}
      />
    </div>
  );
}
