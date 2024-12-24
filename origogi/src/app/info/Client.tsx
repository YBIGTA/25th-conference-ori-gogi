"use client"

import Link from "next/link";

function UnitInfo({ cat, cont, end = false }: { cat: string, cont: string, end?: boolean }) {
  return (
    <div style={{
      marginTop: 15
    }}>
      <h3 style={{
        fontSize: 17.5,
        margin: 0
      }}>{cat}</h3>
      <p style={{
        fontSize: 15,
        marginTop: 5
      }}>{cont}</p>
      {end ? <></> : <hr style={{
        margin: "0 0 0 0"
      }}/>}
    </div>
  )
}

export type Info = {
  image: string
  name: string
  location: string
  extraInfo: string
  category: string
  oneLine: string
  unitInfos: string[][]
  score: number
}

export default function InfoPageClient({
  image,
  name,
  location,
  extraInfo,
  category,
  oneLine,
  unitInfos,
  score
}: Info) {

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      borderColor: "red",
      borderWidth: 1,
      alignItems: "center",
      width: "100vw",
      color: "black"
    }}>
      <Link href="/" style={{display: "flex", padding: "0 0 0 0"}}>
        <img src="/logo.png" alt="logo" style={{height: 75, margin: 5, marginBottom: 15}}/>
      </Link>
      <div style={{position: "relative"}}>
        <img src={image} alt="restaurant" style={{width: "100vw"}}/>
        <div style={{
          position: "absolute",
          bottom: 5,
          right: 0,
          color: "white",
          padding: "17.5px 20px 5px 20px",
          borderRadius: "20px 0 0 0",
          fontSize: 15
        }} className="black-opac">
          <h2 style={{margin: 0, padding: 0, color: "white"}}>{name}</h2>
          <p>📍 {location}</p>
          <p>{extraInfo}</p>
          <p>🍽️ {category}</p>
        </div>
      </div>
      <div style={{
        border: "1px solid gray",
        borderRadius: 10,
        width: "85vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: 20,
        paddingTop: 25,
        paddingBottom: 25,
        margin: 5,
        marginTop: 35,
        position: "relative"
      }}>
        <div style={{
          position: "absolute",
          width: "88vw",
          height: 20,
          top: -14,
          display: "flex"
        }}>
          <h2 style={{
            margin: 0,
            paddingLeft: 5,
            paddingRight: 5,
            fontSize: 20,
            backgroundColor: "white"
          }}>한줄요약</h2>
        </div>
        {oneLine}
      </div>
      <div style={{
        width: "85vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: 20,
        margin: 5,
        marginTop: 65,
        position: "relative"
      }}>
        <div style={{
            position: "absolute",
            width: "88vw",
            height: 20,
            top: -14,
            display: "flex"
        }}>
          <h2 style={{
            margin: 0,
            paddingLeft: 4,
            paddingRight: 5,
            fontSize: 20,
            textDecorationLine: "underline",
            textUnderlineOffset: 5
          }}>상세 정보 </h2>
        </div>
      </div>
      <div style={{
        width: "85vw",
        marginTop: -25,
        marginBottom: 10
      }}>
        {
          unitInfos ? unitInfos.map((u, i) => <UnitInfo key={u[0]} cat={u[0]} cont={u[1]} end={i - 1 == unitInfos.length}/>) : <></>
        }
      </div>
      <div style={{
        width: "85vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: 20,
        margin: 5,
        marginTop: 50,
        position: "relative"
      }}>
        <div style={{
            position: "absolute",
            width: "88vw",
            height: 20,
            top: -14,
            display: "flex"
        }}>
          <h2 style={{
            margin: 0,
            paddingLeft: 4,
            paddingRight: 5,
            fontSize: 20,
            textDecorationLine: "underline",
            textUnderlineOffset: 5
          }}>Viral 마케팅 스코어</h2>
        </div>
        <div style={{
          fontWeight: "bold",
          fontSize: 30,
          marginTop: 7.5
        }}>
          {score}점<span style={{
            fontWeight: "lighter",
            color: "gray"
          }}> /100점</span>
        </div>
      </div>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "90vw",
        marginTop: 50
      }}>
        <button style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "0.5px solid gray",
          borderRadius: 10,
          padding: 7.5,
          marginRight: 5,
          fontSize: 12.5,
          backgroundColor: "white"
        }} onClick={() => history.back()}>
          이전으로
        </button>
      </div>
    </div>
  );
}