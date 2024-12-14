import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import { useState } from "react";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import { Helmet } from "react-helmet";
import {
  DefaultAudioLayout,
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

import { InputBox, SmallInputBox } from "./Input";
import { TypeConsider } from "../Modules/typeConsider";

interface childInterface {
  src: string | null;
}

export const Player = (child: childInterface) => {
  const [isLoop, setLoop] = useState<boolean | undefined>(false);

  if (child.src != null) {
    return (
      <div className="w-full flex flex-col justify-center items-center gap-4">
        {/* @ts-ignore */}
        <Helmet>
          <title>
            {child.src.split("/").reverse()[0]} | dethz React Player
          </title>
        </Helmet>

        <p className="text-xl">
          Now playing <br />{" "}
          <a
            target="_blank"
            href={child.src}
            className="underline hover:no-underline hover:opacity-60 text-2xl"
          >
            {child.src.split("/").reverse()[0]}
          </a>
        </p>

        <MediaPlayer
          src={child.src}
          aspectRatio={
            TypeConsider(child.src.split(".").reverse()[0]) == 2 ? "" : "16/9"
          }
          style={{ minWidth: "18rem", maxWidth: "70%", height: "auto" }}
          autoPlay={true}
          volume={0.6}
          loop={isLoop}
        >
          <MediaProvider />
          <DefaultAudioLayout icons={defaultLayoutIcons} />
          <DefaultVideoLayout icons={defaultLayoutIcons} />
        </MediaPlayer>
        <div className="min-w-[18rem] max-w-[60%]">
          <button
            className="p-4 bg-living-coral rounded-sm"
            onClick={() => {
              setLoop(!isLoop);
            }}
          >
            {isLoop ? "Loop" : "not Loop"}
          </button>
        </div>

        <br />
        <p>Want to play another?</p>

        <SmallInputBox />
      </div>
    );
  } else {
    return (
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <InputBox />
      </div>
    );
  }
};
