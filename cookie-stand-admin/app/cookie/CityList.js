
import Link from "next/link";

const fetchTodos= async () =>{
	const res = await fetch("https://salmon20231005130044.azurewebsites.net/api/Cookiestands");
	const cities = await res.json();
	return cities;
}
const calculateTotal = (hourlySale) => {
	return hourlySale.reduce((sum, value) => sum + value, 0);
};
async function CityList() {
	const cities = await fetchTodos();

	return (
		
		
	
		
		<table className="border-collapse border border-green-800">
			<tr>
				<th className="border border-green-800 p-2">Location</th>
				<th className="border border-green-800 p-2">6am</th>
				<th className="border border-green-800 p-2">7am</th>
				<th className="border border-green-800 p-2">8am</th>
				<th className="border border-green-800 p-2">9am</th>
				<th className="border border-green-800 p-2">10am</th>
				<th className="border border-green-800 p-2">11am</th>
				<th className="border border-green-800 p-2">12am</th>
				<th className="border border-green-800 p-2">1pm</th>
				<th className="border border-green-800 p-2">2pm</th>
				<th className="border border-green-800 p-2">3pm</th>
				<th className="border border-green-800 p-2">4pm</th>
				<th className="border border-green-800 p-2">5pm</th>
				<th className="border border-green-800 p-2">6pm</th>
				<th className="border border-green-800 p-2">7pm</th>
				<th className="border border-green-800 p-2">Totals</th>
			</tr>	
			{cities.map((city) =>(
					<tr key={city.id}>
				<td className="border border-green-800 p-2">{city.location} </td>
				{city.hourlySale.map((h,hourIndex)=>(
					<td key={hourIndex} className="border border-green-800 p-2">{h}</td>
				))}
			<td>{calculateTotal(city.hourlySale)}</td>
					{/* <Link href={`/todos/${city.id}`}>Go</Link> */}
					</tr>
			))}
		
			</table>
			
	)
	
}
export default CityList;