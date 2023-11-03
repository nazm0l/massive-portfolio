"use client";

const LoginProvider = () => {
  return (
    <div>
      <div>
        {/* login with google with icon */}
        <button
          onClick={() => alert("Logged in clicked")}
          className="bg-[#ff1e1e] text-white p-3 rounded-md mr-2"
        >
          Login with Google
        </button>
        {/* login with github */}
        <button
          onClick={() => alert("Github in clicked")}
          className="bg-[#ff1e1e] text-white p-3 rounded-md"
        >
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default LoginProvider;
