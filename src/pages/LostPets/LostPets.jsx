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
} from "./StyledLostPets";

export default function LostPets() {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets);
  const petsAmount = useSelector((state) => state.petsAmount);
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState({ state: "lost" });

  useEffect(() => {
    dispatch(getPets(page, filter));
  }, [dispatch]);

  const paginateFunction = (pagee) => {
    pagee -= 1;
    setPage(pagee);
    dispatch(getPets(pagee, filter));
  };

  const petsToFilter = (obj) => {
    setFilter(obj);
    dispatch(getPets(page, obj));
    setPage(0);
  };

  return (
    <BackgroundPets>
      <ContainerTop>
        <div>
          <Searchbar stateValue={["lost"]} />
          <PetFilters petsToFilter={petsToFilter} stateValue={["lost"]} />
        </div>
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
                    <PetCard
                      key={p.id}
                      id={p.id}
                      name={p.name}
                      image={p.image}
                    />
                  );
                })
              )}
            </Grid>
          </ImageSpace>
        </Container>
      </ContainerTop>

      <Paginate
        total={petsAmount}
        petsPerPage={6}
        paginateFunction={paginateFunction}
      />
    </BackgroundPets>
  );
}
