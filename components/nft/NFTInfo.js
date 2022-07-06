const NFTInfo = ({ selectedNft }) => {
  return (
    <>
      <div
        class="overflow-y-auto mt-8"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div class="flex items-end justify-center min- px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div
            class="transition-opacity bg-gray-500 bg-opacity-75"
            aria-hidden="true"
          ></div>
          <span
            class="hidden sm:inline-block sm:align-middle sm:"
            aria-hidden="true"
          >
            ​
          </span>
          <div class="inline-block p-5 overflow-hidden text-left align-bottom transition-all transform bg-purple-200 rounded-lg lg:p-16 sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
            <img src={selectedNft?.image} alt="" />
            <div className="text-black pt-2">{selectedNft?.name}</div>
            <div className="text-black">{selectedNft?.price}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTInfo;
