import React from "react";
import { useExampleStore } from "../stores/example.store";
import { useShallow } from "zustand/react/shallow";
import { Button, Container, Flex } from "@mantine/core";
import Map from "../components/common/Map";

const Home = () => {
  const { state, increment, decrement, reset } = useExampleStore(
    useShallow((state) => state)
  );

  return (
    <Container fluid>
      <Flex direction={"column"} gap={10}>
        <div>Play around with state the: {state}</div>
        <Flex gap={10}>
          <Button onClick={() => increment()}>Increment</Button>
          <Button onClick={() => decrement()}>Decrement</Button>
          <Button onClick={() => reset()}>Reset</Button>
        </Flex>
      </Flex>
      <div className="relative">
        <img
          src="https://image.freepik.com/free-vector/sun-icon-sunshine-symbol-solar-energy-sun-rays-sign_1150-13048.jpg"
          alt="sun"
          class="profile absolute z-10 left-[-12px] bottom-[2px] h-14 aspect-square object-contain border-4 border-blue-500 bg-white rounded-full"
        />
        <div className="  h-8 w-8 bg-blue-500  rotate-45"></div>
      </div>
    </Container>
  );
};

export default Home;
