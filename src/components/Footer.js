
const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="lg:bg-yellow-100 items-center h-10 content-center text-center sm:bg-pink-200">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Lokesh Kaligatla</strong>
      </p>
    </footer>
  );
};

export default Footer;