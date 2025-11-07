# NextStep Tour Integration - Creator Lab

Hệ thống hướng dẫn từng bước cho website Creator Lab sử dụng thư viện NextStepJS.

## Tính năng

- ✅ Tour tự động bắt đầu cho người dùng mới
- ✅ Thiết kế card tour tùy chỉnh với gradient đẹp mắt
- ✅ Nút "Hướng dẫn" cố định để khởi động tour bất kỳ lúc nào
- ✅ Lưu trạng thái đã xem tour trong localStorage
- ✅ Keyboard shortcut (Ctrl/Cmd + /) để bắt đầu tour
- ✅ Responsive design cho mobile và desktop
- ✅ Animations mượt mà với motion library

## Cách hoạt động

### 1. Auto-start Tour
Tour sẽ tự động bắt đầu sau 3 giây cho người dùng lần đầu tiên truy cập website.

### 2. Manual Tour
Người dùng có thể bắt đầu tour bằng cách:
- Click nút "Hướng dẫn" ở góc dưới bên phải
- Nhấn tổ hợp phím Ctrl/Cmd + /

### 3. Tour Steps
Tour bao gồm 5 bước chính:
1. **Hero Section** - Giới thiệu Creator Lab
2. **Benefits** - Khám phá quyền lợi 39.5 triệu
3. **Steps** - Quy trình đăng ký 3 bước
4. **FAQ** - Giải đáp thắc mắc
5. **Registration** - Form đăng ký

### 4. Trạng thái lưu trữ
- `creator-lab-tour-completed`: Đánh dấu đã hoàn thành tour
- `creator-lab-visited`: Đánh dấu đã từng truy cập website

## Cấu trúc Components

```
src/components/OnboardingTour/
├── TourProvider.tsx          # NextStepProvider wrapper
├── TourManager.tsx           # Quản lý logic auto-start và keyboard
├── TourButton.tsx            # Nút khởi động tour thủ công
├── CustomTourCard.tsx        # Card tour tùy chỉnh
├── CustomTourCard.module.css # Styles cho card
└── TourButton.module.css     # Styles cho button
```

## Cấu hình Tour

Các bước tour được định nghĩa trong `src/app/layout.tsx`:

```typescript
const tourSteps: Tour[] = [
  {
    tour: 'creator-lab-onboarding',
    steps: [
      {
        icon: '🎉',
        title: 'Chào mừng đến Creator Lab!',
        content: 'Nội dung hướng dẫn...',
        selector: '#hero-section',
        side: 'bottom',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 8,
      },
      // ... các bước khác
    ]
  }
]
```

## Tùy chỉnh

### Thay đổi delay auto-start
```tsx
<TourManager autoStartDelay={5000} /> // 5 giây
```

### Thay đổi tên tour
```tsx
<TourManager tourName="my-custom-tour" />
```

### Tùy chỉnh card design
Chỉnh sửa file `CustomTourCard.module.css` để thay đổi giao diện card.

### Thêm bước tour mới
1. Thêm element với ID tương ứng trong HTML
2. Thêm step mới vào array `tourSteps` trong layout.tsx

## API NextStepJS được sử dụ

- `NextStepProvider`: Cung cấp context cho toàn bộ app
- `NextStep`: Component wrapper với cấu hình tour
- `useNextStep`: Hook để điều khiển tour programmatically
- `CardComponentProps`: Type cho custom card component

## Reset Tour cho Development

Để test lại tour trong development mode:

```javascript
// Chạy trong browser console
localStorage.removeItem('creator-lab-tour-completed')
localStorage.removeItem('creator-lab-visited')
```

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support  
- Safari: Full support
- Mobile browsers: Responsive design optimized

## Performance

- Bundle size minimal: Chỉ import các adapter cần thiết
- Lazy loading: Tour components chỉ render khi cần
- Optimized animations: Sử dụng CSS transforms và motion library