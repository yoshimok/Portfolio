import React from "react";
import { Contacts, Props } from "./Contacts";

export default {
  title: "Sections/Contacts",
  component: Contacts,
};

const mockProps: Props = {
  mailAddress: "yoshimok@pompom.com",
  twitterId: "@yoshimok__",
};

export const Default = () => <Contacts {...mockProps} />;
