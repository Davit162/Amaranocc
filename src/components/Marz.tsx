import React, { useEffect, useState } from "react";
import { useMarzStore } from "../store/marzStore";

interface MarzData {
  name: string;
  qanak: number | string;
}

export default function Marz() {
  const [data, setData] = useState<MarzData[]>([]);
  const { selected, toggle, clear } = useMarzStore();

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://amaranocfirebasa-default-rtdb.firebaseio.com/db.json"
    );
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        const res: MarzData[] = JSON.parse(xhr.responseText);
        setData(res);
      }
    };
    xhr.send();
  }, []);

  return (
    <div className="marz space-y-2">

      {data.map((el, index) => (
        <label key={index} className="block cursor-pointer">
          <input
            type="checkbox"
            checked={selected.includes(el.name)}
            onChange={() => toggle(el.name)}
          />
          {" " + el.name + " (" + el.qanak + ")"}
        </label>
      ))}

     
    </div>
  );
}