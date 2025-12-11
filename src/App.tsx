import { TypeAnimation } from 'react-type-animation';
import { motion, type Variants } from "motion/react"
import Timetable from './table';
import { Events } from './event';

function App() {
  const arrowVariants = {
    // 初期状態（アニメーション開始前）
    hidden: {
      opacity: 0, // 透明
      y: -20,     // 上から少し隠れた位置
    },
    // アニメーション後の状態（表示され、下に移動）
    visible: {
      opacity: 1, // 不透明
      y: 20,      // 下に移動
      transition: {
        duration: 1.5, // アニメーションの速度（1.5秒かけて移動・フェード）
        ease: "easeInOut", // 始まりと終わりがゆっくり
        repeat: Infinity, // 無限に繰り返す
        repeatType: "reverse", // 逆方向にアニメーションして戻る（フェードイン・アウトが自然に見える）
      },
    },
  };


  return (
    <>
      <div className='relative w-full h-svh'>
        <div className="absolute top-15 md:top-25 sm:top-15 left-10">
          <TypeAnimation
            className="text-2xl/12 sm:text-5xl/20 tracking-wider font-bold sm:font-semibold lg:text-6xl/23 whitespace-pre-line"

            sequence={[
              `都立大の学生が\nつくっているものを\n見る・共有するイベント`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
              1000,
              '',
              500,
              `都立大の\nものづくりが好きな学生の\n交流会`,
              1000,
              '',
              500,
            ]}
            repeat={Infinity}
          />
          <p className="mt-5 text-xl/8 sm:text-2xl/10 lg:text-3xl/15 font-bold tracking-wider">TMU Creators EXPO</p>
        </div>
        <div className="absolute bottom-25 sm:bottom-25 right-7">
          <motion.h3
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
            className="text-lg/7 sm:text-xl/10 tracking-wider font-extrabold sm:font-bold lg:text-2xl/13">予約不要 / 途中参加OK</motion.h3>
          <motion.h2
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
            className="text-2xl/13 sm:text-3xl/20 tracking-wider font-bold sm:font-semibold lg:text-4xl/23">2025/12/25（木）16:00-</motion.h2>
          <motion.h3
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.4, duration: 0.4, ease: 'easeOut' }}
            className="text-md/8 sm:text-xl/10 lg:text-2xl/10 font-bold tracking-wider">東京都立大学 日野キャンパス 6号館 1F<br />オープンイノベーションスペース</motion.h3>
        </div>
        <div className='flex flex-col items-start absolute bottom-70 left-6 sm:left-8 gap-3'>
          <a
            target="_blank" rel="noopener noreferrer"
            className="block rounded-full bg-gray-900 text-white px-8 py-3 text-md sm:text-xl font-semibold hover:bg-gray-700 transition-colors"
            href="https://x.com/intent/post?text=%E3%80%8CTMU%20Creators%20EXPO%E3%80%8D%0A2025%2F12%2F25%20%E9%96%8B%E5%82%AC%EF%BC%81%0Ahttps%3A%2F%2Fgdsc-tmu.github.io%2Ftmu-creators-expo">
            Xで共有する
          </a>
          <a
            target="_blank" rel="noopener noreferrer"
            className="block rounded-full bg-red-600 text-white px-6 py-3 text-sm sm:text-lg font-semibold   hover:bg-red-700 transition-colors text-nowrap"
            href="https://gdsc-tmu.connpass.com/event/376912/">
            Connpassで参加表明
            <span className='text-xs'> ※任意</span>
          </a>
        </div>

        <motion.div
          variants={arrowVariants as Variants}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: '3em',
            color: '#555',
          }}
          className="absolute bottom-20 sm:left-10"
        >
          ↓
        </motion.div>
      </div>

      <div className='w-full container mx-auto pt-32 pb-40 px-3 flex flex-col gap-10'>
        <p className='text-4xl self-center font-medium'>概要</p>
        <div className="bg-white backdrop-blur-2xl p-9 rounded-lg w-full shadow-lg tracking-wider">
          <h1 className='text-2xl sm:text-3xl font-bold'>TMU Creators EXPOへようこそ！</h1>
          <div className='h-4 text-md/15 sm:text-lg/20'></div>
          <p>本イベントは、東京都立大学で「ものづくり」に関わる学生やクラブを中心に、<br />これから関わってみたい学生や、関心を持つ教職員・OBOGも含めて一堂に会し、<br /><span className='font-bold'>プレゼンテーション・作品展示・自由交流</span>を通じて，
            技術・経験・課題・活動の工夫を持ち寄り、横のつながりが生まれる場を提供します。</p>
        </div>

        <div className="bg-white backdrop-blur-2xl p-9 rounded-lg w-full shadow-lg tracking-wider">
          <h1 className='text-2xl sm:text-3xl font-bold text-pink-500'>対象者</h1>
          <div className='h-4 text-md/15 sm:text-lg/20'></div>
          <ul className='list-disc list-inside'>
            <li>東京都立大学の学生（学部生・大学院生）</li>
            <li>東京都立大学の教職員・OBOG</li>
            <li>東京都立大学に所属するクラブの構成員（インターカレッジクラブの構成員を含む）</li>
            <p>
              <br />
              ※ 事前知識・専門分野を問わず、どの学年・学部の方でも参加可能です。
              <br />
              ものづくりに興味がある方，これから始めたい方も対象です．
              <br />
              ※誠に恐縮ながら，<span className='font-bold'>学外の方のご参加はできません</span>．ご了承ください．

            </p>

          </ul>
        </div>
        <div className="bg-white backdrop-blur-2xl p-9 rounded-lg w-full shadow-lg tracking-wider">
          <h1 className='text-2xl sm:text-3xl font-bold text-green-500'>参加方法</h1>
          <div className='h-4 text-md/15 sm:text-lg/20'></div>
          <p>参加費は<span className='font-bold'>無料，事前予約も不要</span>です．当日直接会場にお越しください．</p>
          <p>※connpassでの参加登録も可能です！（必須ではありません）</p>
        </div>

        <a className="block rounded-full bg-gray-900 text-white w-full p-6 text-xl text-center backdrop-blur-lg hover:bg-gray-700" href="https://x.com/GdscTmu" target="_blank">最新情報は公式Xから！</a>

        <p className='mt-10 text-4xl self-center font-medium'>タイムテーブル</p>
        <Timetable />

        <div className='pt-10'>
          <h2 className='text-4xl self-center font-medium text-center mb-10'>企画一覧</h2>
          <Events />
        </div>

        <div className='pt-10 self-center'>
          <h2 className='text-4xl self-center font-medium text-center mb-10'>注意事項</h2>
          <ul className='list-disc list-inside'>
            <li className='mb-4'>イベント内では，以下の行為は行わないでください．</li>
            <li className='ml-4'>本イベントにおける営利活動</li>
            <li className='ml-4'>学外団体による勧誘行為</li>
            <li className='ml-4'>会場内での飲酒・喫煙</li>
            <li className='ml-4'>その他，他の参加者を不快にする行動，および他の参加者に危害を及ぼす行動</li>
          </ul>
          <ul className='list-disc list-inside mt-10'>
            <li className='mb-4'>下記の行動規範への同意をお願いします．</li>
            <li className='ml-4 text-blue-500 underline'><a href='https://docs.google.com/document/d/19ro-uIGLWc5LqtCb8YUTvYXSwaH-GrdB0Bs9ha4Kw9U/edit?tab=t.0#heading=h.ngpe4rl9dyyb' target='_blank'>行動規範</a></li>
            <li className='ml-4'>ハラスメント行為に関して，および他にお困りのことがありましたら，<br />会場のスタッフにお声がけいただくか，<code>gdsctmu.jp@gmail.com</code>までご連絡ください．</li>
          </ul>
        </div>

        <p className='text-4xl self-center font-medium mt-10'>主催</p>
        <p className='text-xl text-center self-center font-medium'>Google Developer Groups on Campus TMU</p>



      </div>

      <div className='w-full h-20 bg-gray-100 flex justify-center items-center'>
        <p className='self-center text-sm'>© Google Developer Groups on Campus TMU 2025</p>
      </div>
    </>
  )
}


export default App
