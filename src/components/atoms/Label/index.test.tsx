import { render, screen } from "@testing-library/react";
import { Label } from ".";

describe("Label", () => {
  it("foo", () => {
    render(<Label name="foo" />);
    expect(screen.getByText("foo")).toBeTruthy();
  });
});
