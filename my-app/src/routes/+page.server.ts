//+page.server.ts ー +page.svelteに渡すデータ処理を行う（サーバーでのみ動く）
// microCMSとの通信処理はAPIキー秘匿の関係上サーバーサイドでのみ行いたいので、今回は+page.server.tsの方を利用します。
import { getList } from '../lib/microcms';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return await getList();
};

// 上記のload関数で返した値は+page.svelte側でdataという変数に割り当てられます。

export const prerender = true;
