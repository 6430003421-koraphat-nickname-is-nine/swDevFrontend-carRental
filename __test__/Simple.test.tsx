import ReservationMenu from "@/components/ReservationMenu";
import Banner from "@/components/Banner";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ReservationMenu", () => {
  it("should have title", () => {
    // Arrange
    render(<ReservationMenu />);
    // Act
    const bannerText = screen.getByText("Sub-Menu Here");
    // Assert
    expect(bannerText).toBeInTheDocument();
  });
});

// Mock useRouter
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

// Mock useSession

jest.mock("next-auth/react", () => ({
  useSession() {
    return {
      data: null,
      user: { name: "Tester" },
    };
  },
}));

describe("Banner", () => {
  it("should have top banner title", () => {
    // Arrange
    render(<Banner />);
    // Act
    const bannerText = screen.getByText("Your Travel Partner");
    // Assert
    expect(bannerText).toBeInTheDocument();
  });
  const covers = ["cover.jpg", "cover2.jpg", "cover3.jpg", "cover4.jpg"];

  it("should changeebanner when click button", async () => {
    // Arrange
    render(<Banner />);
    // Act
    const banner = screen.getByRole("img") as HTMLImageElement;

    for (let i = 0; i < covers.length; i++) {
      await userEvent.click(banner);
      // Assert
      expect(banner.src).toContain(covers[(i + 1) % 4]);
    }
  });
});
