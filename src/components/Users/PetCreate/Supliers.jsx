import React, { useState } from "react";

import Creatable from 'react-select/creatable';


export default function Supliers({ breeds, callbackBreeds }) {
  const [selectedSupplier, setSelectedSupplier] = useState();

  const handleSelectChange = ({ value }) => {
    console.log(value);
    setSelectedSupplier(value);
    callbackBreeds(value);
  };

  return (
    <div>
      <p>breed: {selectedSupplier}</p>
      <Creatable
      isClearable
        defaultValue={{ label: "Choose one breed or add new one" }}
        options={breeds.map(br => ({label:br, value:br}))}
        onChange={handleSelectChange}
        onInputChange={console.log('onInputChange')}
      />
    </div>
  );
}


// Documentacion de como se hace pero esta en componente de clase --> https://react-select.com/creatable