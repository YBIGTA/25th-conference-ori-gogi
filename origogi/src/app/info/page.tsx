import InfoPageClient, { Info } from "./Client"

type Res = {
  realname: string
  ratio: number
  answer: string
  g_name: string[][]
}

function getRestBasicInfos(gName: string[]): {
  image: string | null,
  location: string,
  extraInfo: string,
  category: string
} {
  return {
    image: gName[3],
    location: gName[0],
    extraInfo: `⭐ ${gName[1]}`,
    category: gName[2]
  }
}

function getUnitInfos(answer: string): {
  oneLine: string,
  unitInfos: string[][]
} {
  const json = JSON.parse(answer)
  const oneLine = json["요약"]
  const unitInfos: string[][] = []

  for (const [k, v] of Object.entries(json["상세 정보"])) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const vv = typeof v === 'string' ? v : v.join(", ")
    unitInfos.push([k, vv])
  }

  return {
    oneLine, unitInfos
  }
}

async function getInfos(name: string): Promise<Info | null> {
  const form = new FormData()
  form.append("name", name)
  const res = await fetch(
    process.env.BACKEND + "/number",
    {
      method: "POST",
      body: form,
    }
  )

  if (!res.ok) {
    return null
  } else {
    try {
      const { realname, ratio, answer, g_name }: Res = await res.json()
      console.log(realname, ratio, answer, g_name)

      const { image, location, extraInfo, category } = getRestBasicInfos(g_name[0])
      console.log(image, location, extraInfo, category)
      const { oneLine, unitInfos } = getUnitInfos(answer)

      return {
        image: image,
        name: realname,
        location: location,
        extraInfo: extraInfo,
        category: category,
        oneLine: oneLine,
        unitInfos: unitInfos,
        score: ratio
      }
    } catch (e) {
      console.log(e)
      return null
    }
  }
}

export default async function InfoPage(props: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const infos = await getInfos((await props.searchParams).name ?? "")

  return (
    infos ?
    <InfoPageClient {...infos} /> :
    <div>
      Error in parsing response
    </div>
  )
}