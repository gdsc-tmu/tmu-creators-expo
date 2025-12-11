import type React from "react";
import { motion } from "motion/react"
const EventsData = [
  {
    eventType: "club",
    clubName: "CORE",
    description: "・ハイブリッドロケットエンジンの展示\n・制作した機体の展示"
  },
  {
    eventType: "club",
    clubName: "TEXNITIS",
    description: "・「関東夏ロボコン」で制作した機体の展示\n・回路や機構などの展示"
  },
  {
    eventType: "club",
    clubName: "AR会",
    description: "・作成したゲームの展示"
  },
  {
    eventType: "club",
    clubName: "メタバース研究会",
    description: "・フェイストラッキング体験\n・VRゲーム体験\n・ゲーム展示"
  },
  {
    eventType: "lecture",
    clubName: "システムデザイン学部 インダストリアルアート学科 馬場 哲晃",
    description: ""
  },
  {
    eventType: "lt",
    clubName: "Taniii",
    description: "・星の世界の地図の話: Google Sky MapをAI Agentでよみがえらせる\n・ 地図という自由度の高いUIにAIエージェントを導入するUX設計\n・ Gemini APIとAI Agentライブラリ mastra を組み合わせたAIエンジニアリング\n・ Kotlin Multiplatformの活用\n・ 星の世界の地図と天体計算の話"
  },
  {
    eventType: "lt",
    clubName: "高木 皓介",
    description: "・株式会社衝動および玄技会（サークル）の活動紹介\n・ 株式会社衝動と玄技会が共同開発している自動ハッキングツール（脆弱性診断ツール）の技術的な解説"
  },
  {
    eventType: "lt",
    clubName: "らむはち",
    description: "モノづくりサークルにおける渉外活動の心得"
  },
  {
    eventType: "lt",
    clubName: "Nyanziba",
    description: "私が参加しているチームが出場しているつくばチャレンジの機体を自分で作りなおして都立大一周をしてみたいという計画について"
  },
  {
    eventType: "lt",
    clubName: "みがき",
    description: "・同人誌，zineなどの「冊子もの」と手書き地図を用いたグラフィックの制作について\n・ 地理学研究会での会誌編集デザインを含めた活動を通して制作してきた作品の紹介\n・制作過程やこだわっている点，都立大との関わりについて"
  }
]


export const Events: React.FC = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      {EventsData.map((event, index) => (
        <Event
          key={index}
          eventType={event.eventType as "club" | "lecture" | "lt" | "other"}
          clubName={event.clubName}
          description={event.description}
        />
      ))}
    </div>
  )
}

export const Event: React.FC<{
  eventType: "club" | "lecture" | "lt" | "other";
  clubName: string;
  description: string;
}> = ({ eventType, clubName, description }) => {

  let borderColor: string;
  let textColor: string;
  let tag = "";
  switch (eventType) {
    case "club":
      borderColor = "border-orange-300";
      textColor = "text-orange-400/20";
      tag = "クラブ展示";
      break;
    case "lecture":
      borderColor = "border-purple-400";
      textColor = "text-purple-400/20";
      tag = "講演";
      break;
    case "lt":
      borderColor = "border-blue-400";
      textColor = "text-blue-400/20";
      tag = "LT";
      break;
    case "other":
      borderColor = "border-gray-400";
      textColor = "text-gray-400/20";
      tag = "その他";
      break;
    default:
      borderColor = "border-gray-400";
      textColor = "text-gray-400/20";
      tag = "その他";
  }

  return (
    <motion.div
      viewport={{ once: true, amount: 0.2 }}
      initial={{ opacity: 0, translateY: 10 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={"bg-white relative backdrop-blur-2xl p-6 rounded-lg w-full shadow-lg tracking-wider border-t-2 " + borderColor}>
      <div>
        <p className={"absolute text-2xl top-1 left-1 font-bold " + textColor}>{tag}</p>
        <h3 className="mt-2 text-lg font-semibold">{clubName} {eventType == "lecture" ? "先生" : "さん"}</h3>
        <p className="mt-2 text-gray-700 whitespace-pre-line">{description}</p>
      </div>
    </motion.div>
  );
}
