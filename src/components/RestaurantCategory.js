const RestaurantCategory=(data)=>{
    console.log(data)
    return <div className="w-full bg-gray-50 shadow-lg p-4">
        <span>{data?.title}</span>
          <span>⬇️</span>
    </div>
}

export default RestaurantCategory;