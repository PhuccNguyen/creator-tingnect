import { Target, Trophy, Crown, DollarSign } from 'lucide-react';

export interface TabItem {
  id: number;
  label: string;
  emoji?: string;
  icon: any;
  title: string;
  description: string;
  value: string;
  highlight: string;
  color: string;
}

export const tabs: TabItem[] = [
  {
    id: 0,
    label: 'Creator Lab',
    emoji: '🎯',
    icon: Target,
    title: 'Creator Lab',
    description: '33+ AI Tools',
    value: 'Là Gì?',
    highlight: 'MIỄN PHÍ',
    color: '#8B5CF6'
  },
  {
    id: 1,
    label: 'Cấp Độ',
    emoji: '🏆',
    icon: Trophy,
    title: 'Level System',
    description: '11 cấp độ',
    value: '245M',
    highlight: 'Thưởng tổng',
    color: '#F59E0B'
  },
  {
    id: 2,
    label: 'Giải Tuần',
    emoji: '👑',
    icon: Crown,
    title: 'Weekly Top',
    description: 'Mỗi tuần',
    value: 'Gói AI',
    highlight: 'Reset 7 ngày',
    color: '#EF4444'
  },
  {
    id: 3,
    label: 'Hoa Hồng',
    emoji: '💰',
    icon: DollarSign,
    title: 'Thu Nhập',
    description: 'Vote trả phí',
    value: '20%',
    highlight: 'Hàng tuần',
    color: '#10B981'
  }
];