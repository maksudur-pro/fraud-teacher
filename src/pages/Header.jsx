import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {
  const navigate = useNavigate();
  const { user, logOut, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-white">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <div className="navbar bg-transparent shadow-sm px-4 md:px-8 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {user && (
                <li>
                  <h1 className="text-[14px] font-semibold my-4 block md:hidden lg:hidden border-b-[1px] border-black rounded-none">
                    Hello,
                    <br />
                    {user?.displayName}
                  </h1>
                </li>
              )}
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="btn text-white  bg-[#f1961f] hover:bg-[#f59d2a]  mb-2">
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/report")}
                  className="btn text-white bg-[#f1961f] hover:bg-[#f59d2a]  mb-2">
                  Report
                </button>
              </li>
              {user && (
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn text-white bg-[#f1961f] hover:bg-[#f59d2a]  mb-2">
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
          <h1
            onClick={() => navigate("/")}
            className="text-center font-bold cursor-pointer hidden md:block lg:block">
            <span className="text-2xl uppercase text-[#fdbe2e]">
              Safe <span className="text-black">Tuition</span>
            </span>
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button
                onClick={() => navigate("/")}
                className="btn text-white bg-[#f1961f] hover:bg-[#f59d2a]  mb-2">
                Home
              </button>
            </li>

            <li className="mx-4">
              <button
                onClick={() => navigate("/report")}
                className="btn text-white bg-[#f1961f] hover:bg-[#f59d2a]  mb-2">
                Report
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/report")}
                className="btn text-white bg-[#f1961f] hover:bg-[#f59d2a]  mb-2">
                About
              </button>
            </li>
          </ul>
        </div>

        {user ? (
          <>
            <div className="navbar-end cursor-pointer">
              <h1 className="text-lg font-semibold mr-8 hidden md:block lg:block">
                Hello,
                <br />
                {user?.displayName}
              </h1>
              <button
                onClick={handleLogout}
                className="btn text-white bg-[#f1961f] hover:bg-[#f59d2a]  mb-2 hidden md:block lg:block">
                Logout
              </button>
              <h1
                onClick={() => navigate("/")}
                className="text-center font-bold cursor-pointer block md:hidden lg:hidden">
                <span className="text-2xl uppercase text-[#fdbe2e]">
                  Safe <span className="text-black">Tuition</span>
                </span>
              </h1>
            </div>
          </>
        ) : (
          <>
            <div
              onClick={() => navigate("/login")}
              className="navbar-end cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="mr-3 w-6 h-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"></path>
              </svg>

              <button className="btn  text-white bg-[#f1961f] mb-2 hover:bg-[#f59d2a]">
                Login
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
