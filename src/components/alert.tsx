import { cn } from "@/lib/util";

type AlertProps = {
  text: string;
  className?: string;
};
export const Alert = ({ text, className }: AlertProps) => {
  return (
    <div className={cn("w-full fixed sm:w-96 bg-gray-700 duration-1000", className)}>
      <p
        className={cn("text-center text-base", className)}
        style={{ color: "#94ADCF" }}
      >
        {text}
      </p>
    </div>
  );
};
