// utils.ts
// 抽象的なタスクを実行する汎用関数
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * クラス名生成関数 (chadcn/ui が使用)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 範囲関数: 開始値と終了値の間の連続した数値の配列を返す
 *
 * @param start 開始値
 * @param end 終了値(省略可。省略時は開始値が0、終了値が開始値となる)
 * @param step 増分(省略可、デフォルト値は1)
 * @returns 配列 (開始値から終了値までの数値を格納)
 *
 * @example
 * range(3) // [0, 1, 2]
 * range(2, 6) // [2, 3, 4, 5]
 * range(3, 10, 2) // [3, 5, 7, 9]
 * range(10, undefined, 3) // [0, 3, 6, 9]
 *
 * // map 関数と組み合わせて使用
 * // (例: rating が 3 なら星を３つ表示する)
 * function StarRating({ rating }) {
 *   return (
 *     <div className="star-wrapper">
 *       {range(rating).map(num => (
 *         <img
 *           key={num}
 *           alt="Star"
 *           className="gold-star"
 *           src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
 *         />
 *       ))}
 *     </div>
 *   );
 * }
 */
export const range = (start: number, end?: number, step = 1): number[] => {
  let output: number[] = []
  if (typeof end === 'undefined') {
    end = start
    start = 0
  }
  for (let i = start; i < end; i += step) {
    output.push(i)
  }
  return output
}
