import * as React from "react";

export const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-6 ${className}`} {...props} />
  );
};

export const CardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={`text-gray-800 ${className}`} {...props} />;
};
