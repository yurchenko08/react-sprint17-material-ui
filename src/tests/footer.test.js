/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Footer", () => {
  it("Footer section 'About us' exists on the screen", async () => {

    render(<App />);
    const firstSection = screen.getByText("About us").closest("div");

    expect(firstSection).toBeInTheDocument();
  });

  it("Footer section 'About us' uses correct amount of space", async () => {

    render(<App />);
    const firstSection = screen.getByText("About us").closest("div");   

    expect(firstSection).toHaveClass("MuiGrid-grid-md-12");
    expect(firstSection).toHaveClass("MuiGrid-grid-lg-6");
  });

  it("Footer section 'Information' exists on the screen", async () => {
    render(<App />);
    const firstSection = screen.getByText("Information").closest("div");

    expect(firstSection).toBeInTheDocument();
  });

  it("Footer section 'Information' uses correct amount of space", async () => {
    render(<App />);
    const firstSection = screen.getByText("Information").closest("div");
    console.log(firstSection);

    expect(firstSection).toHaveClass("MuiGrid-grid-sm-6");
    expect(firstSection).toHaveClass("MuiGrid-grid-xs-12");
  });

  it("Footer section 'My account' exists on the screen", async () => {
    render(<App />);
    const firstSection = screen.getByText("My account").closest("div");

    expect(firstSection).toBeInTheDocument();
  });

  it("Footer section 'My account' uses correct amount of space", async () => {
    render(<App />);
    const firstSection = screen.getByText("My account").closest("div");

    expect(firstSection).toHaveClass("MuiGrid-grid-sm-6");
    expect(firstSection).toHaveClass("MuiGrid-grid-xs-12");
  });

});
