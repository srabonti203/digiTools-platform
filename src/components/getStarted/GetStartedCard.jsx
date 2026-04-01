const GetStartedCard = ({ data }) => {
  return (
    <div className="w-80 h-auto p-4 shadow-sm rounded-xl space-y-3 flex flex-col items-center">
      <div className="w-6 h-6 text-white rounded-full bg-linear-to-r from-indigo-800 to-purple-900 flex items-center justify-center self-end">
        <div>{data.id}</div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-3">
        <div className="bg-indigo-600/15 p-2 rounded-full">
          <img src={data.image} alt="" />
        </div>
        <h3 className="text-xl font-bold">{data.name}</h3>
        <p className="text-center">{data.description}</p>
      </div>
    </div>
  );
};

export default GetStartedCard;
