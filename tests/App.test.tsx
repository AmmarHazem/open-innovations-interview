import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { posts } from "../src/data";

describe("App", () => {
  it("should render the App component", async () => {
    render(<App />);
    const heading = screen.getByRole("heading", { name: /Hacker News/i });
    expect(heading).toBeInTheDocument();
  });
  it("should render all posts", () => {
    render(<App />);
    posts.forEach((post) => {
      const postTitle = screen.getByRole("heading", { name: post.title });
      expect(postTitle).toBeInTheDocument();
    });
  });
});
