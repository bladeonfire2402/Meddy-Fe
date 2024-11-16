const StoreBlock = ({ store, func }) => {
    return (
        <div className="flex gap-4 items-center rounded-xl px-4 py-5 shadow-md shadow-blue-300">
            {/* Store Image */}
            <div className="rounded-full overflow-hidden size-28">
                <img className="size-40" src={store.image} alt={store.city} />
            </div>

            {/* Store Details */}
            <div className="w-9/12 flex flex-col gap-2">
                <h1 className="text-orange-500 text-xl font-semibold">{store.city}</h1>
                <p className="text-gray-400">{store.location}</p>
                <button
                    className="text-white bg-orange-500 px-3 py-1 rounded-xl"
                    onClick={() => func()}
                >
                    Xem địa chỉ
                </button>
            </div>
        </div>
    );
};

export default StoreBlock;
