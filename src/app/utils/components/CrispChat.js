"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("a979818c-d773-4e0c-b1f7-2a83f5fbaa65");
  });

  return null;
};

export default CrispChat;
