import styled from "styled-components";
import Particles from "@tsparticles/react";

const ParticlesStyled = styled(Particles)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const S = { ParticlesStyled };
