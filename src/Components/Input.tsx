import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertFunction } from "./Alert";

export const InputBox = () => {
  const navigate = useNavigate();
  const [link, setLink] = useState<string>();

  return (
    <div className="min-w-[18rem] max-w-[22rem] bg-whitesmoke px-2 py-4 rounded-sm flex flex-col gap-4">
      <input
        type="text"
        className="text-center text-jet py-2 px-4 focus:rounded-t-xl rounded-sm border-solid border-2 border-jet focus:border-living-coral outline-none"
        placeholder="Input Link"
        onChange={(e) => setLink(e.target.value)}
        required
      />
      <button
        className="px-4 py-2 bg-jet hover:bg-living-coral hover:rounded-b-lg rounded-sm w-[70%] mx-auto"
        onClick={() =>
          link != undefined
            ? navigate(`/?src=${link}`)
            : AlertFunction(false, "Please fill source link.")
        }
      >
        Go
      </button>
    </div>
  );
};

export const SmallInputBox = () => {
  const navigate = useNavigate();
  const [link, setLink] = useState<string>();

  return (
    <div className=" bg-whitesmoke px-2 py-4 rounded-sm flex flex-row gap-1">
      <input
        type="text"
        className="text-center text-jet py-2 px-4 focus:rounded-l-xl rounded-sm border-solid border-2 border-jet focus:border-living-coral outline-none"
        placeholder="Input Link"
        onChange={(e) => setLink(e.target.value)}
        value={link}
        required
      />
      <button
        className="px-4 py-2 bg-jet hover:bg-living-coral hover:rounded-r-lg rounded-sm"
        onClick={() => {
          navigate(`/?src=${link}`);
          setLink("");
        }}
      >
        Go
      </button>
    </div>
  );
};
