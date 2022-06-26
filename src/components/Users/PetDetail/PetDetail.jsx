import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { getById, getPets, cleanDetail } from "../../../redux/actions/index";
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
    <div>
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
                <Span>Castration: </Span>{" "}
                {detail.castration === true ? "yes" : "no"}
              </SubTitle3>
              <SubTitle3>
                <Span>Vaccinate: </Span>
                {detail.vaccinate === true ? "yes" : "no"}
              </SubTitle3>
              <SubTitle3>
                <Span>State: </Span>
                {detail.state === 'adopt'? 'for adopt' : detail.state}
              </SubTitle3>
            </ContainerContent>
          </DetailContainer>
        ) : (
          <h1>siga intentando mijo</h1>
        )}
      </div>
    </div>
  );
}
