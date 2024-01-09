export default function BlogTopHeader() {
  return (
    <div className=" overflow-hidden relative flex flex-col w-full min-h-[100vh] grow bg-no-repeat bg-center bg-contain bg-[rgba(241,241,241,1)] py-24 ">
      <div
        className="flex w-full h-full bg-center bg-no-repeat bg-contain grow"
        style={{
          backgroundImage:
            'url("/assets/technology/body-wearable-headset.png")',
        }}
      ></div>
    </div>
  );
}
