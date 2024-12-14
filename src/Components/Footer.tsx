export const Footer = () => {
  return (
    <div className="w-full py-4 fixed bottom-0 left-0 bg-whitesmoke text-jet">
      <p>
        Powered by{" "}
        <a
          href="https://vidstack.io"
          target="_blank"
          className="underline hover:no-underline hover:opacity-60"
        >
          VidStack
        </a>
      </p>
      <p>
        made w/ 🤍 by{" "}
        <a
          href="https://suphakit.net"
          target="_blank"
          className="underline hover:no-underline hover:opacity-60"
        >
          Suphakit P.
        </a>
      </p>
    </div>
  );
};
