export const validate = (input) => {
    const errors = {};
    if (!input.pet.name) {
        errors.pet.name = "Nombre de la mascota es requerido";
    } else if (!/^[a-zA-Z]{3,10}$/.test(input.pet.name)) {
        errors.pet.name = "El nombre debe contener de 3 a 10 caracteres y unicamente deben ser letras";
    }
    if (!input.user.name()) {
        errors.user.name = "Nombre del adoptante es requerido";
    } else if (!/^[a-zA-Z]{3,10}$/.test(input.user.name)) {
        errors.user.name = "El nombre debe contener de 3 a 10 caracteres y unicamente deben ser letras";
    }
    if (!input.edad) {
        errors.edad = "Edad es requerida";
    } else if (!/^[0-9]{1,2}$/.test(input.edad)) {
        errors.edad = "Debe ser un valor de 0 a 99 y unicamente escribir numeros";
    }
    if (!input.direccion) {
        errors.direccion = "Direccion es requerida";
    } else if (input.direccion !== "calle" && input.direccion !== "carrera" && input.direccion !== "Transversal") {
        errors.direccion = "La direccion no es valida";
    }
    if (!input.barrio) {
        errors.barrio = "Barrio is requerido";
    } else if (!/^[a-zA-Z]{3,10}$/.test(input.barrio)) {
        errors.barrio = "El barrio no es valido";
    }
    if (!input.ciudad) {
        errors.ciudad = "Ciudad is requerida";
    } else if (!/^[a-zA-Z]{3,10}$/.test(input.ciudad)) {
        errors.ciudad = "Lo escrito no se reconoce como ciudad"
    }
    if (!input.provincia) {
        errors.provincia = "Provincia is requerida";
    } else if (!/^[a-zA-Z]{3,10}$/.test(input.provincia)) {
        errors.provincia = "Esto no se reconoce como provincia"
    }
    if (!input.actualPlacePostalCode) {
        errors.actualPlacePostalCode = "Codigo Postal is requerido";
    } else if (!/^[0-99]{1,2}$/.test(actualPlacePostalCode)) {
        errors.actualPlacePostalCode = "Debe ser un valor de 0 a 99 y unicamente escribir numeros"
    }
    if (!input.telefono) {
        errors.telefono = "Telefono is requerido";
    } else if (!/^[0-99]{1,2}$/.test(input.telefono)) {
        errors.telefono = "Debe ser un valor de 0 a 99 y unicamente escribir numeros";
    }
    if (!input.otherPetsInfo) {
        errors.otherPetsInfo = "Cantidad de personas viven en la casa is required";
    } else if (!/^[1-9]$/.test(input.otherPetsInfo)) {
        errors.otherPetsInfo = "item no valido"
    }
    if (!input.otherPetsCastration) {
        errors.otherPetsCastration = "otherPetsCastration is required";
    } else if (!/^[1-5]$/.test(input.otherPetsCastration)) {
        errors.otherPetsCastration = "item no valido"
    }
    if (!input.otherPetsVacunation) {
        errors.otherPetsVacunation = "campo requerido";
    } else if (!/^[1-5]$/.test(otherPetsVacunation)) {
        errors.otherPetsVacunation = "item no valido";
    }
}
if (!input.adoptedPetPlace) {
    errors.adoptedPetPlace = "Campo requerido";
} else if (!/^[1-5]$/.test(adoptedPetPlace)) {
    errors.adoptedPetPlace = "item no valido";
}
if (!input.openSpace) {
    errors.openSpace = "Este campo es requerido";
} else if (!/^[0-9]{1,2}$/.test(openSpace)) {
    errors.openSpace = "The openSpace can only contain values from 0 to 99. And only numbers are allowed"
}
if (!input.rental) {
    errors.rental = "Item requerido";
} else if (!/^[0-99]{1,2}$/.test(input.provincia)) {
    errors.provincia = "The provincia can only contain values from 0 to 99. And only numbers are allowed"
}

// if (!input.img) {
//     errors.img = "Image required.";
// }
// if (input.types.length === 0) {
//     errors.types = "At least one type is required";
// }

return errors;
