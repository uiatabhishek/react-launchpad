import { useQuery } from "@tanstack/react-query";
import api from "../services/api";
import useStore from "../store/useStore";

export default function Home() {
  const { count, increment } = useStore();

  const { data } = useQuery({
    queryKey: ["demo"],
    queryFn: async () => {
      const res = await api.get("/");
      return res.data;
    },
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">React Launchpad v3 🚀</h1>
      <p>Count: {count}</p>
      <button onClick={increment} className="px-4 py-2 bg-blue-600 text-white rounded">
        Increment
      </button>
      <p className="text-sm text-gray-500">
        API Data: {data ? JSON.stringify(data) : "Loading..."}
      </p>
    </div>
  );
}
