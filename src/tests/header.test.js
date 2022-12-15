/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "../App";
import mediaQuery from "css-mediaquery";

const createMatchMedia = (width) => (query) => ({
  matches: mediaQuery.match(query, { width }),
  addListener: () => {},
  removeListener: () => {},
});

describe("Header", () => {
  it("renders desktop memu when screen size is 1000", async () => {
    window.matchMedia = createMatchMedia(1000);

    render(<App />);
    const storiesButton = screen.getByText("Stories");

    expect(storiesButton).toBeInTheDocument();
  });

  it("does not render desktop memu when screen size is 600", async () => {
    window.matchMedia = createMatchMedia(600);
    render(<App />);
    const storiesButton = screen.queryByText("Stories");

    expect(storiesButton).not.toBeInTheDocument();
  });

  it("renders subitems of desktop memu after click on Stories", async () => {
    window.matchMedia = createMatchMedia(1000);
    render(<App />);
    const storiesButton = screen.getByText("Stories");

    act(() => storiesButton.click());
    let blogElement = await screen.findByText(/Blog/i);

    expect(blogElement).toBeInTheDocument();
  });

  it("does not render subitems of desktop memu without click on Stories", async () => {
    window.matchMedia = createMatchMedia(1000);

    render(<App />);

    let blogElement = screen.queryByText(/Blog/i);

    expect(blogElement).not.toBeInTheDocument();
  });

  it("renders button for mobile menu when screen size is 800", async () => {
    window.matchMedia = createMatchMedia(800);

    render(<App />);
    const storiesButton = screen.getByTestId("MenuIcon");

    expect(storiesButton).toBeInTheDocument();
  });

  it("does not render button for mobile menu when screen size is 1000", async () => {
    window.matchMedia = createMatchMedia(1000);

    render(<App />);
    const storiesButton = screen.queryByTestId("MenuIcon");

    expect(storiesButton).not.toBeInTheDocument();
  });

  it("renders mobile menu after click on menu button", async () => {
    window.matchMedia = createMatchMedia(800);

    render(<App />);
    const menuButton = screen.getByTestId("MenuIcon").parentElement;
    act(() => menuButton.click());
    let homeElement = await screen.findByText(/Home/i);

    expect(homeElement).toBeInTheDocument();
  });

  it("Stories menu item is present in mobile memn", async () => {
    window.matchMedia = createMatchMedia(800);

    render(<App />);
    const menuButton = screen.getByTestId("MenuIcon").parentElement;
    act(() => menuButton.click());
    let storiesDiv = screen.getByText(/Stories/i).parentElement;

    expect(storiesDiv).toBeInTheDocument();
  });

  it("Accordion is used for mobile memu Stories item", async () => {
    window.matchMedia = createMatchMedia(800);

    render(<App />);
    const menuButton = screen.getByTestId("MenuIcon").parentElement;
    act(() => menuButton.click());
    let storiesDiv = await (await screen.findByText(/Stories/i)).parentElement;

    expect(storiesDiv).toHaveClass("MuiAccordionSummary-content");
    expect(storiesDiv).not.toHaveClass("Mui-expanded");
  });

  it("Accordion is closed by default for mobile menu Stories item", async () => {
    window.matchMedia = createMatchMedia(800);

    render(<App />);
    const menuButton = screen.getByTestId("MenuIcon").parentElement;
    act(() => menuButton.click());
    let storiesDiv = (await screen.findByText(/Stories/i)).parentElement;

    expect(storiesDiv).not.toHaveClass("Mui-expanded");
  });

  it("Accordion opens on click on mobile menu Stories item", async () => {
    window.matchMedia = createMatchMedia(800);

    render(<App />);
    const menuButton = screen.getByTestId("MenuIcon").parentElement;
    act(() => menuButton.click());
    let storiesDiv = (await screen.findByText(/Stories/i)).parentElement;
    act(() => storiesDiv.click());

    expect(storiesDiv).toHaveClass("Mui-expanded");
  });

  it("'Faforite' icon buttons exist on the screen", async () => {
    render(<App />);
    const favIcons = screen.getAllByTestId("FavoriteIcon");

    expect(favIcons.length).toBeGreaterThan(5);
  });

  it("'Person' icon buttons exist on the screen", async () => {
    render(<App />);
    const favIcons = screen.getAllByTestId("PersonIcon");

    expect(favIcons).toHaveLength(1);
  });

  it("'Notifications' icon buttons exist on the screen", async () => {
    render(<App />);
    const favIcons = screen.getAllByTestId("NotificationsIcon");

    expect(favIcons).toHaveLength(1);
  });
});
