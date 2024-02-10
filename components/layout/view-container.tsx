import { cn } from "@/lib/utils";

interface ViewContainerProps {
  children: React.ReactNode;
  className?: string;
  attr?: React.HTMLAttributes<HTMLDivElement>;
}

const ViewContainer: React.FC<ViewContainerProps> = ({
  children,
  className,
  attr,
}) => (
  <div
    className={cn(
      " flex flex-col flex-wrap w-full max-w-7xl mx-auto ",
      className
    )}
    {...attr}
  >
    {children}
  </div>
);

export default ViewContainer;

