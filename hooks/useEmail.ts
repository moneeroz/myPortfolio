import { useState } from "react";

type Props = {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  };
};

const useEmail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = async ({ inputs }: Props) => {
    const { firstName, lastName, email, message } = inputs;
    setLoading(true);

    await fetch(
      `/api/send?firstName=${firstName}&lastName=${lastName}&email=${email}&message=${message}`,
      {
        method: "GET",
      },
    );
    console.log("hello");
    setLoading(false);
  };

  return { loading, error, sendEmail };
};
export default useEmail;
