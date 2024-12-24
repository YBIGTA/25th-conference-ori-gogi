"use client"

import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

function OptionButton({ text }: { text: string }) {
  return (
    <button style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "0.5px solid gray",
      borderRadius: 7.5,
      width: "25vw",
      padding: 2.5,
      marginRight: 5,
      fontSize: 12.5,
      backgroundColor: "white"
    }}>
      {text}
    </button>
  )
}

function SearchBar() {
  const [i, setI] = useState("")

  return (
    <>
      <div style={{
        border: "0.5px solid gray",
        borderRadius: 5,
        width: "85vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: 5,
        margin: 5
      }}>
        <div style={{width: 20}}></div>
        <input
          type="text"
          placeholder="궁금한 식당명을 검색하세요."
          style={{
            width: "100%",
            border: "none transparent",
            outline: "none",
            textAlign: "center",
            fontSize: 12.5
          }}
          onChange={e => setI(e.target.value)}
          onKeyDown={e => {
            if (e.key == "Enter") {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              redirect(`/info?name=${i}`, "push")
            }
          }}
        />
        <Link href={`/info?name=${i}`} style={{display: "flex", padding: "0 0 0 0"}}>
          <img src="/search.svg" style={{
            width: 17.5,
            height: 17.5,
            marginLeft: 2.5
          }} alt="search"/>
        </Link>
      </div>
      <div style={{
        width: "87vw",
        height: 25,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 1
      }}>
        <OptionButton text="지역"/>
        <OptionButton text="식당 종류"/>
        <OptionButton text="가격대"/>
      </div>
    </>
  )
}

function InterRest({ no, name }: { no: number, name: string }) {
  return (
    <a href={`/info?name=${name}`} style={{
      color: "black",
      textDecoration: "none"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5
      }}>
        <h4 style={{
          fontSize: 15,
          fontWeight: "bold",
          margin: "0 0 0 0"
        }}>{no}</h4>
        <div style={{
          marginLeft: 10,
          marginBottom: -1,
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontSize: 12.5
        }}>
          <span>{name}</span>
        </div>
      </div>
      <hr style={{
        margin: "0 0 0 0"
      }}/>
    </a>
  )
}

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      borderColor: "red",
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      height: "100vh",
      color: "black"
    }}>
      <div style={{
        display: "inherit",
        flexDirection: "inherit",
        alignItems: "inherit",
        marginBottom: 10
      }}>
        <img src="/logo.png" alt="logo" style={{width: "75vw"}}/>
        <p style={{
          fontWeight: "lighter",
          fontSize: 15,
          margin: "0 0 0 0",
          marginTop: -5
        }}>정직한 리뷰, 당신을 위한 맛집 가이드</p>
      </div>
      <SearchBar/>

      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 60
      }}>
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }}>
          <h3 style={{
            fontSize: 16,
            margin: "0 0 0 0",
            marginBottom: 4
          }}>관심 급상승 식당</h3>
          <img src="/chart.png" style={{
            width: 15,
            height: 15,
            marginLeft: 6,
            marginBottom: 5
          }} alt="icon"/>
        </div>
        <div style={{maxWidth: "50vw"}}>
          <InterRest no={1} name="오늘통닭"/>
          <InterRest no={2} name="미진축산"/>
          <InterRest no={3} name="김밥천국 이대점"/>
        </div>
      </div>
    </div>
  );
}
