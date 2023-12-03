import React from "react";

export const NavButton = ({children, className, styles}) => {
  return (
    <button
      className={className}
      style={{
        ...styles,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: 'none',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  );
};