import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Events Analytics",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Analytics(events: any) {
  const eventsStartMonthArray: Array<number> = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];

  const calculateAnalytics = () => {
    events.events.map((item: { start_time: Date }) => {
      const startTime = new Date(item.start_time);
      const month = startTime.getMonth();
      eventsStartMonthArray.map((item, index) => {
        if (index === month) {
          const newValue = item + 1;
          eventsStartMonthArray.splice(index, 1, newValue);
        }
        return "";
      });
      return "";
    });
  };

  calculateAnalytics();

  const data = {
    labels,
    datasets: [
      {
        label: "Events",
        data: eventsStartMonthArray,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
}
