import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { getById, getPets, cleanDetail } from "../../../redux/actions/index";
import { Link } from "react-router-dom";
import {
  DetailContainer,
  DetailTitle,
  ImageDetail,
  ContainerContent,
  SubTitle,
  SubTitle2,
  SubTitle3,
  Span,
  ContainerImage,
  BackgroundDetail,
  BackIcon,
  ButtonForm,
  ContainerButton,
} from "./StyledPetDetail";

export default function PetDetail() {
  // const detail = useSelector(state => state.pets)
  const {petDetail, usuario} = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getById(id));
    dispatch(cleanDetail(dispatch));
  }, [dispatch, id]);

  return (
    <BackgroundDetail>
      <Link to="/adopt">
        <BackIcon />
      </Link>
      <div>
        {petDetail ? (
          <DetailContainer>
            <ContainerImage>
              <ContainerButton>
                {petDetail.state === "adopt" || petDetail.state === "transit" ? (
                  <>
                    {/* <Link to={`/useradoptpet/${id}`}> */}
                      <ButtonForm onClick={() => usuario ? navigate(`/useradoptpet/${id}`, '_self') : navigate(`/login`, '_self')}>Quiero adoptar</ButtonForm>
                    {/* <Link to={`/usertransitpet/${id}`}> */}
                      <ButtonForm onClick={() => usuario ? navigate(`/usertransitpet/${id}`) : navigate(`/login`)}>Hogar Transito</ButtonForm>
                  </>
                ) : petDetail.state === "lost" ? (
                  // <Link to={`/useritsmypet/${id}`}>
                    <ButtonForm onClick={() => usuario ? navigate(`/useritsmypet/${id}`) : navigate(`/login`)}>Es mi perro</ButtonForm>
                ) : null}
              </ContainerButton>
              
              <DetailTitle>{petDetail.name}</DetailTitle>
              <ImageDetail
                src={petDetail.image}
                alt="pets"
                width="600"
                height="400"
              />
            </ContainerImage>
            <ContainerContent>
              <SubTitle2>
                <Span>Raza: </Span>
                {petDetail.breed}
              </SubTitle2>
              <SubTitle2>
                <Span>Peso: </Span>
                {petDetail.weight ? petDetail.weight : "unknown"}
              </SubTitle2>
              <SubTitle2>
                <Span>Tamaño: </Span>
                {petDetail.size}
              </SubTitle2>
              <SubTitle3>
                <Span>Pelaje: </Span>
                {petDetail.fur}
              </SubTitle3>
              <SubTitle3>
                <Span>Genero: </Span>
                {petDetail.gender}
              </SubTitle3>
              <SubTitle3>
                <Span>Castrado: </Span> {petDetail.castration}
              </SubTitle3>
              <SubTitle3>
                <Span>Vacunado: </Span>
                {petDetail.vaccinate}
              </SubTitle3>
              <SubTitle3>
                <Span>Estado: </Span>
                {petDetail.state === "adopt" ? "for adopt" : petDetail.state}
              </SubTitle3>
            </ContainerContent>
          </DetailContainer>
        ) : (
          <h1>Esta mascota no existe o aún no fue cargada</h1>
        )}
      </div>
    </BackgroundDetail>
  );
}
