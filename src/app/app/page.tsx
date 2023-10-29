import { redirect } from "next/navigation";

const page = () => {
  redirect("app/weather");

  return null;
};

export default page;
