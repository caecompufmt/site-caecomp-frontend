import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { StyledSpan } from "./active-item-header.styles";

const ActiveItemHeader = ({
  title,
  pathname,
}: {
  title: string;
  pathname: string;
}) => {
  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (pathname === location.pathname) {
      setActive(true);
    }
  }, [pathname, location.pathname]);

  return (
    <>
      {active ? (
        <>
          <span className="text-white">{title}</span>
          <StyledSpan />
        </>
      ) : (
        <span className="text-white">{title}</span>
      )}
    </>
  );
};

export default ActiveItemHeader;
