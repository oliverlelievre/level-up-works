import React from "react";

export const CopyrightYear = () => {
  const d = new Date();
  const year = d.getFullYear();

  return <span>{year}</span>;
};
