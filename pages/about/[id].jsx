import React from "react";
import { useRouter } from "next/router";
function Developer() {
  const router = useRouter();
  const urlId = router.query.id;

  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  const data = details.filter((item) => item.id === +urlId);
  return (
    <div>
      {data.length > 0 ? (
        data.map((item) => (
          <h1 key={item.id}>
            {item.name} ----{item.role}
          </h1>
        ))
      ) : (
        <h1> {`Developer doesn't exist`}</h1>
      )}
    </div>
  );
}
export default Developer;