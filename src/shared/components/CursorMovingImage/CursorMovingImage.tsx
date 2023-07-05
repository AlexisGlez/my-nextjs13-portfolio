"use client";

import { useMotionValue } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

import { FramerImage } from "../FramerImage";

export const CursorMovingImage: React.FunctionComponent<{
  title: string;
  img: any;
  link: string;
  width: number;
  height: number;
}> = ({ title, img, link, width, height }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove: React.MouseEventHandler<HTMLAnchorElement> = (
    event
  ) => {
    if (!imgRef.current) return;

    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLAnchorElement> = () => {
    if (!imgRef.current) return;

    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  };

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        ref={imgRef}
        src={img}
        width={width}
        height={height}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
        style={{ x, y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
      />
    </Link>
  );
};
