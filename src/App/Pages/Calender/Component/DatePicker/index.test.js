import { render, fireEvent, cleanup, screen } from "@testing-library/react";

// Mocks must be defined at top-level and must not reference out-of-scope variables.
// Use require() inside the factory to access modules like React.
jest.mock("antd", () => {
  const React = require("react");
  return {
    DatePicker: ({ onChange, disabledDate, inputReadOnly }) =>
      React.createElement("input", {
        "data-testid": "date-picker",
        readOnly: inputReadOnly,
        onClick: () => onChange(new Date("2020-01-01"), "2020-01-01"),
        "data-disabled": disabledDate
          ? String(disabledDate(new Date("2100-01-01")))
          : "",
      }),
  };
});

// Provide a jest.fn for useDispatch so tests can set its return value via mockReturnValue
jest.mock("react-redux", () => ({ useDispatch: jest.fn() }));

const DobPicker = require("./index").default;
const { useDispatch } = require("react-redux");

describe("DobPicker Component", () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("dispatches correct action when date is changed", () => {
    const dispatchMock = jest.fn();
    // useDispatch is a jest.fn() from our mock above
    useDispatch.mockReturnValue(dispatchMock);

    render(<DobPicker />);
    const picker = screen.getByTestId("date-picker");

    fireEvent.click(picker);

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({
      payload: "2020-01-01",
      type: "calender/setCalenderDate",
    });
  });

  test("passes disabledDate that disables future dates and sets inputReadOnly", () => {
    useDispatch.mockReturnValue(() => {});
    render(<DobPicker />);
    const picker = screen.getByTestId("date-picker");

    // inputReadOnly should be true
    expect(picker.readOnly).toBe(true);

    // Our mock stores the result of disabledDate called with a far-future date in data-disabled
    expect(picker.getAttribute("data-disabled")).toBe("true");
  });
});
