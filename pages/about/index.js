import Link from "next/link";
import React from "react";

function aboutUs() {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  return (
    <div>
      <h1>Hello from About Us Page</h1>
      {details.map((item) => (
        // one Way of building Link
        // <Link key={item.id} href={`/about/${item.id}`}>
        <Link 
          key={item.id}

          href={{
            pathname: "/about/[id]",
            query: { id: item.id },
          }}
        >
          <h1>{item.name}</h1>
        </Link>
      ))}
    <style jsx>{`
        h1 {
          color: black;
          margin-right: 10px; // Adjust the margin to your preference
        }
      `}</style>
    </div>
  );
}
export default aboutUs;