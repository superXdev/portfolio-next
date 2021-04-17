function Footer({ githubLink, children }) {
  const years = new Date().getFullYear();

  return (
    <footer className="font-light absolute bottom-0 left-0 right-0 sm:right-20 xl:right-0 flex flex-col sm:items-end  pb-3 cursor-default sm:text-base items-center text-xs">
      
      <div>
        <a href={githubLink} target="blank">
          {children}
        </a>{" "}
        &copy; {years}
      </div>
    </footer>
  );
}

export default Footer;
