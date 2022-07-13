import React from "react";
import { Card, CardBody, CardHeader, Email, Job, Name, ProfileCard, SocialIcons, SocialLinks } from "./StyledCardAbout";
import {BsGithub, BsLinkedin} from 'react-icons/bs';

export default function CardAbout({name, image, linkedIn, github, email}) {

    return (
        <Card>
            <CardHeader>
                <ProfileCard src={image} alt="Profile Image"/>
            </CardHeader>
            <CardBody>
                <Name>{name}</Name>
                <Email to='#'>{email}</Email>
                <Job>Full Stack Developer</Job>
            </CardBody>

            <SocialLinks>
                <SocialIcons href={`${linkedIn}`} target='blank'><BsLinkedin/></SocialIcons>
                <SocialIcons href={`${github}`} target='blank'><BsGithub/></SocialIcons>
            </SocialLinks>
        </Card>
    )
}