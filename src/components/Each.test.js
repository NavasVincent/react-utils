import { render, screen } from "@testing-library/react";
import Each from "./Each";

describe("Each Component", () => {
  it("renders items correctly", () => {
    const items = ["Apple", "Banana", "Cherry"];

    render(
      <Each
        of={items}
        render={(item) => <p key={item}>{item}</p>} 
      />
    );

    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
    expect(screen.getByText("Cherry")).toBeInTheDocument();
  });

  it("renders nothing when list is empty", () => {
    const { container } = render(<Each of={[]} />);
    expect(container.firstChild).toBeNull(); // ✅ Ensures no content is rendered
  });
});
