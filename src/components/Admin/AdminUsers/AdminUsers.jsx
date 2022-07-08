import React from "react";
import AdminDonation from "./AdminDonation";
import AdminTable from "./AdminTable";
import './estilos.css'


export default function AdminUsers() {

    return (
        <>
        <div>
            <div className="listContainer">
                <div className="listTitle">Users</div>
                <AdminTable/>
                <AdminDonation/>
            </div>
        </div>
        </>
    )
}