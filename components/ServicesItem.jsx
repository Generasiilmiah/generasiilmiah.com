function ServicesItem(props) {
  return (
    <div className="h-64 bg-gray-400 rounded-xl p-6 mb-4 flex items-end">
      <div>
        <h4 className="font-bold mb-2 text-lg">{props.title}</h4>
        <p className="text-sm">{props.children}</p>
      </div>
    </div>
  );
}

export default ServicesItem;
