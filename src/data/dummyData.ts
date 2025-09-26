'use client'

import { UserProfile, MatchData } from '../contexts/AppContext'

export const dummyUser: UserProfile = {
  id: 'user_001',
  email: 'demo@meebud.com',
  name: '김지현',
  age: 28,
  height: 165,
  job: 'UX 디자이너',
  education: '서울대학교 시각디자인학과',
  location: '서울 강남구',
  photos: [
    '/images/demo-photo1.jpg',
    '/images/demo-photo2.jpg',
    '/images/demo-photo3.jpg'
  ],
  introduction: '안녕하세요! 디자인을 통해 세상을 더 아름답게 만들고 싶은 김지현입니다. 여행과 독서, 그리고 새로운 문화를 경험하는 것을 좋아해요. 진솔한 대화를 나누며 함께 성장할 수 있는 분을 만나고 싶습니다.',
  personality: ['외향적', '창의적', '공감능력', '책임감', '유머감각'],
  hobbies: ['여행', '독서', '요리', '사진', '전시관람'],
  mbti: 'ENFP',
  isVerified: true,
  isProfileComplete: true,
  createdAt: '2024-01-15T00:00:00Z'
}

export const dummyMatches: MatchData[] = [
  {
    id: 'match_001',
    userId: 'user_001',
    matchedUserId: 'user_002',
    matchedUser: {
      id: 'user_002',
      name: '박민수',
      age: 30,
      job: '소프트웨어 엔지니어',
      education: '연세대학교 컴퓨터공학과',
      photos: ['/images/match-photo1.jpg'],
      introduction: '기술과 사람을 연결하는 소프트웨어를 개발하는 박민수입니다. 주말에는 등산과 독서를 즐기며, 새로운 기술을 배우는 것을 좋아합니다.',
      personality: ['신중함', '논리적', '성실함', '호기심', '배려심'],
      hobbies: ['등산', '독서', '프로그래밍', '게임', '영화감상'],
      mbti: 'INTJ',
      faceType: '둥근형',
      location: '서울 서초구',
      distance: '3.2km',
      isVerified: true
    },
    compatibility: 94,
    matchingReason: 'MBTI 궁합과 공통 관심사인 독서를 통한 깊은 대화가 가능하며, 서로 다른 분야에서의 전문성으로 상호 보완적인 관계를 형성할 수 있습니다.',
    aiAnalysis: '두 분 모두 지적 호기심이 강하고 새로운 것을 배우는 것을 즐기십니다. 김지현님의 창의적인 사고와 박민수님의 논리적인 접근 방식이 서로를 보완하며, 독서라는 공통 취미를 통해 깊이 있는 대화를 나눌 수 있을 것으로 예상됩니다. 또한 두 분 모두 성실하고 책임감이 강해 안정적인 관계를 유지할 가능성이 높습니다.',
    confidenceScore: 94,
    matchingFactors: [
      'MBTI 궁합 (ENFP-INTJ)',
      '공통 취미: 독서',
      '상호 보완적 성격',
      '지적 호기심 일치',
      '거주지 근접성'
    ],
    status: 'pending',
    createdAt: '2024-03-15T10:30:00Z',
    updatedAt: '2024-03-15T10:30:00Z'
  },
  {
    id: 'match_002',
    userId: 'user_001',
    matchedUserId: 'user_003',
    matchedUser: {
      id: 'user_003',
      name: '이준호',
      age: 29,
      job: '마케팅 매니저',
      education: '고려대학교 경영학과',
      photos: ['/images/match-photo2.jpg'],
      introduction: '브랜드 스토리를 만들어가는 마케터 이준호입니다. 여행을 통해 새로운 영감을 얻고, 사진으로 순간을 기록하는 것을 좋아합니다.',
      personality: ['외향적', '열정적', '창의적', '소통능력', '추진력'],
      hobbies: ['여행', '사진', '카페투어', '전시관람', '운동'],
      mbti: 'ENFJ',
      faceType: '각진형',
      location: '서울 홍대입구',
      distance: '5.8km',
      isVerified: true
    },
    compatibility: 88,
    matchingReason: '여행과 전시관람이라는 공통된 취미로 많은 경험을 함께 나눌 수 있으며, 두 분 모두 외향적이고 창의적인 성향으로 활발한 관계를 형성할 수 있습니다.',
    aiAnalysis: '김지현님과 이준호님은 모두 외향적이고 창의적인 성향을 가지고 계십니다. 여행과 전시관람, 사진이라는 공통 관심사를 통해 많은 추억을 함께 만들어갈 수 있을 것입니다. 두 분 모두 새로운 것에 대한 호기심이 강하고 활동적이어서 다양한 경험을 함께 공유할 수 있는 역동적인 관계가 될 것으로 예상됩니다.',
    confidenceScore: 88,
    matchingFactors: [
      '공통 취미: 여행, 전시관람',
      '외향적 성격 일치',
      '창의적 업무 분야',
      '활발한 라이프스타일',
      '비슷한 연령대'
    ],
    status: 'pending',
    createdAt: '2024-03-14T14:20:00Z',
    updatedAt: '2024-03-14T14:20:00Z'
  },
  {
    id: 'match_003',
    userId: 'user_001',
    matchedUserId: 'user_004',
    matchedUser: {
      id: 'user_004',
      name: '최성민',
      age: 32,
      job: '건축사',
      education: '한양대학교 건축학과',
      photos: ['/images/match-photo3.jpg'],
      introduction: '공간을 통해 사람들의 일상을 더 풍요롭게 만드는 건축사 최성민입니다. 클래식 음악과 미술을 사랑하며, 조용한 곳에서의 산책을 즐깁니다.',
      personality: ['내성적', '섬세함', '예술적', '완벽주의', '차분함'],
      hobbies: ['미술감상', '클래식음악', '산책', '독서', '스케치'],
      mbti: 'ISFP',
      faceType: '타원형',
      location: '서울 용산구',
      distance: '7.1km',
      isVerified: true
    },
    compatibility: 85,
    matchingReason: '미술과 예술에 대한 깊은 이해를 공유하며, 김지현님의 활발함과 최성민님의 차분함이 균형을 이루어 안정적이고 깊이 있는 관계를 만들 수 있습니다.',
    aiAnalysis: '김지현님의 디자인적 감각과 최성민님의 건축적 미감이 서로를 자극하며 성장할 수 있는 관계입니다. 비록 성격적으로는 다소 차이가 있지만, 예술과 미에 대한 공통된 관심사를 통해 깊이 있는 대화와 이해를 나눌 수 있을 것입니다. 최성민님의 차분함이 김지현님에게 안정감을 줄 수 있을 것으로 예상됩니다.',
    confidenceScore: 85,
    matchingFactors: [
      '예술적 감각 공유',
      '디자인-건축 분야 연관성',
      '상호 보완적 성격',
      '미술 관련 공통 관심사',
      '깊이 있는 대화 가능성'
    ],
    status: 'accepted',
    createdAt: '2024-03-13T16:45:00Z',
    updatedAt: '2024-03-15T09:15:00Z'
  }
]

export const dummyNotifications = [
  {
    id: 'notif_001',
    type: 'success' as const,
    message: '새로운 매칭이 도착했어요! 94% 궁합의 박민수님을 확인해보세요.',
    timestamp: '2024-03-15T10:30:00Z'
  },
  {
    id: 'notif_002',
    type: 'info' as const,
    message: '프로필 사진이 승인되었어요. 더 많은 매칭 기회가 생겼습니다!',
    timestamp: '2024-03-15T09:15:00Z'
  },
  {
    id: 'notif_003',
    type: 'success' as const,
    message: '축하해요! 최성민님과 매칭이 성사되었어요. 첫 만남 일정을 조율해보세요.',
    timestamp: '2024-03-14T18:22:00Z'
  }
]

export const dummyPaymentHistory = [
  {
    id: 1,
    matchedUser: '최성민',
    userAvatar: '/images/match-photo3.jpg',
    amount: 50000,
    paymentMethod: '카카오페이',
    date: '2024-03-14',
    status: 'completed' as const
  },
  {
    id: 2,
    matchedUser: '정우진',
    userAvatar: '/images/match-photo4.jpg',
    amount: 50000,
    paymentMethod: '토스페이',
    date: '2024-03-01',
    status: 'completed' as const
  },
  {
    id: 3,
    matchedUser: '김태현',
    userAvatar: '/images/match-photo5.jpg',
    amount: 50000,
    paymentMethod: '신용카드',
    date: '2024-02-18',
    status: 'completed' as const
  }
]

export const dummyMessages = [
  {
    id: 'msg_001',
    matchId: 'match_003',
    fromUserId: 'user_004',
    fromUserName: '최성민',
    message: '안녕하세요! 김지현님의 포트폴리오를 보니 정말 감각적이시네요. 혹시 시간이 되신다면 이번 주말에 서울시립미술관 전시를 함께 보는 것은 어떨까요?',
    timestamp: '2024-03-15T14:30:00Z',
    isRead: false
  },
  {
    id: 'msg_002',
    matchId: 'match_003',
    fromUserId: 'user_001',
    fromUserName: '김지현',
    message: '와, 정말 좋아요! 저도 그 전시 보고 싶었는데 마침 잘됐네요. 토요일 오후 2시는 어떠세요?',
    timestamp: '2024-03-15T15:45:00Z',
    isRead: true
  }
]