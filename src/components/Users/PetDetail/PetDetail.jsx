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
  const detail = useSelector((state) => state.petDetail);
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
        {detail ? (
          <DetailContainer>
            <ContainerImage>
              <DetailTitle>{detail.name}</DetailTitle>
              <ImageDetail
                src={detail.image}
                alt="pets"
                width="600"
                height="400"
              />
            </ContainerImage>
            <ContainerContent>
              <SubTitle2>
                <Span>Breed: </Span>
                {detail.breed}
              </SubTitle2>
              <SubTitle2>
                <Span>Weight: </Span>
                {detail.weight ? detail.weight : "unknown"}
              </SubTitle2>
              <SubTitle2>
                <Span>Size: </Span>
                {detail.size}
              </SubTitle2>
              <SubTitle3>
                <Span>Fur: </Span>
                {detail.fur}
              </SubTitle3>
              <SubTitle3>
                <Span>Gender: </Span>
                {detail.gender}
              </SubTitle3>
              <SubTitle3>
                <Span>Castration: </Span> {detail.castration}
              </SubTitle3>
              <SubTitle3>
                <Span>Vaccinate: </Span>
                {detail.vaccinate}
              </SubTitle3>
              <SubTitle3>
                <Span>State: </Span>
                {detail.state === "adopt" ? "for adopt" : detail.state}
              </SubTitle3>
            </ContainerContent>
            {detail.state === "adopt" || detail.state === "transit" ? (
              <>
                <Link to={`/useradoptpet/${id}`}>
                  <button>Quiero adoptar</button>
                </Link>
                <Link to={`/usertransitpet/${id}`}>
                  <button>Hogar Transito</button>
                </Link>
              </>
            ) : (
              <Link to={`/useritsmypet/${id}`}>
                <button>Es mi perro</button>
              </Link>
            )}
          </DetailContainer>
        ) : (
          <h1>siga intentando mijo</h1>
        )}
      </div>
    </BackgroundDetail>
  );
}
