import { AnimatedNumber } from "@/shared/components/AnimatedNumber";

export const Stat: React.FunctionComponent<{
  value: number;
  title: string;
}> = ({ value, title }) => {
  return (
    <div className="flex flex-col items-end justify-center xl:items-center">
      <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
        <AnimatedNumber value={value} />+
      </span>
      <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
        {title}
      </h2>
    </div>
  );
};
