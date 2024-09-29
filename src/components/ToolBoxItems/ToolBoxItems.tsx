import { twMerge } from "tailwind-merge";
import TechIcon from "../TechIcon/TechIcon";
import { Fragment } from "react";

export default function ToolBoxItems({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  itemsWrapperClassName?: string;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6 ",
          itemsWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 py-2 px-3 outlinr outline-2 outline-white/10 rounded-lg "
              >
                <TechIcon component={item.iconType} />
                <span className="font-semibold last: ">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}