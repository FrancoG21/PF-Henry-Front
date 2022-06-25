import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../components/Users/Card/Card";
import Paginate from "../../components/Users/Paginate/Paginate";
import Searchbar from "../../components/Users/Searchbar/Searchbar";
import {
  getPets,
  filterPet
} from "../../redux/actions/index";
import {
  BackgroundPets,
  Grid,
  Container,
  TitleAdopt,
  ButtonCreate,
  ButtonLink,
  ImageSpace,
  ContainerTop,
  Filters,
  ButtonReset,
  ContainerFilters
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

  const handleFilterPetType = (e) => {
    e.preventDefault();
    dispatch(filterPet(e.target.value));
  };
  const handleResetButton = (e) => {
    e.preventDefault();
  };

  return (
    <BackgroundPets>
      <TitleAdopt>Pets</TitleAdopt>

      <ContainerTop>
        <Searchbar />
      </ContainerTop>


      <ContainerFilters>
          <ButtonReset onClick={(e) => handleResetButton(e)}>Reset</ButtonReset>
          <Filters
            defaultValue={"default"}
            onChange={(e) => handleFilterPetType(e)}
          >
            <option value="default" hidden>
              Type
            </option>
            <option value="dog">dog</option>
            <option value="cat">cat</option>
          </Filters>
          <Filters
            defaultValue={"default"}
            onChange={(e) => handleFilterPetGender(e)}
          >
            <option value="default" hidden>
              Gender
            </option>
            <option value="male">male</option>
            <option value="female">female</option>
          </Filters>
          <Filters
            defaultValue={"default"}
            onChange={(e) => handleFilterPetSize(e)}
          >
            <option value="default" hidden>
              Size
            </option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="big">big</option>
          </Filters>
          <Filters
            defaultValue={"default"}
            onChange={(e) => handleFilterPetState(e)}
          >
          <option value="default" hidden>
            State
          </option>
          <option value="adopt">adopt</option>
          <option value="adopted">adopted</option>
          <option value="lost">lost</option>
          <option value="transit">transit</option>
        </Filters>
        <Filters
          defaultValue={"default"}
          onChange={(e) => handleFilterPetOrder(e)}
        >
          <option value="default" hidden>
            Order
          </option>
          <option value="a-z">a-z</option>
          <option value="z-a">z-a</option>
        </Filters>
        <ButtonLink to={"/petcreate"}>
          <ButtonCreate>Load Pet</ButtonCreate>
        </ButtonLink>
    </ContainerFilters>


    <Container>
      <ImageSpace>
        <Grid>
          {pets[0] === "pet not found" ? (
            <p>no existe el pet</p>
              ) : !pets ? (
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
