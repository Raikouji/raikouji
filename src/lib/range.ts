/**
 * 範囲関数: 開始値と終了値の間の連続した数値の配列を返す
 *
 * @param startInput 開始値
 * @param endInput 終了値(省略可。省略時は開始値が0、終了値が開始値となる)
 * @param step 増分(省略可、デフォルト値は1)
 * @returns 配列 (開始値から終了値までの数値を格納)
 *
 * @example
 * range(3) // [0, 1, 2]
 * range(2, 6) // [2, 3, 4, 5]
 * range(3, 10, 2) // [3, 5, 7, 9]
 * range(10, undefined, 3) // [0, 3, 6, 9]
 *
 * ```
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
 * ```
 */
export const range = (
	startInput: number,
	endInput?: number,
	step = 1,
): number[] => {
	let start = startInput
	let end = endInput

	if (typeof end === 'undefined') {
		end = start
		start = 0
	}

	const output: number[] = []
	for (let i = start; i < end; i += step) {
		output.push(i)
	}
	return output
}
