import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
// import { MemoryRouter } from "react-router";
import Home from "./Home";
test("route change /home to /shop", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

//    const outputElement= creen.getByText((content,node)=>{
    //     const hasText=(node)=>node.textContent==="Product Listing";
    //     const nodeHasText=hasText(node);
    //     const childrenDontHaveText = Array.from(node.children).every(
    //         (child) => !hasText(child)
    //       );
    //     return nodeHasText && childrenDontHaveText;
    // })


  const link = screen.getByRole("link",{name :"Go to Shopping page"});
  userEvent.click(link);
  const outputElement = screen.getByText(/Product Listing/);
  expect(outputElement).toBeInTheDocument();
  });
