"use client";
import useOnStart from "@/hooks/useOnStart";
import axios from "axios";
import styles from "./page.module.css";
import { useState } from "react";

export interface DataType {
  address: string;
  name: string;
}

type OriginData = {
  baseYm: "202408";
  tAtsNm: "경교장";
  areaCd: number;
  areaNm: "서울특별시";
  sigunguCd: number;
  sigunguNm: "종로구";
  rlteTatsNm: "롯데호텔L7/강남";
  rlteRegnCd: "11";
  rlteRegnNm: "서울특별시";
  rlteSignguCd: "11680";
  rlteSignguNm: "강남구";
  rlteBsicAdres: "서울 강남구 테헤란로 415-0";
  rlteCtgryLclsNm: "숙박";
  rlteCtgryMclsNm: "숙박";
  rlteCtgrySclsNm: "호텔";
  rlteRank: "1";
};

const defaultOrigin: OriginData = {
  baseYm: "202408",
  tAtsNm: "경교장",
  areaCd: 0,
  areaNm: "서울특별시",
  sigunguCd: 0,
  sigunguNm: "종로구",
  rlteTatsNm: "롯데호텔L7/강남",
  rlteRegnCd: "11",
  rlteRegnNm: "서울특별시",
  rlteSignguCd: "11680",
  rlteSignguNm: "강남구",
  rlteBsicAdres: "서울 강남구 테헤란로 415-0",
  rlteCtgryLclsNm: "숙박",
  rlteCtgryMclsNm: "숙박",
  rlteCtgrySclsNm: "호텔",
  rlteRank: "1",
};

const Codi = () => {
  const [data, setData] = useState<Map<string, OriginData[]>>(
    new Map([["", [defaultOrigin]]])
  );
  const [namemap, setNamemap] = useState<Map<string, number>>(
    new Map([["서울특별시", 11]])
  );
  const [region, setRegion] = useState("서울특별시");
  const [signNm, setSignNm] = useState(11110);
  const [total, setTotal] = useState<DataType[]>();



  const OnClick = async () => {
    const temp = await axios.post("/api/search", 
      {
        Region: namemap.get(region),
        Sign: signNm,
      },
      
    );
    const result = temp.data.response.body.items;
    const total: [DataType] = [
      {
        address: result.item[0].rlteBsicAdres,
        name: result.item[0].rlteTatsNm,
      },
    ];
    for (let i = 1; i < result.item.length; ++i) {
      total.push({
        address: `${result.item[i].rlteBsicAdres}`,
        name: `${result.item[i].rlteTatsNm}`,
      });
    }
    setTotal(total);

    console.log(total);
  };

  useOnStart(async () => {
    namemap.clear();
    data.clear();

    const result = await axios.get("/api/excel");
    const seoul = result.data.filter((item: OriginData) => item.areaCd === 11);
    const list: Map<string, OriginData[]> = new Map([["서울특별시", seoul]]);

    const busan = result.data.filter((item: OriginData) => item.areaCd === 26);
    const templist: [OriginData[]] = [busan];

    templist.push(result.data.filter((item: OriginData) => item.areaCd === 27));
    templist.push(result.data.filter((item: OriginData) => item.areaCd === 28));
    templist.push(result.data.filter((item: OriginData) => item.areaCd === 29));
    templist.push(result.data.filter((item: OriginData) => item.areaCd === 30));
    templist.push(result.data.filter((item: OriginData) => item.areaCd === 31));
    templist.push(result.data.filter((item: OriginData) => item.areaCd === 36));
    templist.push(result.data.filter((item: OriginData) => item.areaCd === 41));
    templist.push(result.data.filter((item: OriginData) => item.areaCd === 43));
    templist.push(result.data.filter((item: OriginData) => item.areaCd === 44));
    templist.push(result.data.filter((item: OriginData) => item.areaCd === 46));
    templist.push(result.data.filter((item: OriginData) => item.areaCd === 47));
    templist.push(result.data.filter((item: OriginData) => item.areaCd === 48));
    templist.push(result.data.filter((item: OriginData) => item.areaCd === 50));
    templist.push(result.data.filter((item: OriginData) => item.areaCd === 51));
    templist.push(result.data.filter((item: OriginData) => item.areaCd === 52));
    for (let i = 0; i < templist.length; ++i) {
      list.set(templist[i][0].areaNm, templist[i]);
    }
    setData(list);

    const keys = list.keys().toArray();

    const nameMap = new Map();
    for (let i = 0; i < keys.length; ++i) {
      nameMap.set(
        list.get(keys[i])?.at(0)?.areaNm,
        list.get(keys[i])?.at(0)?.areaCd
      );
    }

    setNamemap(nameMap);
  });

  if (data) {
    return (
      <div className={styles.container}>
        <h2>검색할 여행지를 입력하세요</h2>
        <div className={styles.inner}>
          <label>
            <select value={region} onChange={(e) => setRegion(e.target.value)}>
              {Array.from(namemap.keys()).map((item, index) => {
                return <option key={index}>{item}</option>;
              })}
            </select>
          </label>
          <select onChange={(e)=>{
            setSignNm(Number(e.target.value));}}>
            {data.get(region)?.map((item, index) => {
              return (<option value={item.sigunguCd} key={index}>{item.sigunguNm}</option>);
            })}
          </select>
          <button onClick={OnClick}>검색하기</button>
        </div>
        {total && total.map((item: DataType, index: number) => {
            return(
              <div key={index}>
                {item.address}
                {item.name}
              </div>
            )
        })}
      </div>
    );
  }
};

export default Codi;
