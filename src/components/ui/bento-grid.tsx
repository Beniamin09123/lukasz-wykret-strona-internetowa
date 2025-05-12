import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  title,
  className,
  icon: Icon,
  description,
}: {
  title: string;
  className?: string;
  icon?: any;
  description: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.23, 1, 0.32, 1]
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "group relative col-span-1 overflow-hidden rounded-2xl",
        "gradient-border gradient-hover",
        "bg-muted/5 backdrop-blur-sm",
        "transition-all duration-500 hover:shadow-2xl hover:shadow-[#0052CC]/10",
        "[transform-style:preserve-3d] hover:[transform:rotateX(10deg)]",
        className
      )}
    >
      <div className="p-8">
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            {Icon && (
              <div className="relative">
                <Icon className="h-10 w-10 gradient-text transition-transform duration-500 ease-out group-hover:scale-[1.4] group-hover:rotate-[10deg]" />
                <div className="absolute inset-0 blur-2xl bg-[#0052CC]/20 scale-150 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            )}
            <h3 className="font-montserrat text-xl font-bold text-foreground group-hover:gradient-text transition-colors duration-500">
              {title}
            </h3>
          </div>
          
          <p className="font-open-sans text-foreground/70 leading-relaxed transition-transform duration-500 group-hover:translate-y-0">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};