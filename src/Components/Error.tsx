import { SmallInputBox } from "./Input";

export const ErrorBox = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <div className="min-w-[18rem] max-w-[22rem] px-4 py-6 bg-whitesmoke text-jet rounded-sm">
        <h1 className="text-2xl text-[#fe0000] font-bold mb-2">Error</h1>
        <p>Your Link is leave blank or can't reach. Please try again.</p>
      </div>
      <SmallInputBox />
    </div>
  );
};
