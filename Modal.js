export function renderModal() {
  return `
    <div id="create-modal" class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4">
      <div class="bg-white rounded-3xl w-full max-w-lg p-6 md:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center border-b pb-4">
          <h3 class="text-xl font-black text-gray-900">🐾 새 밈 대결 작성</h3>
          <button id="btn-close-modal" class="text-gray-400 hover:text-gray-900 text-xl font-bold">✕</button>
        </div>

        <form id="form-create-match" class="space-y-4">
          <div>
            <label class="block text-xs font-bold text-gray-700 mb-1">대결 제목</label>
            <input type="text" id="input-title" placeholder="예: 최고로 귀여운 식빵 고양이는?" required class="w-full border rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
          </div>

          <!-- 옵션 A -->
          <div class="p-4 bg-gray-50 rounded-2xl border space-y-2">
            <span class="text-xs font-black text-orange-500">고양이 A</span>
            <input type="text" id="input-name-a" placeholder="이름 (예: 치즈 태비)" required class="w-full border rounded-xl p-2.5 text-sm">
            <input type="file" id="file-a" accept="image/*" class="text-xs text-gray-500">
          </div>

          <!-- 옵션 B -->
          <div class="p-4 bg-gray-50 rounded-2xl border space-y-2">
            <span class="text-xs font-black text-amber-500">고양이 B</span>
            <input type="text" id="input-name-b" placeholder="이름 (예: 고등어 태비)" required class="w-full border rounded-xl p-2.5 text-sm">
            <input type="file" id="file-b" accept="image/*" class="text-xs text-gray-500">
          </div>

          <div class="flex justify-end gap-3 pt-4 border-t">
            <button type="button" id="btn-cancel-modal" class="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 text-sm font-bold">취소</button>
            <button type="submit" class="px-6 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-bold shadow-md">등록하기</button>
          </div>
        </form>
      </div>
    </div>
  `;
}