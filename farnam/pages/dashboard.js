export default function Dashboard() {
    async function fetchData() {
        const response = await fetch('http://127.0.0.1:8000/api/');
        const data = await response.json();
        console.log(data);
      }
      
      fetchData();

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
}