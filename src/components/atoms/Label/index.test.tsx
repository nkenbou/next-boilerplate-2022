import { render, renderHook, screen } from "@testing-library/react";
import { Label } from ".";

function useLoggedInUser() {
  return { name: "Alice" };
}

describe("Label", () => {
  it("foo", () => {
    render(<Label name="foo" />);
    expect(screen.getByText("foo")).toBeTruthy();
  });

  it("returns logged in user", () => {
    const { result } = renderHook(() => useLoggedInUser());
    expect(result.current).toEqual({ name: "Alice" });
  });
});
