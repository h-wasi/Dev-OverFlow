import React from "react";
import Image from "next/image";
import Link from "next/link";

interface MetricProps {
  imgUrl: string;
  alt: string;
  title: string;
  value: string | number;
  textStyles?: string;
  isAuthor?: boolean;
  href?: string;
}

function Metric({
  imgUrl,
  alt,
  title,
  value,
  textStyles,
  isAuthor,
  href,
}: MetricProps) {
  const metricContent = (
    <>
      <Image
        width={16}
        height={16}
        alt={alt}
        src={imgUrl}
        className={`object-contain ${href ? "rounded-full" : ""}`}
      ></Image>
      <p className={`${textStyles} flex items-center gap-1`}>
        {value}
        <span
          className={`small-regular line-clamp-1 ${
            isAuthor ? "max-sm:hidden" : ""
          }`}
        >
          {title}
        </span>
      </p>
    </>
  );
  return href ? (
    <Link href={href}>{metricContent}</Link>
  ) : (
    <div className="flex-center flex-wrap gap-1">{metricContent}</div>
  );
}

export default Metric;
