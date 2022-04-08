import React, { useEffect, useState } from "react";
import { StyledSpan } from "./active-item-header.styles";

const ActiveItemHeader = ({
  title,
  pathname,
}: {
  title: string;
  pathname: string;
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    console.log(document.children);
    if (document.activeElement?.id === pathname) {
      setActive(true);
    }
  }, [pathname]);

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
