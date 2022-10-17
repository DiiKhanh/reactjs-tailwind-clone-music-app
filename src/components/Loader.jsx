import {loader} from "../assets/index"

const Loader = ({title}) => (
  <div className="w-full flex flex-col justify-center items-center">
    <img src={loader} alt="loader" className="w-32 h-32 object-contain"/>
    <h1 className="text-2xl font-bold text-white mt-2">{title || 'loading ...'}</h1>
  </div>
);

export default Loader;
