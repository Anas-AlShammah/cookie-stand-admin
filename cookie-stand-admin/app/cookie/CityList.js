
import Link from "next/link";
const fetchTodos = async () => {
  try {
    const res = await fetch("https://salmon20231005130044.azurewebsites.net/api/Cookiestands", {
			cache: "force-cache",
		});
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const cities = await res.json();
		

    return cities;
  } catch (error) {
    // Handle any errors that occur during the fetch.
    console.error("An error occurred while fetching data:", error);
    return []; // Return an empty array or handle the error as needed.
  }
};
const calculateTotal = (hourlySale) => {
	return hourlySale.reduce((sum, value) => sum + value, 0);
};
async function CityList() {
	const cities = await fetchTodos();
	return (
		
		
	
		
		<table className="border-collapse border border-green-800">
			<thead>
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
			</thead>
			
				{cities && (
						<tbody>

				
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
		</tbody>
		)}
			</table>
			
	)
	
}
export default CityList;