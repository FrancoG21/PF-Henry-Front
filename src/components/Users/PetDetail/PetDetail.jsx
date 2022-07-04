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
} from "./StyledPetDetail";

export default function PetDetail() {
  // const detail = useSelector(state => state.pets)
  const {petDetail, usuario, url} = useSelector((state) => state);
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
            {petDetail.state === "adopt" || petDetail.state === "transit" ? (
              <>
                {/* <Link to={`/useradoptpet/${id}`}> */}
                  <button onClick={() => usuario ? window.location.replace(`${url}/useradoptpet/${id}`) : window.location.replace(`${url}/login`)}>Quiero adoptar</button>
                {/* <Link to={`/usertransitpet/${id}`}> */}
                  <button onClick={() => usuario ? window.location.replace(`${url}/usertransitpet/${id}`) : window.location.replace(`${url}/login`)}>Hogar Transito</button>
              </>
            ) : (
              // <Link to={`/useritsmypet/${id}`}>
                <button onClick={() => usuario ? window.location.replace(`${url}/useritsmypet/${id}`) : window.location.replace(`${url}/login`)}>Es mi perro</button>
            )}
          </DetailContainer>
        ) : (
          <h1>siga intentando mijo</h1>
        )}
      </div>
    </BackgroundDetail>
  );
}
