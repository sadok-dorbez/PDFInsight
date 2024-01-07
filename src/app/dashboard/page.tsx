import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Page = () => {
  const { getUser } = getKindeServerSession();

  // Use async/await to handle the promise
  const fetchData = async () => {
    try {
      const user = await getUser();

      // Check if user is not null before accessing properties
      if (user) {
        console.log(user.email);
        // You can use user.email here
      } else {
        console.log("User not authenticated");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  // Call the fetchData function
  fetchData();

  return <div>Loading...</div>; // You can render a loading message or component here
};

export default Page;
