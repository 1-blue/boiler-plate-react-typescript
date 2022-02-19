import React from "react";

// components
import Button from "@src/components/common/Button";
import Icon from "@src/components/common/Icon";
import Spinner from "@src/components/common/Spinner";

// utils
import { dateFormat } from "@src/utils";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Button type="button" $loading>
        click me
      </Button>
      <Icon shape="comment" fill="blue" />
      <Spinner $button />
      {dateFormat(Date.now(), "hh-mm-ss")}
    </>
  );
};

export default Home;
