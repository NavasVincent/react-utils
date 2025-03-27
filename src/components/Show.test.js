import { render, screen } from "@testing-library/react";
import Show from "./Show";

describe("Show Component", () => {
  it("renders the 'When' block when condition is true", () => {
    render(
      <Show>
        <Show.When isTrue={true}>
          <p>Condition met</p>
        </Show.When>
        <Show.Else>
          <p>Condition not met</p>
        </Show.Else>
      </Show>
    );

    expect(screen.getByText("Condition met")).toBeInTheDocument();
    expect(screen.queryByText("Condition not met")).not.toBeInTheDocument();
  });

  it("renders the 'Else' block when condition is false", () => {
    render(
      <Show>
        <Show.When isTrue={false}>
          <p>Condition met</p>
        </Show.When>
        <Show.Else>
          <p>Condition not met</p>
        </Show.Else>
      </Show>
    );

    expect(screen.getByText("Condition not met")).toBeInTheDocument();
  });
});
