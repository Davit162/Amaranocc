import Skeleton from "./Skeleton";
import React, { useEffect, useState } from "react";

interface NkarData {
  src: string;
  tex: string;
  gin: string | number;
}

export default function Nkar() {
  const [data, setData] = useState<NkarData[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://amaranocfirebasa-default-rtdb.firebaseio.com/dbimg.json"
    );

    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        const parsed: NkarData[] = JSON.parse(xhr.responseText);


        setData(parsed);

        setTimeout(() => {
          setLoading(false);
        }, 2500);
      }
    };

    xhr.send();
  }, []);

  return (
    <div className="nkarinfo">
      {loading ? (
        <>
          {(data?.length ? data : new Array(3).fill(null)).map((_, i) => (
            <Skeleton key={i} margin="5px" width="300px" height="300px" />
          ))}
        </>
      ) : (
        data?.map((el, index) => (
          <div key={index} className="nkarimg">
            <img src={el.src} className="img" alt={el.tex} />
            <p className="namecountry">{el.tex}</p>
            <p style={{ color: "gray" }}>{el.gin}</p>
          </div>
        ))
      )}
    </div>
  );
}
