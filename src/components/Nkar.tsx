// import React, { useEffect, useState } from "react";
// import Skeleton from "./Skeleton";
// import { useMarzStore } from "../store/marzStore";
// import Likes from "./Likes";

// interface NkarData {
//   src: string;
//   tex: string;
//   gin: string | number;
//   people: number;
// }

// export default function Nkar() {
//   const [data, setData] = useState<NkarData[] | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [columns, setColumns] = useState(3);
//   const [search, setSearch] = useState("");

//   const { selected } = useMarzStore();

//   useEffect(() => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(
//       "GET",
//       "https://amaranocfirebasa-default-rtdb.firebaseio.com/dbimg.json"
//     );

//     xhr.onreadystatechange = () => {
//       if (xhr.status === 200 && xhr.readyState === 4) {
//         const parsed: NkarData[] = JSON.parse(xhr.responseText);
//         setData(parsed);

//         setTimeout(() => {
//           setLoading(false);
//         }, 2500);
//       }
//     };

//     xhr.send();
//   }, []);

//   const filteredData = data?.filter((el) =>
//     (selected.length > 0 ? selected.includes(el.tex) : true) &&
//     el.tex.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
      // <div style={{ display: "grid", gridTemplateColumns: "500px 400px" }}>
      //   <div style={{ margin: "20px 0" }}>
      //     <input
      //       type="text"
      //       placeholder="Search..."
      //       value={search}
      //       onChange={(e) => setSearch(e.target.value)}
      //       style={{
      //         padding: "10px",
      //         width: "50%",
      //         border: "1px solid #ccc",
      //         borderRadius: "5px",
      //       }}
      //     />
      //   </div>

      //   <div style={{ display: "flex", marginBottom: "20px", marginLeft: "80%", marginTop: "20px", height: "50px" }}>
      //     <button
      //       onClick={() => setColumns(2)}
      //       style={{
      //         padding: "10px 20px",
      //         marginRight: "10px",
      //         backgroundColor: columns === 2 ? "#b34e0bff" : "#ccc",
      //         color: columns === 2 ? "#fff" : "#000",
      //         border: "none",
      //         borderRadius: "5px",
      //         cursor: "pointer",
      //       }}
      //     >
      //       2
      //     </button>
      //     <button
      //       onClick={() => setColumns(3)}
      //       style={{
      //         padding: "10px 20px",
      //         backgroundColor: columns === 3 ? "#b34e0bff" : "#ccc",
      //         color: columns === 3 ? "#fff" : "#000",
      //         border: "none",
      //         borderRadius: "5px",
      //         cursor: "pointer",
      //       }}
      //     >
      //       3
      //     </button>
      //   </div>
      // </div>
//       <div
//         style={{
//           width: "50vw",
//           display: "grid",
//           gridTemplateColumns: `repeat(${columns}, 1fr)`,
//           gap: "20px",
//         }}
//       >
//         {loading ? (
//           <>
//             {(data?.length ? data : new Array(3).fill(null)).map((_, i) => (
//               <Skeleton key={i} margin="5px" width="300px" height="300px" />
//             ))}
//           </>
//         ) : filteredData && filteredData.length > 0 ? (
//           filteredData.map((el, index) => (
//   <div className="home">
//     <div >
//       <img
//         src={el.src}
//         alt={el.tex}
//         style={{width:"100%~"}}
//       />
//     </div>
//     <div >
//       <div style={{marginLeft:"15px",display:"grid",gridTemplateColumns:"auto auto auto"}}>
//         <div>
//            <i style={{margin:"3px"}} className="fa-solid fa-location-dot "></i>
//           <span style={{margin:"3px"}}>{el.tex}</span>
//         </div>
//         <div >
//            <i style={{margin:"3px"}} className="fa-solid fa-user-group "></i>
//           <span style={{margin:"3px"}}>{el.people}</span>
//         </div>
//         <div>
//           <i style={{margin:"3px"}} className="fa-solid fa-star "></i>
//           <span style={{margin:"3px"}}>5</span>
//         </div>
//       </div>

//           <div style={{textAlign:"center"}}>
//           <p >
//             {el.gin} <span>֏</span>
//           </p>

//             <Likes nkar={el} />
//           </div>
//     </div>
//   </div>

// ))
//         ) : (
//           <p>Առաջարկներ չեն գտնվել</p>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { useMarzStore } from "../store/storeMarz";
import Likes from "./Likes";

interface NkarData {
  src: string;
  tex: string;
  gin: string | number;
  people: number;
}

export default function Nkar() {
  const [data, setData] = useState<NkarData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState(3);
  const [search, setSearch] = useState("");

  const { selected, count } = useMarzStore();

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

  const filteredData = data?.filter(
    (el) =>
      (selected.length > 0 ? selected.includes(el.tex) : true) &&
      el.tex.toLowerCase().includes(search.toLowerCase()) &&
      el.people >= count
  );

  return (
    <div className="home">


      <div style={{ display: "grid", gridTemplateColumns: "500px 400px" }}>
        <div style={{ margin: "20px 0" }}>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "10px",
              width: "50%",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ display: "flex", marginBottom: "20px", marginLeft: "80%", marginTop: "20px", height: "50px" }}>
          <button
            onClick={() => setColumns(2)}
            style={{
              padding: "10px 20px",
              marginRight: "10px",
              backgroundColor: columns === 2 ? "#b34e0bff" : "#ccc",
              color: columns === 2 ? "#fff" : "#000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            2
          </button>
          <button
            onClick={() => setColumns(3)}
            style={{
              padding: "10px 20px",
              backgroundColor: columns === 3 ? "#b34e0bff" : "#ccc",
              color: columns === 3 ? "#fff" : "#000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            3
          </button>
        </div>
      </div>
      <div
        style={{
          width: "50vw",
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "20px",
        }}
      >
        {loading ? (
          <>
            {(data?.length ? data : new Array(3).fill(null)).map((_, i) => (
              <Skeleton key={i} margin="5px" width="300px" height="300px" />
            ))}
          </>
        ) : filteredData && filteredData.length > 0 ? (
          filteredData.map((el, index) => (
            <div className="home">
              <div >
                <img
                  src={el.src}
                  alt={el.tex}
                  style={{ width: "100%~" }}
                />
              </div>
              <div >
                <div style={{ marginLeft: "15px", display: "grid", gridTemplateColumns: "auto auto auto" }}>
                  <div>
                    <i style={{ margin: "3px" }} className="fa-solid fa-location-dot "></i>
                    <span style={{ margin: "3px" }}>{el.tex}</span>
                  </div>
                  <div >
                    <i style={{ margin: "3px" }} className="fa-solid fa-user-group "></i>
                    <span style={{ margin: "3px" }}>{el.people}</span>
                  </div>
                  <div>
                    <i style={{ margin: "3px" }} className="fa-solid fa-star "></i>
                    <span style={{ margin: "3px" }}>5</span>
                  </div>
                </div>

                <div style={{ textAlign: "center" }}>
                  <p >
                    {el.gin} <span>֏</span>
                  </p>

                  <Likes nkar={el} />
                </div>
              </div>
            </div>

          ))
        ) : (
          <p>Առաջարկներ չեն գտնվել</p>
        )}
      </div>
    </div>
  );
}