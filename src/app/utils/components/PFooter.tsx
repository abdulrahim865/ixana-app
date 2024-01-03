export const PFooter = () => {
  return (
    <div
      className="relative flex w-full min-h-[60vh] text-black bg-contain bg-no-repeat py-12 justify-center rounded-t-3xl  px-12 lg:px-0"
      style={{
        background:
          "url(/assets/home/footer-pattern.svg) no-repeat left bottom, linear-gradient(180deg, #E4E5E7 -45.62%, #FFF 100%)",
        backgroundSize: "500px",
        backgroundPositionX: "100px",
        backgroundPositionY: "80%",
      }}
    >
      <div className="flex flex-col justify-between gap-5 px-5  lg:flex-row lg:px-0 lg:gap-0">
        <div className="flex justify-between gap-5 basis-[50%]">
          <div className="flex flex-col justify-between w-full lg:flex-row gap-5 lg;gap-0">
            <div className="flex flex-col">
              <h5 className="font-medium text-md">Home</h5>
            </div>

            <div className="flex flex-col">
              <h5 className="font-medium text-md">About us</h5>
            </div>
            <div className="flex flex-col ">
              <h5 className="font-medium text-md">Our Technology</h5>
              <div className="flex flex-col">
                <a className="text-sm font-light " href="#">
                  Wi-R Technology
                </a>
                <a className="text-sm font-light " href="#">
                  Ixana Products
                </a>
              </div>
            </div>
            <div className="flex flex-col ">
              <h5 className="font-medium text-md">Tech Insights</h5>
              <div className="flex flex-col">
                <a className="text-sm font-light" href="#">
                  Blog/Case Studies
                </a>
                <a className="text-sm font-light" href="#">
                  News
                </a>
                <a className="text-sm font-light" href="#">
                  FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 basis-[30%] items-center justify-center">
          <div className="flex flex-col">
            <h2 className="text-3xl font-light ">
              Stay updated about the latest from Ixana.
            </h2>
            <div className="flex flex-col gap-3">
              <span className="text-sm ">Your email address</span>
              <div className="flex gap-1 5">
                <input
                  type="text"
                  className="p-1.5 px-5 text-sm rounded-full basis-2/3 border-gray-900"
                  placeholder="Your email address"
                />
                <button className="px-3 Pbutton">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
