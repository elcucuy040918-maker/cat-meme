// 1. 전체 배틀 목록 불러오기
export async function fetchMatches() {
  try {
    const res = await fetch('/api/poll?t=' + Date.now(), { cache: 'no-store' });
    if (!res.ok) throw new Error('서버 응답 오류');
    return await res.json();
  } catch (err) {
    console.error('배틀 목록 조회 실패:', err);
    return [];
  }
}

// 2. 새 배틀 저장하기
export async function createMatch(matchData) {
  try {
    const res = await fetch('/api/poll', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'create', ...matchData })
    });
    return await res.json();
  } catch (err) {
    console.error('배틀 생성 실패:', err);
    return { success: false };
  }
}

// 3. 이미지 업로드 (Cloudflare R2 연동용)
export async function uploadImage(file) {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch('/api/upload', { method: 'POST', body: formData });
    return await res.json(); // { url: 'https://...' }
  } catch (err) {
    console.error('이미지 업로드 실패:', err);
    return { url: '' };
  }
}