const Review = () => {
  return (
    <div>
      <div className="flex flex-col h-screen justify-between py-4">
        {/* Top of screen (below nav bar) */}
        <div className="flex justify-between items-center px-4">
          {/* Review button */}
          {/* NOTE: for now, this link is appearance only and will likely be refactored */}
          <a href="#" className="rounded-lg bg-blue-500 hover:bg-blue-600 px-5 py-3 text-md font-medium text-white transition focus:outline-none focus:ring">
            Review
          </a>
        
          {/* Professor dropdown */}
          <div className="relative inline-flex self-center">
            {/* svg dropdown arrow */}
            <svg className="bg-white absolute top-0 right-0 m-2 pointer-events-none p-2 rounded" width="34px" height="34px" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>

            {/* Professor list */}
            <select className="text-xl font-semibold rounded border-2 border-blue-500 h-12 w-45 pl-5 pr-10 bg-white appearance-none">
              <option>Dr.Professor</option>
              <option>Dr.Example</option>
              <option>Dr.LoremIpsum</option>
            </select>
          </div>
        </div>
        
        {/* Additional comment box + post button */}
        {/* NOTE: for now, this lives on Review.jsx, but this will be moved to the "writing review page" */}
        <div className="flex justify-center w-full pb-40">
          <div>
            <textarea placeholder="Add additional comments..." className="p-2 focus:outline-1 focus:outline-blue-500 border-[0.1px] resize-none h-[120px] border-[#9EA5B1] rounded-md w-[60vw]"></textarea>
            <div className="flex justify-end">
              <button className="text-sm font-semibold absolute bg-blue-500 hover:bg-blue-600 w-fit text-white py-2 rounded px-3">Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Review;