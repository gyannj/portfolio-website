"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./Card";
import { BiArrowFromRight } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { AnimatedTooltipPreview } from "./AnimatedTooltipBar";
import { LinkPreview } from "./LinkPreview";

export interface RotatingCardProps {
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  repo: string;
  techstack: any[];
}

export function RotatingCard(props: RotatingCardProps) {
  const { title, des, img, iconLists, link ,repo,techstack} = props;

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-950 dark:border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {des}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs bg-black font-normal border dark:text-white"
          >
            <a href={repo} target="_blank" rel="noreferrer">
              <p>
              Go to Repo    
              <FaArrowRight className="ml-2 mb-1 inline-block"/>
              </p>
            </a>
            
          </CardItem>
          <CardItem
             translateZ="100"
             rotateX={0}
             rotateZ={0}
             className="mt-4"
          >
              <AnimatedTooltipPreview techstack={techstack}/>
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
             <p>
              <LinkPreview url={link} className=" bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                View Project
              </LinkPreview>
             </p>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
