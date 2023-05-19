import ProfileImage from "../assets/images/img-profile.jpg";
const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="flex flex-col items-center">
          <p className="uppercase text-sm tracking-widest text-gray-600 py-2">
            Welcome to my porfollio!
          </p>
          <img
            className="rounded-lg"
            src={ProfileImage}
            alt="Profile Image"
            height={100}
            width={100}
          />

          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-indigo-600">Kevin</span>
          </h1>
          <h1 className="py-2 text-gray-700">Software Engineer</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
