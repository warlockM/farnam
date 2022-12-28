export default function Navbar() {
    return (
      <div class="flex flex-wrap justify-between space-x-5 p-5 bg-slate-400">
        <div class="flex justify-start">
            <img src="/back.png" width={36} height={48}></img>
        </div>
        <div class="flex space-x-4">
        <a href="http://127.0.0.1:8000/login"><h1 class="bg-blue-700 p-3 text-white text-lg rounded-md">Login</h1></a>
        <h1 class="bg-blue-700 p-3 text-white text-lg rounded-md">Signup</h1>
        </div>
      </div>
    );
}