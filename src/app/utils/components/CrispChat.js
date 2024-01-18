"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("8e737131-974f-44ea-9c33-9159009853fe");
  });

  return null;
};

export default CrispChat;
