interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  message,
}) => (
  <div>
    <h1>
      Name: {firstName} {lastName}!
    </h1>
    <h3>Email: {email}</h3>
    <p>Message: {message}</p>
  </div>
);
