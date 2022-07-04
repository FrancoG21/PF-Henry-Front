import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
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
              <DetailTitle>{petDetail.name}</DetailTitle>
              <ImageDetail
                src={petDetail.image}
                alt="pets"
                width="600"
                height="400"
              />
              <ContainerButton>
                {petDetail.state === "adopt" || petDetail.state === "transit" ? (
                  <>
                    {/* <Link to={`/useradoptpet/${id}`}> */}
                      <ButtonForm onClick={() => usuario ? window.location.replace(`http://localhost:3000/useradoptpet/${id}`) : window.location.replace('http://localhost:3000/login')}>Quiero adoptar</ButtonForm>
                    {/* <Link to={`/usertransitpet/${id}`}> */}
                      <ButtonForm onClick={() => usuario ? window.location.replace(`http://localhost:3000/usertransitpet/${id}`) : window.location.replace('http://localhost:3000/login')}>Hogar Transito</ButtonForm>
                  </>
                ) : (
                  // <Link to={`/useritsmypet/${id}`}>
                    <ButtonForm onClick={() => usuario ? window.location.replace(`http://localhost:3000/useritsmypet/${id}`) : window.location.replace('http://localhost:3000/login')}>Es mi perro</ButtonForm>
                )}
              </ContainerButton>
            </ContainerImage>
            <ContainerContent>
              <SubTitle2>
                <Span>Breed: </Span>
                {petDetail.breed}
              </SubTitle2>
              <SubTitle2>
                <Span>Weight: </Span>
                {petDetail.weight ? petDetail.weight : "unknown"}
              </SubTitle2>
              <SubTitle2>
                <Span>Size: </Span>
                {petDetail.size}
              </SubTitle2>
              <SubTitle3>
                <Span>Fur: </Span>
                {petDetail.fur}
              </SubTitle3>
              <SubTitle3>
                <Span>Gender: </Span>
                {petDetail.gender}
              </SubTitle3>
              <SubTitle3>
                <Span>Castration: </Span> {petDetail.castration}
              </SubTitle3>
              <SubTitle3>
                <Span>Vaccinate: </Span>
                {petDetail.vaccinate}
              </SubTitle3>
              <SubTitle3>
                <Span>State: </Span>
                {petDetail.state === "adopt" ? "for adopt" : petDetail.state}
              </SubTitle3>
            </ContainerContent>
          </DetailContainer>
        ) : (
          <h1>siga intentando mijo</h1>
        )}
      </div>
    </BackgroundDetail>
  );
}
