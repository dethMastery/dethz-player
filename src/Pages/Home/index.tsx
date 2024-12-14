import { useSearchParams } from "react-router-dom";
import { ErrorBox } from "../../Components/Error";
import { Player } from "../../Components/Player";
import { Footer } from "../../Components/Footer";

export const HomePage = () => {
  const [params, _setParams] = useSearchParams();

  const src = params.get("src") || params.get("link");

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-center">
      {src == "" ? <ErrorBox /> : <Player src={src} />}
      <Footer />
    </div>
  );
};
