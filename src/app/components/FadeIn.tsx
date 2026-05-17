import { motion } from "motion/react";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  distance?: number;
  duration?: number;
}

/** Single element fade-in on scroll. */
export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 22,
  duration = 0.52,
}: FadeInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: direction === "up" ? distance : 0,
        x: direction === "left" ? -distance : direction === "right" ? distance : 0,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-56px" }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  /** Delay between each child (seconds). */
  stagger?: number;
  /** Base delay before the first child starts. */
  delay?: number;
}

/** Wraps a list of children and staggers their fade-in. */
export function FadeInStagger({ children, className, stagger = 0.08, delay = 0 }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-56px" }}
      variants={{ visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Child item used inside FadeInStagger. */
export function FadeInItem({
  children,
  className,
  direction = "up",
  distance = 22,
}: Omit<FadeInProps, "delay" | "duration">) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: direction === "up" ? distance : 0,
          x: direction === "left" ? -distance : direction === "right" ? distance : 0,
        },
        visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.52, ease } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
