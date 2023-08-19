import React from "react";
import "./typography.scss";

interface TypographyProps {
  /** The typographic scale of the component. */
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "caption";
  /** The content of the component. */
  children: React.ReactNode;
}

export const Typography = ({ children, variant = "p" }: TypographyProps) => {
  return (
    <>
      {variant === "h1" ? <h1 className="flourish-h1">{children}</h1> : null}
      {variant === "h2" ? <h2 className="flourish-h1">{children}</h2> : null}
      {variant === "h3" ? <h3 className="flourish-h3">{children}</h3> : null}
      {variant === "h4" ? <h4 className="flourish-h4">{children}</h4> : null}
      {variant === "h5" ? <h5 className="flourish-h5">{children}</h5> : null}
      {variant === "h6" ? <h6 className="flourish-h6">{children}</h6> : null}
      {variant === "p" ? <p className="flourish-body">{children}</p> : null}
      {variant === "caption" ? (
        <caption className="flourish-caption">{children}</caption>
      ) : null}
    </>
  );
};
