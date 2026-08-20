import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    // min-h-screen и flex-col футер всегда будет внизу
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* flex-1 займет всё свободное пространство */}
      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;