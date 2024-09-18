

const PopularTopics = () => {
  return (
    <>
      <h3 className="text-3xl text-gray-900 font-semibold text-center">
        Popular Topics
      </h3>
      <div className="w-full md:container flex items-center justify-between flex-wrap gap-3 my-3">
        <ul className="flex flex-col  gap-3 list-disc">
          <li className="text-gray-900 text-base ">How do I return my item?</li>
          <li className="text-gray-900 text-base ">
            What is Clicons Returns Policy?
          </li>
          <li className="text-gray-900 text-base ">
            How long is the refund process?
          </li>
        </ul>
        <ul className="flex flex-col  gap-3 list-disc">
          <li className="text-gray-900 text-base ">
            What are the 'Delivery Timelines'?
          </li>
          <li className="text-gray-900 text-base ">
            What is 'Discover Your CLiron Campaign 2022'?
          </li>
          <li className="text-gray-900 text-base ">
            What is the Voucher & Gift Offer in this Campaign?
          </li>
        </ul>
        <ul className="flex flex-col  gap-3 list-disc">
          <li className="text-gray-900 text-base ">
            How to cancel Clicon Order.
          </li>
          <li className="text-gray-900 text-base ">
            Ask the Digital and Device Community
          </li>
          <li className="text-gray-900 text-base ">
            How to change my shop name?
          </li>
        </ul>
      </div>
    </>
  );
}

export default PopularTopics