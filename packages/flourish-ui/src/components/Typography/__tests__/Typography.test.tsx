import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Typography } from "..";

describe("<Typography />", () => {
  it("renders without error", () => {
    const wrapper = render(<Typography>Hello</Typography>);
    expect(wrapper).not.toBeNull();
  });

  it("h1 is rendered when variant set to h1", () => {
    render(<Typography variant="h1">Hello</Typography>);
    const h1 = screen.getByText("Hello");
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveClass('flourish-h1');
  });

  it("h2 is rendered when variant set to h2", () => {
    render(<Typography variant="h2">Hello</Typography>);
    const h2 = screen.getByText("Hello");
    expect(h2).toBeInTheDocument();
    expect(h2).toHaveClass('flourish-h2');
  });

  it("h3 is rendered when variant set to h3", () => {
    render(<Typography variant="h3">Hello</Typography>);
    const h3 = screen.getByText("Hello");
    expect(h3).toBeInTheDocument();
    expect(h3).toHaveClass('flourish-h3');
  });

  it("h4 is rendered when variant set to h4", () => {
    render(<Typography variant="h4">Hello</Typography>);
    const h4 = screen.getByText("Hello");
    expect(h4).toBeInTheDocument();
    expect(h4).toHaveClass('flourish-h4');
  });

  it("h5 is rendered when variant set to h5", () => {
    render(<Typography variant="h5">Hello</Typography>);
    const h5 = screen.getByText("Hello");
    expect(h5).toBeInTheDocument();
    expect(h5).toHaveClass('flourish-h5');
  });

  it("h6 is rendered when variant set to h6", () => {
    render(<Typography variant="h6">Hello</Typography>);
    const h6 = screen.getByText("Hello");
    expect(h6).toBeInTheDocument();
    expect(h6).toHaveClass('flourish-h6');
  });

  it("p is rendered when variant set to p", () => {
    render(<Typography variant="p">Hello</Typography>);
    const p = screen.getByText("Hello");
    expect(p).toBeInTheDocument();
    expect(p).toHaveClass('flourish-body');
  });

  it("caption is rendered when variant set to caption", () => {
    render(<Typography variant="caption">Hello</Typography>);
    const caption = screen.getByText("Hello");
    expect(caption).toBeInTheDocument();
    expect(caption).toHaveClass('flourish-caption');
  });
});
