// Ensure this is in the same file or properly exported from FakeChartsData
export const fakeChartData = {
  labels: [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ],

  datasets: [
    {
      label: "Steps by Pedro",
      data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
      borderColor: "rgb(75, 192, 192)",
    },
    {
      label: "Steps by Pedro's Friend",
      data: [3000, 5000, 5500, 8000, 1200, 11000, 15000],
      borderColor: "red",
    },
  ],
};

const barChartData = {
  labels: ["Rent", "Groceries", "Utilities", "Entertainment", "Transportation"],
  datasets: [
    {
      label: "Expenses",
      data: [1200, 300, 150, 180, 100],
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(54, 162, 235, 1)"],
    },
  ],
};
