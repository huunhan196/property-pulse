import React from "react";
import "@/assets/styles/global.css";

export const metadata = {
  title: "Property Pulse | Find The Perfecet Rental",
  description:
    "Property Pulse is a real estate platform that helps you find the perfect home.",
  keywords: "real estate, homes, property, buy, sell, rent",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
