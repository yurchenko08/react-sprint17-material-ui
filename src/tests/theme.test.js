import { overrides } from "../styles";

describe("theme", () => {
  it("Theme object defined", () => {
    expect(overrides).toBeTruthy();
  });

  it("Theme object has palette defined", () => {
    expect(overrides.palette).toBeTruthy();
  });

  it("Palette is not empty", () => {
    expect(Object.keys(overrides.palette).length).toBeGreaterThan(0);
  });

  it("TTheme object has components defined", () => {
    expect(overrides.components).toBeTruthy();
  });

  it("Components is not empty", () => {
    expect(Object.keys(overrides.palette).length).toBeGreaterThan(0);
  });

  it("Component overrides are correct", () => {
    const componentOveriding = overrides.components;
    const firstComponentOveriding =
      componentOveriding[Object.keys(componentOveriding)[0]];
    console.log(firstComponentOveriding);
    const areOverrideOptionsCorrect = Object.keys(
      firstComponentOveriding
    ).every((el) => el === "styleOverrides" || el === "defaultProps");
    expect(areOverrideOptionsCorrect).toBeTruthy();
  });
});
