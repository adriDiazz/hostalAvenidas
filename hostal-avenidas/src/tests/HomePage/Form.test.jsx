import { render } from "@testing-library/react";
import { test, Mock, vi } from "vitest";
import App from "../../App";
import Form from "../../components/HomePage/Form";

//mock useNavigate vitest
vi.mock("react-router-dom", () => {
  const mod = vi.importActual("react-router-dom");
  return {
    ...mod,
    useNavigate: () => () => {},
  };
});

describe("Form", () => {
  it("Fotm shoud render", () => {
    const container = render(<Form />);

    expect(container).toBeTruthy();
  });
});
