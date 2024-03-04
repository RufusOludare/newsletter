interface LinksProps {
  linkDetails: { text: string; url: string }[];
}

const Links = ({ linkDetails }: LinksProps) => {
  return (
    <ul className=" flex flex-col mt-24 gap-8 pl-4">
      {linkDetails.map((link, index) => (
        <li
          key={index}
          className="list-none mb-[25px] font-sans font-normal text-xl"
        >
          <a
            className="no-underline text-slate-500 hover:text-red-400"
            href={link.url}
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Links;
