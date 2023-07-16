import React, { ChangeEvent } from "react";

type Props = {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  };
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

const ContactInputs = ({
  inputs,
  handleChangeInput,
  handleChangeMessage,
}: Props) => {
  return (
    <div className="mx-auto">
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%]"
          placeholder="First Name"
          value={inputs.firstName}
          name="firstName"
          onChange={handleChangeInput}
        />
        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%]"
          value={inputs.lastName}
          placeholder="Last Name"
          name="lastName"
          onChange={handleChangeInput}
        />
      </div>

      <div className="my-3 flex justify-between text-sm">
        <input
          type="email"
          className="border rounded p-2 py-3 w-full"
          value={inputs.email}
          placeholder="Email"
          name="email"
          onChange={handleChangeInput}
        />
      </div>

      <div className="my-3 flex justify-between text-sm">
        <textarea
          className="border rounded p-2 py-3 w-full"
          placeholder="Message"
          value={inputs.message}
          name="message"
          rows={5}
          onChange={handleChangeMessage}
        />
      </div>
    </div>
  );
};

export default ContactInputs;
