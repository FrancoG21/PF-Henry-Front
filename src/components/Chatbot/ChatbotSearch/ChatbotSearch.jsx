import React, { Component } from 'react';

class chatbotSearch extends Component {

    constructor(props) {
        super(props);
        const { steps } = this.props;
        const { seleccion, seleccionAdopt, seleccionDonation } =  steps;
        console.log('bienvenido',steps)
        this.state = {
            seleccion,
            seleccionAdopt,
            seleccionDonation,
            busqueda: "",
            nombreCurado: ""
        }
    }

    componentDidMount() {
        if (this.state.seleccion.value === "f") {
            this.setState({
                busqueda: this.state.seleccionAdopt.value,
            });
            if (this.state.seleccionAdopt.value.includes("_")) {
                var texto = this.state.seleccionAdopt.value;
                texto = texto.substring(0, texto.indexOf("_"));
                this.setState({
                    nombreCurado: texto,
                });
            } else {
                this.setState({
                    nombreCurado: this.state.seleccionAdopt.value,
                });
            }
        } else if (this.state.seleccion.value === "b") {
            this.setState({
                busqueda: this.state.seleccionDonation.value,
            });
            if (this.state.seleccionDonation.value.includes("_")) {
                var texto = this.state.seleccionDonation.value;
                texto = texto.substring(0, texto.indexOf("_"));
                this.setState({
                    nombreCurado: texto,
                });
            } else {
                this.setState({
                    nombreCurado: this.state.seleccionDonation.value,
                });
            }
        }
    }

    render() {
        return (
            <div>
                <button>{}</button>
                <p>Te invito a dar un recorrido por nuestra pagina web {this.state.nombreCurado}: </p>
                <a href={"https://www.soyhenry.com/" + this.state.busqueda} target="_blank">{this.state.nombreCurado}</a>
            </div>
        )
    }



}
export default chatbotSearch;