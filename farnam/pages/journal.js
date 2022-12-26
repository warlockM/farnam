import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Journal(){
    return (
      <div>
        <Navbar />
        <form>
            <div class="grid grid-cols-1 p-10 space-y-4">
            <input class="border-2 border-black p-2" type="text" placeholder="Title" />
            <input class="border-2 border-black p-2" type="text" placeholder="Description" />
            <input class="border-2 border-black p-2" type="text" placeholder="Decision" />
            <input class="border-2 border-black p-2" type="text" placeholder="Outcome" />
            <input class="border-2 border-black p-2" type="text" placeholder="Date" />
            <input class="border-2 border-black p-2" type="text" placeholder="Tags" />
            <input class="border-2 border-black p-2" type="text" placeholder="Notes" />
            <button class="bg-blue-500 text-white p-2 rounded-md">Submit</button>
            </div>
        </form>
        <Footer />
      </div>
    );
}