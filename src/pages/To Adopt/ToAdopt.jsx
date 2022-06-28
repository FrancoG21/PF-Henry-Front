import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import Card from "../../components/Users/Card/Card";
import Paginate from "../../components/Users/Paginate/Paginate";
import Searchbar from "../../components/Users/Searchbar/Searchbar";
import PetFilters from "../../components/Users/PetFilters/PetFilters";
import { getPets } from "../../redux/actions/index";
import {
  BackgroundPets,
  Grid,
  Container,
  TitleAdopt,
  ButtonCreate,
  ButtonLink,
  ImageSpace,
  ContainerTop,
} from "./StyledToAdopt";

export default function ToAdopt() {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets);
  const petsAmount = useSelector((state) => state.petsAmount);



  useEffect(() => {
    dispatch(getPets());
  }, [dispatch]);

  const paginateFunction = (page) => {
    dispatch(getPets(page));
  };



  return (
    <BackgroundPets>
      <TitleAdopt>Pets</TitleAdopt>

      <ContainerTop>
        <Searchbar />
        <PetFilters />
        <ButtonLink to={"/petcreate"}>
          <ButtonCreate>Cargar un pet</ButtonCreate>
        </ButtonLink>
      </ContainerTop>

      <Container>
        <ImageSpace>
          <Grid>
            {pets[0] === "pet not found" ? (
              <p>no existe el pet</p>
            ) :
              pets[0] === "the search returned no results" ? (
                <p>the search returned no results</p>
              ) :
                !pets ? (
                  <p>Loading</p>
                ) : (
                  pets?.map((p) => {
                    return (
                      <Card key={p.id} id={p.id} name={p.name} image={p.image} />
                    );
                  })
                )}
          </Grid>
        </ImageSpace>
      </Container>
      <Paginate
        total={petsAmount}
        petsPerPage={6}
        paginateFunction={paginateFunction}
      />
    </BackgroundPets>
  );
}
