
import {useState, useEffect} from "react";
import Link from "next/link"
export default function HeadBar({main_blog_value, BannerText}) {
  const [closeHeadBar, setCloseHeadBar] = useState(true);
  const [mainValue, setMainValue] = useState(null);

  const listOfTypes = {'Photography': ['/directory/Photography', 'Photography']}
  const blog_header = 'Learn [Category] for free - See the top educators'

  useEffect(() => {
    if (main_blog_value) {
      let main = main_blog_value.find((e) => listOfTypes[e])
      if(main) return setMainValue(listOfTypes[main])
      setMainValue(null)
    }
  }, [main_blog_value]);

  const getCustomMessage = (value) => {
    return <div><div className="text-xs text-white sm:text-base"> <div className='inline-block'>Learn {value[1]} for free - </div><div className='underline inline-block margin-left-5'><Link href={value[0]}> See the top educators</Link></div></div></div>;
  }
  const getCurrentLinks = () => {
    return <div><div className="text-xs text-white sm:text-base"> <div className='inline-block'>Learn more about </div><div className='underline inline-block margin-left-5'><Link href={`/`}>Imaginated</Link></div></div></div>;
  }

  const getCustomSearch = (BannerText) => {
    return <div><div className="text-xs text-white sm:text-base"> <div className='inline-block'>Learn more about </div><div className='underline inline-block margin-left-5'><Link href={`/search/?query=${BannerText}`}>{BannerText}</Link></div> from credible educators</div></div>;
  }

  const getMainText = (mainValue) => {
    if(BannerText) return getCustomSearch(BannerText);
    if(mainValue) return getCustomMessage(mainValue);
    return getCurrentLinks()
  }
  return (
    
      closeHeadBar && <div><div className='h-10'></div><div className= {"fixed-pixels-top flex items-center justify-center h-10 bg-dark-blue"}>
      <div className="text-center">
        {getMainText(mainValue)}
      </div>
      <div className="absolute ml-auto right-2">
        <button onClick={() => {
          setCloseHeadBar(false);
        }} type="button" className="inline-block leading-normal text-center text-white uppercase align-middle rounded-full w-9 h-9">
        <svg className="flex content-center justify-center mx-auto" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.69546 1.71507L6.41053 5L9.69546 8.28493C9.79074 8.37695 9.86673 8.48702 9.91901 8.60873C9.97129 8.73043 9.99881 8.86133 9.99996 8.99378C10.0011 9.12624 9.97587 9.25759 9.92572 9.38019C9.87556 9.50278 9.80149 9.61416 9.70782 9.70782C9.61416 9.80149 9.50278 9.87556 9.38019 9.92572C9.25759 9.97587 9.12624 10.0011 8.99378 9.99996C8.86133 9.99881 8.73043 9.97129 8.60873 9.91901C8.48702 9.86673 8.37695 9.79074 8.28493 9.69546L5 6.41053L1.71507 9.69546C1.62305 9.79074 1.51298 9.86673 1.39127 9.91901C1.26957 9.97129 1.13867 9.99881 1.00622 9.99996C0.873763 10.0011 0.742406 9.97587 0.619811 9.92572C0.497216 9.87556 0.385837 9.80149 0.292175 9.70782C0.198512 9.61416 0.124441 9.50278 0.0742837 9.38019C0.0241261 9.25759 -0.00111332 9.12624 3.76645e-05 8.99378C0.00118865 8.86133 0.0287073 8.73043 0.0809878 8.60873C0.133268 8.48702 0.209264 8.37695 0.30454 8.28493L3.58947 5L0.30454 1.71507C0.209264 1.62305 0.133268 1.51298 0.0809878 1.39127C0.0287073 1.26957 0.00118865 1.13867 3.76645e-05 1.00622C-0.00111332 0.873763 0.0241261 0.742406 0.0742837 0.619811C0.124441 0.497216 0.198512 0.385837 0.292175 0.292175C0.385837 0.198512 0.497216 0.124441 0.619811 0.0742837C0.742406 0.0241261 0.873763 -0.00111332 1.00622 3.76645e-05C1.13867 0.00118865 1.26957 0.0287073 1.39127 0.0809878C1.51298 0.133268 1.62305 0.209264 1.71507 0.30454L5 3.58947L8.28493 0.30454C8.37695 0.209264 8.48702 0.133268 8.60873 0.0809878C8.73043 0.0287073 8.86133 0.00118865 8.99378 3.76645e-05C9.12624 -0.00111332 9.25759 0.0241261 9.38019 0.0742837C9.50278 0.124441 9.61416 0.198512 9.70782 0.292175C9.80149 0.385837 9.87556 0.497216 9.92572 0.619811C9.97587 0.742406 10.0011 0.873763 9.99996 1.00622C9.99881 1.13867 9.97129 1.26957 9.91901 1.39127C9.86673 1.51298 9.79074 1.62305 9.69546 1.71507Z" fill="white"/>
        </svg>
        </button>
      </div>
    </div>
    {mainValue?<div className="margin-bottom-35"></div>:null}
    </div>
    
  )
}