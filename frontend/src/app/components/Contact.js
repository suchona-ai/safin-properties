import BlogFooter from "./BlogFooter";
import Header from "./Header";


const Contact = () => {
  return (
    <div className="bg-white">
      <Header />
      <MainContent />
     
      <BlogFooter />
    </div>
  );
};


const MainContent = () => {
  return (
    <main className="container min-h-screen px-4 py-8  mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <ContactInfo />
        <FreeEvaluationForm />
      </div>
    </main>
  );
};

const ContactInfo = () => {
  return (
    <div className="md:w-1/2 mb-8 md:mb-0">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-600 mb-2">Address: 123 London Street, London, UK</p>
      <p className="text-gray-600 mb-2">Phone: +44 20 7946 0958</p>
      <p className="text-gray-600">Email: info@londonassets.com</p>
    </div>
  );
};




const IconButton = () => {
    return (
      <button
        style={{
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '39px',
          height: '39px',
          border: '0',
          boxSizing: 'border-box',
          borderRadius: '24px',
          color: '#ffffff',
          backgroundColor: '#ff4632',
          outline: 'none',
        }}
      >
        <svg
          style={{
            color: '#ffffff',
            fill: '#ffffff',
            width: '14px',
            height: '14px',
            fontSize: '14px',
          }}
          viewBox="0 0 512 512"
        >
          <path d="M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM325.1 306.7L380.6 162.4C388.1 142.1 369 123.9 349.6 131.4L205.3 186.9C196.8 190.1 190.1 196.8 186.9 205.3L131.4 349.6C123.9 369 142.1 388.1 162.4 380.6L306.7 325.1C315.2 321.9 321.9 315.2 325.1 306.7V306.7z"></path>
        </svg>
      </button>
    );
  };










const FreeEvaluationForm = () => {
    return (
      <div className="md:w-1/2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Request a Free Evaluation</h2>
          <IconButton />
        </div>
        
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-full"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-full"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };


export default Contact;