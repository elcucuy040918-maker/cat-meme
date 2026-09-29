import { calculatePercent } from '../services/voteService.js';

export function renderBattleCard(match) {
  const { percentA, percentB, total } = calculatePercent(match.option_a_votes, match.option_b_votes);

  const imgA = match.option_a_img 
    ? `<img src="${match.option_a_img}" class="w-full h-48 object-cover rounded-2xl shadow-sm">` 
    : `<div class="w-full h-48 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-300"><i class="fa-solid fa-cat text-4xl"></i></div>`;

  const imgB = match.option_b_img 
    ? `<img src="${match.option_b_img}" class="w-full h-48 object-cover rounded-2xl shadow-sm">` 
    : `<div class="w-full h-48 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-300"><i class="fa-solid fa-cat text-4xl"></i></div>`;

  return `
    <div class="battle-card-wrapper bg-white rounded-3xl p-6 md:p-8 border border-gray-100 soft-shadow space-y-6">
      <div class="flex justify-between items-start border-b border-gray-100 pb-4">
        <div>
          <h2 class="text-xl md:text-2xl font-black text-gray-900">${match.title}</h2>
          ${match.description ? `<p class="text-sm text-gray-500 mt-1">${match.description}</p>` : ''}
        </div>
        <span class="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full shrink-0">
          총 <strong class="text-gray-900">${total}</strong>표
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative items-center">
        <!-- 고양이 A -->
        <div class="clash-left bg-gray-50 p-5 rounded-2xl border border-gray-100 text-center space-y-4">
          ${imgA}
          <h3 class="text-lg font-bold text-gray-900">${match.option_a_name}</h3>
          <div class="flex justify-between items-center pt-2">
            <span class="text-2xl font-black text-orange-500">${percentA}%</span>
            <button data-id="${match.id}" data-option="a" class="btn-vote bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-6 py-2.5 rounded-xl transition shadow-md">
              투표하기
            </button>
          </div>
        </div>

        <!-- VS 배지 -->
        <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-10 h-10 bg-gray-900 text-white font-black text-xs items-center justify-center rounded-full shadow-lg border-2 border-white italic">
          VS
        </div>

        <!-- 고양이 B -->
        <div class="clash-right bg-gray-50 p-5 rounded-2xl border border-gray-100 text-center space-y-4">
          ${imgB}
          <h3 class="text-lg font-bold text-gray-900">${match.option_b_name}</h3>
          <div class="flex justify-between items-center pt-2">
            <span class="text-2xl font-black text-amber-500">${percentB}%</span>
            <button data-id="${match.id}" data-option="b" class="btn-vote bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold px-6 py-2.5 rounded-xl transition shadow-md">
              투표하기
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}