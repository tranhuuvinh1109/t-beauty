"use client";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import Container from "../Container/Container";
import React from "react";

type AnimationProps = {
  children: React.ReactNode;
  animateIn?: "bounceInRight" | "fadeIn" | "bounceInLeft";
  animateOut?: "bounceOutLeft" | "fadeOut" | "bounceOutRight";
  className?: string;
};
const Animation = ({
  children,
  animateIn = "bounceInRight",
  animateOut = "bounceOutLeft",
  className,
}: AnimationProps) => {
  return (
    <Container className={className}>
      <ScrollAnimation animateIn={animateIn} animateOut={animateOut}>
        {children}
      </ScrollAnimation>
    </Container>
  );
};

export default Animation;
