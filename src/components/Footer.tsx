const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="flex justify-center py-4">
      <p>
        Copyright: <span className="font-semibold">Kevin Dao</span> © {year}
      </p>
    </footer>
  );
};

export default Footer;
