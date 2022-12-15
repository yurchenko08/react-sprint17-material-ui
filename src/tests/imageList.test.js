/* eslint-disable testing-library/no-node-access */
import { render, screen, within } from "@testing-library/react";
import App from "../App";
import mediaQuery from "css-mediaquery";

const createMatchMedia = (width) => (query) => ({
  matches: mediaQuery.match(query, { width }),
  addListener: () => {},
  removeListener: () => {},
});

describe("ImageList", () => {
  it("imageList exists on the screen", async () => {
    // window.matchMedia = createMatchMedia(1000);
    render(<App />);
    const lists = screen.getAllByRole("list");

    const imageList = lists.filter((list) =>
      list.className.includes("MuiImageList-root")
    );

    expect(imageList).toHaveLength(1);
  });

  it("imageList has 3 columns on the large screen", async () => {
    window.matchMedia = createMatchMedia(1000);
    render(<App />);
    const lists = screen.getAllByRole("list");

    const imageList = lists.filter((list) =>
      list.className.includes("MuiImageList-root")
    );

    expect(imageList[0]).toHaveStyle("column-count: 3");
  });

  it("imageList has 2 columns on the medium screen", async () => {
    window.matchMedia = createMatchMedia(800);
    render(<App />);
    const lists = screen.getAllByRole("list");

    const imageList = lists.filter((list) =>
      list.className.includes("MuiImageList-root")
    );

    expect(imageList[0]).toHaveStyle("column-count: 2");
  });

  it("imageList has 1 column on the extra small screen", async () => {
    window.matchMedia = createMatchMedia(500);
    render(<App />);
    const lists = screen.getAllByRole("list");

    const imageList = lists.filter((list) =>
      list.className.includes("MuiImageList-root")
    );

    expect(imageList[0]).toHaveStyle("column-count: 1");
  });

  it("imageList item contains a bar", async () => {
    render(<App />);
    const lists = screen.getAllByRole("list");
    const imageList = lists.filter((list) =>
      list.className.includes("MuiImageList-root")
    );
    const image = within(imageList[0].children[0]).getByRole("img");
    const bar = image.nextSibling;

    expect(bar.className.includes("MuiImageListItemBar-root")).toBeTruthy();
  });

  it("imageList item bar contains 'favorite' icon", async () => {
    render(<App />);
    const lists = screen.getAllByRole("list");
    const imageList = lists.filter((list) =>
      list.className.includes("MuiImageList-root")
    );
    const image = within(imageList[0].children[0]).getByTestId("FavoriteIcon");

    expect(image).toBeInTheDocument();
  });
});
