import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import PetCard from "../../components/Users/PetCard/PetCard";
import Paginate from "../../components/Users/Paginate/Paginate";
import Searchbar from "../../components/Users/Searchbar/Searchbar";
import PetFilters from "../../components/Users/PetFilters/PetFilters";
import { getPets } from "../../redux/actions/index";
import {
  BackgroundPets,
  Grid,
  Container,
  TitleAdopt,
  ImageSpace,
  ContainerTop,
  ContainerFilters,
} from "./StyledToAdopt";

export default function Pets() {
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
      <ContainerTop>
        <Searchbar />
      </ContainerTop>

      <ContainerFilters>
        <PetFilters />
      </ContainerFilters>

      <Container>
        <ImageSpace>
          <Grid>
            {!pets ? (
              <p>Please choose other option</p>
            ) : pets[0] === "the search returned no results" ? (
              <p>the search returned no results</p>
            ) : (
              pets?.map((p) => {
                return (
                  <PetCard key={p.id} id={p.id} name={p.name} image={p.image} />
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