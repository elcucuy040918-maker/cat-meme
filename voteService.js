// 투표율 및 총 표수 계산 전용 함수
export function calculatePercent(votesA = 0, votesB = 0) {
  const total = votesA + votesB;
  if (total === 0) return { percentA: 50, percentB: 50, total: 0 };
  const percentA = Math.round((votesA / total) * 100);
  return { percentA, percentB: 100 - percentA, total };
}

// 투표 처리 API 통신 (D1 DB 연동용)
export async function sendVote(matchId, option) {
  try {
    const res = await fetch('/api/poll', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'vote', id: matchId, option })
    });
    return await res.json();
  } catch (err) {
    console.error('투표 전송 실패:', err);
    return null;
  }
}