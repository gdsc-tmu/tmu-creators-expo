import { motion } from "motion/react"

// 1. データ型の定義（TypeScriptの場合のイメージ）
// type Event = { start: string; end: string; name: string; color?: string };

// サンプルデータ
const events = [
  { start: "16:00", end: "16:05", name: "オープニング", color: "bg-gray-100" },
  { start: "16:05", end: "16:20", name: "クラブ紹介：CORE さん", color: "bg-red-100" },
  { start: "16:20", end: "16:35", name: "クラブ紹介：AR会 さん", color: "bg-red-100" },
  { start: "16:35", end: "16:45", name: "クラブ紹介：GDGoC TMU", color: "bg-red-100" },
  { start: "16:45", end: "16:55", name: "講演：システムデザイン学部 インダストリアルアート学科 馬場 先生", color: "bg-purple-100" },
  { start: "16:55", end: "17:05", name: "休憩・交流", color: "bg-gray-100" },
  { start: "17:05", end: "17:20", name: "クラブ紹介：メタバース研究会 さん", color: "bg-red-100" },
  { start: "17:20", end: "17:35", name: "クラブ紹介：TEXNITIS さん", color: "bg-red-100" },
  { start: "17:35", end: "17:40", name: "LT：Taniii さん", color: "bg-blue-100" },
  { start: "17:40", end: "17:45", name: "LT：高木 皓介 さん", color: "bg-blue-100" },
  { start: "17:45", end: "17:50", name: "LT：らむはち さん", color: "bg-blue-100" },
  { start: "17:50", end: "17:55", name: "LT：Nyanziba さん", color: "bg-blue-100" },
  { start: "17:55", end: "18:00", name: "LT：みがき さん", color: "bg-blue-100" },
  { start: "18:00", end: "18:15", name: "話題別交流会", color: "bg-green-100" },
  { start: "18:15", end: "18:20", name: "クロージング", color: "bg-gray-100" },
  { start: "18:20", end: "18:45", name: "自由交流会", color: "bg-green-100" },

];

// 設定：タイムテーブルの開始時間と終了時間、スケール
const START_TIME = "16:00";
const END_TIME = "18:45";
const PIXELS_PER_MINUTE = 12; // 1分あたり2px（高さを調整する場合はここを変更）
const TIME_SLOT_INTERVAL = 10; // 左側の時間を何分おきに表示するか

// ヘルパー関数: "HH:MM" を 分（数値）に変換
// 例: "16:30" -> 16*60 + 30 = 990
const timeToMinutes = (timeStr: string) => {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
};

const Timetable = () => {
  // 基準となる開始時間の分換算
  const startMinutes = timeToMinutes(START_TIME);
  const endMinutes = timeToMinutes(END_TIME);
  const totalDuration = endMinutes - startMinutes;

  // 背景のグリッド線と時間ラベルを生成するための配列
  const timeSlots = [];
  for (let i = 0; i <= totalDuration; i += TIME_SLOT_INTERVAL) {
    timeSlots.push(i);
  }

  return (
    <div className="p-4 w-full bg-white shadow-lg rounded-lg ">
      <div className="flex relative border-gray-200">
        {/* 左カラム：時間軸 */}
        <div className="w-16 flex shrink-0 border-r border-gray-200 relative">
          {timeSlots.map((minuteOffset) => {
            // 現在のスロットの時間表記を計算
            const currentTotalMinutes = startMinutes + minuteOffset;
            const h = Math.floor(currentTotalMinutes / 60);
            const m = currentTotalMinutes % 60;
            const label = `${h}:${m.toString().padStart(2, '0')}`;

            return (
              <div
                key={minuteOffset}
                className="absolute w-full text-right pr-2 text-xs text-gray-500"
                style={{
                  top: `${minuteOffset * PIXELS_PER_MINUTE}px`,
                  transform: 'translateY(-50%)', // 文字の中心を線に合わせる
                }}
              >
                {label}
              </div>
            );
          })}
        </div>

        {/* 右カラム：イベントエリア */}
        <div
          className="flex grow relative"
          style={{ height: `${totalDuration * PIXELS_PER_MINUTE}px` }}
        >
          {/* 背景のグリッド線（装飾） */}
          {timeSlots.map((minuteOffset) => (
            <div
              key={`line-${minuteOffset}`}
              className="absolute w-full border-t border-gray-100"
              style={{ top: `${minuteOffset * PIXELS_PER_MINUTE}px` }}
            />
          ))}

          {/* イベントカードの配置 */}
          {events.map((event, index) => {
            const eventStart = timeToMinutes(event.start);
            const eventEnd = timeToMinutes(event.end);

            // 座標と高さの計算
            const topPosition = (eventStart - startMinutes) * PIXELS_PER_MINUTE;
            const height = (eventEnd - eventStart) * PIXELS_PER_MINUTE;

            return (
              <motion.div
                viewport={{ once: true, amount: 0.1 }}
                initial={{ opacity: 0, translateY: 10}}
                whileInView={{ opacity: 1, translateY: 0}}
                transition={{ duration: 0.4, ease:'easeOut' }}
                key={index}
                className={`absolute left-1 right-1 rounded border border-gray-200 p-2 text-sm overflow-hidden shadow-sm ${event.color || 'bg-blue-50'}`}
                style={{
                  top: `${topPosition}px`,
                  height: `${height}px`,
                }}
              >
                <div className="font-bold text-xs text-gray-600 mb-1">
                  {event.start} - {event.end}
                </div>
                <div className="font-medium truncate">
                  {event.name}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timetable;
