import Link from "next/link";
import "../../styles/globals.css";
import Header from "./header";
export default function Page() {
  return (
    <>
<Header/>
      <Link href='/login' > <h1 className="text-2xl bg-red-500">Next 13!</h1></Link> 
    </>
  );
}
